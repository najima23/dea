export const grammarGraphConfig = {
  boxSelectionEnabled: false,
  autounselectify: true,
  layout: {
    name: 'dagre',
    nodeDimensionsIncludeLabels: true,
  },
  style: [
    {
      selector: 'node',
      style: {
        label: 'data(label)',
        'background-color': 'white',
        'text-valign': 'center',
        width: '30px',
        height: '30px',
        'text-halign': 'center',
        'border-color': 'black',
        'border-opacity': '1',
        'border-width': '1',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 4,
        'target-arrow-shape': 'triangle',
        padding: '50px',
        'line-color': '#9dbaea',
        'target-arrow-color': '#9dbaea',
        'curve-style': 'bezier',
      },
    },
  ],
  elements: {
    nodes: [
      { data: { id: 'nx', label: 'A' } },
      { data: { id: 'n0', label: 'A' } },
      { data: { id: 'n1', label: 'A' } },
      { data: { id: 'n2', label: 'A' } },
      { data: { id: 'n3', label: 'A' } },
      { data: { id: 'n4', label: 'A' } },
      { data: { id: 'n5', label: 'A' } },
    ],
    edges: [
      { data: { source: 'nx', target: 'n0' } },
      { data: { source: 'n0', target: 'n1' } },
      { data: { source: 'n0', target: 'n2' } },
      { data: { source: 'n2', target: 'n3' } },
      { data: { source: 'n2', target: 'n4' } },
      { data: { source: 'n2', target: 'n5' } },
    ],
  },
};
