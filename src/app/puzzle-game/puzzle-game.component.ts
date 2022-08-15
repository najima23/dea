import { Component, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-puzzle-game',
  templateUrl: './puzzle-game.component.html',
  styleUrls: ['./puzzle-game.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PuzzleGameComponent {
  // Big object that holds app-level state data
  public state = {
    // Diagram state props
    diagramNodeData: [],
    diagramLinkData: [],
    diagramModelData: { prop: 'value' },
    skipsDiagramUpdate: false,
  }; // end state object

  public diagramDivClassName: string = 'gojs-wrapper';
  public paletteDivClassName = 'gojs-palette';

// initialize diagram / templates
  public initDiagram(): go.Diagram {
    const $ = go.GraphObject.make;
    const dia = $(go.Diagram, {
      'undoManager.isEnabled': true,
      model: new go.GraphLinksModel(
        {
          linkFromPortIdProperty: "fromPort",
          linkToPortIdProperty: "toPort",
          nodeKeyProperty: 'id',
          linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
        }
      )
    });

    // define the Node template
    dia.nodeTemplate = $(go.Node, "Auto",
        $(go.Shape, "Circle", { fill: "lightgray" }),
        $(go.Panel, "Table",
          $(go.RowColumnDefinition, { column: 0, alignment: go.Spot.Left}),
          $(go.TextBlock, { column: 0, row: 0, columnSpan: 3, editable: true, alignment: go.Spot.Center, font: "bold 10pt sans-serif", margin: new go.Margin(4, 2) }, new go.Binding("text", "key")),
          $(go.Panel, "Horizontal", { column: 1, row: 1 },
            $(go.Shape,{ width: 6, height: 6, portId: "A", toLinkable: true, fromLinkable: true, cursor: 'pointer', fromLinkableDuplicates: true, toLinkableDuplicates: true, fromLinkableSelfNode: true, toLinkableSelfNode: true }),
          ),
          // $(go.Panel, "Horizontal", { column: 2, row: 1, rowSpan: 2 },
          //   $(go.Shape, { width: 6, height: 6, portId: "Out", cursor: 'pointer', fromLinkable: true, toLinkable: true, fromLinkableDuplicates: true, toLinkableDuplicates: true, fromLinkableSelfNode: true, toLinkableSelfNode: true })  // allow user-drawn links from here
          // )
        )
    );
    return dia;
  }

  /**
   * Handle GoJS model changes, which output an object of data changes via Mode.toIncrementalData.
   * This method should iterate over thoe changes and update state to keep in sync with the FoJS model.
   * This can be done with any preferred state management method, as long as immutability is preserved.
   */
  public diagramModelChange = function(changes: go.IncrementalData) {
    console.log(changes);
    // see gojs-angular-basic for an example model changed handler that preserves immutability
    // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
  };

  public initPalette(): go.Palette {
    const $ = go.GraphObject.make;
    const palette = $(go.Palette);

    initRing();

    palette.padding = new go.Margin(10, 0, 0, 0);

    // define the Node template
    palette.nodeTemplate =
      $(go.Node, "Horizontal",
        { height: 200, width: 130, selectionAdorned: false, cursor: 'grab' },
        $(go.Shape, "Circle",
          { width: 30, height: 30 },
          new go.Binding("stroke", "stroke"),
          new go.Binding("fill", "color"),
          new go.Binding("figure")
        ),
        $(go.TextBlock, { margin: 4, font: "bold 24px sans-serif" },
          new go.Binding("text", "internal")),
        $(go.TextBlock, { margin: 4 },
          new go.Binding("text", "key")),
      );

    palette.linkTemplate = $(go.Link,
        { // because the GridLayout.alignment is Location and the nodes have locationSpot == Spot.Center,
          // to line up the Link in the same manner we have to pretend the Link has the same location spot
          locationSpot: go.Spot.Center,
          selectionAdornmentTemplate:
            $(go.Adornment, "Link",
              { locationSpot: go.Spot.Center },
              $(go.Shape,
                { isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0 }),
              $(go.Shape,  // the arrowhead
                { toArrow: "Standard", stroke: null })
            )
        },
        {
          routing: go.Link.AvoidsNodes,
          curve: go.Link.JumpOver,
          corner: 5,
          toShortLength: 4
        },
        new go.Binding("points"),
        $(go.Shape,  // the link path shape
          { isPanelMain: true, strokeWidth: 2 }),
        $(go.Shape,  // the arrowhead
          { toArrow: "Standard", stroke: null }),
        $(go.TextBlock, { margin: 4 },
          new go.Binding("text", "key")),
      ),

    palette.model = new go.GraphLinksModel([  // specify the contents of the Palette
        { key: "Start", color: "lightgray", internal: "⟶", stroke: "black" },
        { key: "Ende", color: "white", internal: "", stroke: "black", figure: 'Ring' },
        { key: "Edge", color: "white", internal: "", stroke: "black" },
        // { key: "Link", color: "turquoise", internal: "", stroke: "black" },
    ], [
      // the Palette also has a disconnected Link, which the user can drag-and-drop
      {key: 'Lnk', points: new go.List().addAll([new go.Point(10, 0), new go.Point(40, 0), new go.Point(40, 40), new go.Point(70, 40)]) }
    ]);

    return palette;
  }
}

const initRing = () => {
  let GeneratorEllipseSpot1 = new go.Spot(0.156, 0.156);
  let GeneratorEllipseSpot2 = new go.Spot(0.844, 0.844);

  go.Shape.defineFigureGenerator("Ring", function(shape, w, h) {
    let rad = w / 2;
    let geo = new go.Geometry();
    let fig = new go.PathFigure(w, w / 2, true);  // clockwise

    geo.add(fig);
    fig.add(new go.PathSegment(go.PathSegment.Arc, 0, 360, rad, rad, rad, rad).close());

    let rad2 = Math.max(rad - 3, 0);

    if (rad2 > 0) {
      fig.add(new go.PathSegment(go.PathSegment.Move, w / 2 + rad2, w / 2))
      fig.add(new go.PathSegment(go.PathSegment.Arc, 0, -360, rad, rad, rad2, rad2).close());
    }

    geo.spot1 = GeneratorEllipseSpot1;
    geo.spot2 = GeneratorEllipseSpot2;
    geo.defaultStretch = go.GraphObject.Uniform;

    return geo;
  });
}

const initStart = () => {
  go.Shape.defineFigureGenerator("Start", function(shape, w, h) {
    let geo = new go.Geometry();
    let fig = new go.PathFigure(w, w / 2, true);  // clockwise

    geo.defaultStretch = go.GraphObject.Uniform;

    return geo;
  });
}