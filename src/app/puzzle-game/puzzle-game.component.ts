import { ChangeDetectorRef, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { initRing } from "./shapes/shape";
import { DiagramComponent } from "gojs-angular";
import produce from "immer";


class DemoForceDirectedLayout extends go.ForceDirectedLayout {
  // Override the makeNetwork method to also initialize
  // ForceDirectedVertex.isFixed from the corresponding Node.isSelected.
  override makeNetwork(coll) {
    // call base method for standard behavior
    const net = super.makeNetwork(coll);
    net.vertexes.each(vertex => {
      const node = vertex.node;
      if (node !== null) (vertex as any).isFixed = node.isSelected;
    });
    return net;
  }
}

@Component({
  selector: 'app-puzzle-game',
  templateUrl: './puzzle-game.component.html',
  styleUrls: ['./puzzle-game.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PuzzleGameComponent {
  public diagramDivClassName: string = 'gojs-wrapper';
  public paletteDivClassName = 'gojs-palette';

  public state = {
    diagramNodeData: [
      {id: 'Alpha', text: "Alpha", color: 'lightblue'},
      {id: 'Beta', text: "Beta", color: 'orange'}
    ],
    diagramLinkData: [
      {key: -1, from: 'Alpha', to: 'Beta'}
    ],
    diagramModelData: {prop: 'value'},
    skipsDiagramUpdate: false,
    paletteNodeData: []
  };

  @ViewChild('myDiagram', {static: true}) public myDiagramComponent: DiagramComponent | undefined;

  constructor(private cdr: ChangeDetectorRef) { }


  public initDiagram(): go.Diagram {
    const $ = go.GraphObject.make;
    const diagram = $(go.Diagram, {
      'undoManager.isEnabled': true,
      "linkingTool.isUnconnectedLinkValid": true,
      "draggingTool.dragsLink": true,
      "draggingTool.isGridSnapEnabled": true,
      "relinkingTool.isUnconnectedLinkValid": true,
      "relinkingTool.portGravity": 20,
      layout: new DemoForceDirectedLayout(),
      model: new go.GraphLinksModel({
        linkFromPortIdProperty: "fromPort",
        linkToPortIdProperty: "toPort",
        nodeKeyProperty: 'id',
        linkKeyProperty: 'key'
      })
    });

    // define the Node template
    diagram.nodeTemplate = $(go.Node, "Auto", {zOrder: -5}, new go.Binding("layerName", "Background"), $(go.Shape, "Circle", {fill: "lightgray"}, new go.Binding("stroke", "stroke"), new go.Binding("fill", "color"), new go.Binding("figure")), $(go.Panel, "Table", $(go.RowColumnDefinition, {
      column: 0, alignment: go.Spot.Left
    }), $(go.TextBlock, {
      column: 0,
      row: 0,
      columnSpan: 3,
      editable: true,
      alignment: go.Spot.Center,
      font: "bold 10pt sans-serif",
      margin: new go.Margin(4, 2)
    }, new go.Binding("text", "key")), $(go.Panel, "Horizontal", {column: 1, row: 1}, $(go.Shape, {
      width: 6,
      height: 6,
      portId: "A",
      toLinkable: true,
      fromLinkable: true,
      cursor: 'pointer',
      fromLinkableDuplicates: true,
      toLinkableDuplicates: true,
      fromLinkableSelfNode: true,
      toLinkableSelfNode: true
    }))));

    diagram.linkTemplate = $(go.Link, {zOrder: 50}, new go.Binding("layerName", "Foreground"), new go.Binding("points"), $(go.Shape,  // the link path shape
      {isPanelMain: true, strokeWidth: 2}), $(go.Shape,  // the arrowhead
      {toArrow: "Standard", stroke: null}), $(go.TextBlock, {
      margin: 10,
      background: 'white',
      editable: true,
      width: 30,
      height: 30,
      alignment: go.Spot.Center,
      verticalAlignment: go.Spot.Center,
      textAlign: 'center'
    }, new go.Binding("text", "key")));

    return diagram;
  }

  public diagramModelChange = function (changes: go.IncrementalData) {
    console.log(changes);
  };

  public initPalette(): go.Palette {
    const $ = go.GraphObject.make;
    const palette = $(go.Palette);
    initRing();

    palette.padding = new go.Margin(100, 0, 0, 0);

    // define the Node template
    palette.nodeTemplate = $(go.Node, "Horizontal", {
      height: 120, width: 80, selectionAdorned: false, cursor: 'grab'
    }, $(go.Shape, "Circle", {
      width: 30, height: 30
    }, new go.Binding("stroke", "stroke"), new go.Binding("fill", "color"), new go.Binding("figure")), $(go.TextBlock, {
      margin: 2, font: "bold 24px sans-serif"
    }, new go.Binding("text", "internal")), $(go.TextBlock, {margin: 2}, new go.Binding("text", "key")));

    palette.linkTemplate = $(go.Link, { // because the GridLayout.alignment is Location and the nodes have locationSpot == Spot.Center,
      // to line up the Link in the same manner we have to pretend the Link has the same location spot
      height: 120, selectionAdornmentTemplate: $(go.Adornment, "Link", $(go.Shape, {
        isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0
      }), $(go.Shape,  // the arrowhead
        {toArrow: "Standard", stroke: null}))
    }, {
      routing: go.Link.AvoidsNodes, curve: go.Link.JumpOver, corner: 5, toShortLength: 4
    }, new go.Binding("points"), $(go.Shape,  // the link path shape
      {isPanelMain: true, strokeWidth: 2}), $(go.Shape,  // the arrowhead
      {toArrow: "Standard", stroke: null}), $(go.TextBlock, {
      margin: 4, background: 'white'
    }, new go.Binding("text", "key"))),

      palette.model = new go.GraphLinksModel([  // specify the contents of the Palette
        {key: "Ende", color: "white", internal: "", stroke: "black", figure: 'Ring'}, {
          key: "Edge", color: "white", internal: "", stroke: "black"
        } // { key: "Link", color: "turquoise", internal: "", stroke: "black" },
      ], [// the Palette also has a disconnected Link, which the user can drag-and-drop
        {key: 'Start', points: new go.List().addAll([new go.Point(10, 0), new go.Point(70, 0)])}, {
          key: 'Link',
          points: new go.List().addAll([new go.Point(10, 0), new go.Point(40, 0), new go.Point(40, 40), new go.Point(70, 40)])
        }]);

    return palette;
  }

  public reinitModel() {
    if (this.myDiagramComponent) {
      this.myDiagramComponent.clear();

      this.state = produce(this.state, draft => {
        draft.skipsDiagramUpdate = false;
        draft.diagramNodeData = [];
        draft.diagramLinkData = [];
      });
    }
  }

  loadNewDiagram() {
    const nodeDataArray = [
      {id: '0', key: 1, text: "Alpha", color: "lightblue"},
      {id: '1', key: 2, text: "Beta", color: "orange"},
      {id: '2', key: 3, text: "Gamma", color: "lightgreen", group: 5},
      {id: '3', key: 4, text: "Delta", color: "pink", group: 5},
      {id: '4', key: 5, text: "Epsilon", color: "green", isGroup: true}
    ];
    const linkDataArray = [
      {key: 0, from: '1', to: 2, color: "blue"},
      {key: 1, from: '2', to: 2},
      {key: 2, from: '3', to: 4, color: "green"},
      {key: 3, from: '3', to: 1, color: "purple"}
    ];

    if (this.myDiagramComponent) {
      this.myDiagramComponent.clear();

      this.state = produce(this.state, draft => {
        draft.skipsDiagramUpdate = false;
        draft.diagramNodeData = nodeDataArray;
        draft.diagramLinkData = linkDataArray as any;
      });
    }
  }
}

