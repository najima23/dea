export const ELEMENT_DATA = [
  { q0: '1', e: 'B', q1: '2' },
  { q0: '2', e: 'T', q1: '3' },
  { q0: '2', e: 'P', q1: '4' },
  { q0: '3', e: 'S', q1: '3' },
  { q0: '3', e: 'X', q1: '6' },
  { q0: '4', e: 'T', q1: '4' },
  { q0: '4', e: 'V', q1: '5' },
  { q0: '5', e: 'P', q1: '6' },
  { q0: '5', e: 'V', q1: '7' },
  { q0: '6', e: 'X', q1: '4' },
  { q0: '6', e: 'S', q1: '7' },
  { q0: '7', e: 'E', q1: '8' },
];

export const cytoscapeConfig = {
  elements: {
    nodes: [
      { data: { id: 'start' }, position: { x: -700, y: 50 }, classes: 'inv' },
      { data: { id: '1' }, position: { x: -600, y: 50 } },
      { data: { id: '2' }, position: { x: -470, y: 50 } },
      { data: { id: '3' }, position: { x: -300, y: -100 } },
      { data: { id: '4' }, position: { x: -300, y: 200 } },
      { data: { id: '5' }, position: { x: -100, y: 200 } },
      { data: { id: '6' }, position: { x: -100, y: -100 } },
      { data: { id: '7' }, position: { x: 70, y: 50 } },
      { data: { id: '8' }, position: { x: 200, y: 50 }, classes: 'double' },
    ],
    edges: [
      {
        data: { id: '2_3', source: '2', target: '3', label: 'T' },
        classes: 'font',
      },
      { data: { id: '2_4', source: '2', target: '4', label: 'P' } },
      { data: { id: '4_5', source: '4', target: '5', label: 'V' } },
      { data: { id: '3_6', source: '3', target: '6', label: 'X' } },
      { data: { id: '6_7', source: '6', target: '7', label: 'S' } },
      { data: { id: '5_7', source: '5', target: '7', label: 'V' } },
      { data: { id: '5_6', source: '5', target: '6', label: 'P' } },
      { data: { id: '6_4', source: '6', target: '4', label: 'X' } },
      { data: { id: '7_8', source: '7', target: '8', label: 'E' } },
      { data: { id: 'start_1', source: 'start', target: '1', label: '' } },
      { data: { id: '1_2', source: '1', target: '2', label: 'B' } },
      {
        data: { id: 'BB', source: '3', target: '3', type: 'loop', label: 'S' },
      },
      {
        data: {
          id: 'CC',
          source: '4',
          target: '4',
          type: 'loop',
          flipLabel: true,
          label: 'T',
        },
        classes: 'loop',
      },
    ],
  },
  style: [
    {
      selector: 'node',
      style: {
        'background-color': '#fff',
        color: '#000',
        label: 'data(id)',
        'text-valign': 'center',
        width: '38px',
        height: '38px',
        'text-halign': 'center',
        'border-color': 'black',
        // @ts-ignore
        'border-opacity': '1',
        'border-width': '1',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 3,
        'line-color': '#ccc',
        color: '#000',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
        label: 'data(label)',
        'text-background-color': 'white',
        // @ts-ignore
        'text-background-opacity': '1',
        'text-background-shape': 'rectangle',
        'text-background-padding': '3px',
      },
    },
    {
      selector: '.double',
      style: {
        'border-color': '#000',
        // @ts-ignore
        'border-opacity': '1',
        'border-style': 'double',
        'border-width': '3',
      },
    },
    {
      selector: '.inv',
      style: {
        'background-color': '#fff',
        'line-color': '#ccc',
        color: '#fff',
        'border-color': 'white',
        // @ts-ignore
        'border-opacity': '0',
      },
    },
    {
      selector: '.loop',
      style: {
        // @ts-ignore
        'loop-direction': '-130deg',
        'loop-sweep': '90deg',
        'target-endpoint': 'outside-to-line',
        'source-endpoint': 'outside-to-line',
      },
    },
  ],
  layout: {
    name: 'preset',
    padding: 5,
  },
  autoungrabify: true,
  autolock: true,
  userPanningEnabled: false,
};
