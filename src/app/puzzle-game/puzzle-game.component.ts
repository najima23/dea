import { ChangeDetectorRef, Component, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { initRing } from "./shapes/shape";
import { DataSyncService, DiagramComponent } from "gojs-angular";
import produce from "immer";
import { game } from "./level";
import { DeaArray, WordGenerator } from './word-generator';
import { WordChecker } from './word-checker';


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
export class PuzzleGameComponent implements OnChanges {
  public diagramDivClassName: string = 'gojs-wrapper';
  public paletteDivClassName = 'gojs-palette';
  public game = game;
  private level = 0;
  public task = game[this.level].task;
  public observedDiagram: any = null;


  public state: any = {
    diagramNodeData: game[0].nodes,
    diagramLinkData: game[0].links,
    diagramModelData: { prop: 'value' },
    skipsDiagramUpdate: false,
    paletteNodeData: []
  };

  @ViewChild('myDiagram', { static: true }) public myDiagramComponent: DiagramComponent | undefined;

  constructor(private cdr: ChangeDetectorRef) { }

  public ngOnChanges() {
    // whenever showGrid changes, update the diagram.grid.visible in the child DiagramComponent
    if (this.myDiagramComponent && this.myDiagramComponent.diagram instanceof go.Diagram) {
      console.log(this.myDiagramComponent.diagram)
    }
  }

  public ngAfterViewInit() {
    if (this.observedDiagram) return;
    this.observedDiagram = this.myDiagramComponent?.diagram;
    this.cdr.detectChanges(); // IMPORTANT: without this, Angular will throw ExpressionChangedAfterItHasBeenCheckedError (dev mode only)

    const appComp: any = this;
    // listener for inspector
    this.myDiagramComponent?.diagram.addDiagramListener('ChangedSelection', function (e) {
      if (e.diagram.selection.count === 0) {
        appComp.selectedNodeData = null;
      }
      const node = e.diagram.selection.first();
      appComp.state = produce(appComp.state, draft => {
        if (node instanceof go.Node) {
          var idx = draft.diagramNodeData.findIndex(nd => nd.id == node.data.id);
          var nd = draft.diagramNodeData[idx];
          draft.selectedNodeData = nd;
        } else {
          draft.selectedNodeData = null;
        }
      });
    });
  } // end ngAfterViewInit

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
    diagram.nodeTemplate = $(go.Node, "Auto", { zOrder: -5 }, new go.Binding("layerName", "Background"), $(go.Shape, "Circle", { fill: "lightgray" }, new go.Binding("stroke", "stroke"), new go.Binding("fill", "color"), new go.Binding("figure")), $(go.Panel, "Table", $(go.RowColumnDefinition, {
      column: 0, alignment: go.Spot.Left
    }), $(go.TextBlock, {
      column: 0,
      row: 0,
      columnSpan: 3,
      editable: true,
      alignment: go.Spot.Center,
      font: "bold 10pt sans-serif",
      margin: new go.Margin(4, 2)
    }, new go.Binding("text", "text").makeTwoWay()), $(go.Panel, "Horizontal", { column: 1, row: 1 }, $(go.Shape, {
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

    diagram.linkTemplate = $(go.Link, { zOrder: 50 }, new go.Binding("layerName", "Foreground"), new go.Binding("points"), $(go.Shape,  // the link path shape
      { isPanelMain: true, strokeWidth: 2 }), $(go.Shape,  // the arrowhead
        { toArrow: "Standard", stroke: null }), $(go.TextBlock, {
          margin: 10,
          background: 'white',
          editable: true,
          width: 30,
          height: 30,
          alignment: go.Spot.Center,
          verticalAlignment: go.Spot.Center,
          textAlign: 'center'
        }, new go.Binding("text", "text").makeTwoWay()));

    return diagram;
  }

  public diagramModelChange = (changes: go.IncrementalData) => {
    if (!changes) return;
    const appComp = this;
    this.state = produce(this.state, draft => {
      // set skipsDiagramUpdate: true since GoJS already has this update
      // this way, we don't log an unneeded transaction in the Diagram's undoManager history
      draft.skipsDiagramUpdate = true;
      draft.diagramNodeData = DataSyncService.syncNodeData(changes, draft.diagramNodeData, appComp.observedDiagram.model);
      draft.diagramLinkData = DataSyncService.syncLinkData(changes, draft.diagramLinkData, appComp.observedDiagram.model);
      draft.diagramModelData = DataSyncService.syncModelData(changes, draft.diagramModelData);
      // If one of the modified nodes was the selected node used by the inspector, update the inspector selectedNodeData object
      const modifiedNodeDatas = changes.modifiedNodeData;
      if (modifiedNodeDatas && draft.selectedNodeData) {
        for (let i = 0; i < modifiedNodeDatas.length; i++) {
          const mn = modifiedNodeDatas[i];
          const nodeKeyProperty = appComp.myDiagramComponent?.diagram.model.nodeKeyProperty as string;
          if (mn[nodeKeyProperty] === draft.selectedNodeData[nodeKeyProperty]) {
            draft.selectedNodeData = mn;
          }
        }
      }
    });
    /*    const viewNode = this.myDiagramComponent?.diagram.nodes!;
       const viewLink = this.myDiagramComponent?.diagram.links!;
   
       const nodes: any = [];
       const links: any = [];
       
       console.log("hchhchchhch", changes);
       
       while(viewNode.next()) {
         nodes.push(viewNode.value.data);
       }
   
       while(viewLink.next()) {
         links.push(viewLink.value.data);
       }
       console.log("links", links);
       console.log("nodes", nodes);
   
         this.state = produce(this.state, draft => {
           draft.skipsDiagramUpdate = true;
           draft.diagramNodeData = nodes;
           draft.diagramLinkData = links;
         }); */
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
    }, new go.Binding("text", "internal")), $(go.TextBlock, { margin: 2 }, new go.Binding("text", "key")),);

    palette.linkTemplate = $(go.Link, { // because the GridLayout.alignment is Location and the nodes have locationSpot == Spot.Center,
      // to line up the Link in the same manner we have to pretend the Link has the same location spot
      height: 120, selectionAdornmentTemplate: $(go.Adornment, "Link", $(go.Shape, {
        isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0
      }), $(go.Shape,  // the arrowhead
        { toArrow: "Standard", stroke: null }))
    }, {
      routing: go.Link.AvoidsNodes, curve: go.Link.JumpOver, corner: 5, toShortLength: 4
    }, new go.Binding("points"), $(go.Shape,  // the link path shape
      { isPanelMain: true, strokeWidth: 2 }), $(go.Shape,  // the arrowhead
        { toArrow: "Standard", stroke: null }), $(go.TextBlock, {
          margin: 4, background: 'white'
        }, new go.Binding("text", "key"))),

      palette.model = new go.GraphLinksModel([  // specify the contents of the Palette
        { key: "Ende", color: "white", internal: "", stroke: "black", figure: 'Ring' }, {
          key: "Edge", color: "white", internal: "", stroke: "black"
        } // { key: "Link", color: "turquoise", internal: "", stroke: "black" },
      ], [// the Palette also has a disconnected Link, which the user can drag-and-drop
        { key: 'Start', points: new go.List().addAll([new go.Point(10, 0), new go.Point(70, 0)]) }, {
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

  loadNewDiagram(value: number) {
    if (this.myDiagramComponent) {
      this.level = value;
      this.task = game[value].task
      this.myDiagramComponent.clear();
      this.state = produce(this.state, draft => {
        draft.skipsDiagramUpdate = false;
        draft.diagramNodeData = game[value].nodes;
        draft.diagramLinkData = game[value].links as any;
      });
    }
  }

  validateDiagram() {
    const wordGenerator = new WordGenerator();
    /*const deaObject: DeaArray = {
      nodes: this.state.diagramNodeData,
      links: this.state.diagramLinkData
    }*/
    //console.log(wordGenerator.generateWords(deaObject));

    console.log(wordGenerator.generateRandomWords(["1","0"]));

    //console.log("validate data", this.state);
  }
  checkDea() {
    const wordGenerator = new WordGenerator();
    const randomGeneratedArray = wordGenerator.generateRandomWords(["1","0"])

    const wordChecker = new WordChecker();
    const deaObject: DeaArray = {
      nodes: this.state.diagramNodeData,
      links: this.state.diagramLinkData
    }

    //console.log("gameb", game[this.level].solution())
    const referenzautomat = game[this.level].solution;
    for (let i = 0; i < randomGeneratedArray.length; i++) {

      const check = wordChecker.checkBeginning(deaObject, randomGeneratedArray[i]);
      const referenzCheck = wordChecker.checkBeginning(referenzautomat, randomGeneratedArray[i]);


      if (check !== referenzCheck) {
        alert("Check failed");
        return;
      }
    }

    alert(`Deine Eingabe ist richtig}`);
    console.log("validate data", this.state);
  }
}

