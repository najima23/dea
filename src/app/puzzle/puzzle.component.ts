import { Component, OnInit } from '@angular/core';
import * as cytoscape from 'cytoscape';
import * as dagre from 'cytoscape-dagre';
import compoundDragAndDrop from 'cytoscape-compound-drag-and-drop';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  ngOnInit(): void {
    cytoscape.use( compoundDragAndDrop );
    
    const options = {
      grabbedNode: node => true, // filter function to specify which nodes are valid to grab and drop into other nodes
      dropTarget: (dropTarget, grabbedNode) => dropTarget.id === "a", // filter function to specify which parent nodes are valid drop targets
      dropSibling: (dropSibling, grabbedNode) => true, // filter function to specify which orphan nodes are valid drop siblings
      newParentNode: (grabbedNode, dropSibling) => ({}), // specifies element json for parent nodes added by dropping an orphan node on another orphan (a drop sibling). You can chose to return the dropSibling in which case it becomes the parent node and will be preserved after all its children are removed.
      boundingBoxOptions: { // same as https://js.cytoscape.org/#eles.boundingBox, used when calculating if one node is dragged over another
        includeOverlays: false,
        includeLabels: true
      },
      overThreshold: 10, // make dragging over a drop target easier by expanding the hit area by this amount on all sides
      outThreshold: 10 // make dragging out of a drop target a bit harder by expanding the hit area by this amount on all sides
    };

    const cy = cytoscape({
      container: document.getElementById('cy'), // container to render in
    
      elements: [ // list of graph elements to start with
        { // node a
          data: { id: 'a' }
        },
        { // node b
          data: { id: 'b' }
        },
        { // edge ab
          data: { id: 'ab', source: 'a', target: 'b' }
        }
      ],
    
      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        },
    
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        }
      ],
    
      layout: {
        name: 'grid',
        rows: 1
      }
    
    });
    const cdnd = (cy as any).compoundDragAndDrop(options);

  }


 

}
