export const game = {
  0: {
    task: 'Erzeuge einen beliebegen gueltigen Graphen',
    nodes: [],
    links: [],
    testIncludes: ['110'],
    testExcludes: ['001']
  },
  1: {
    task: 'Das ist eine neue Aufgabe...',
    nodes: [
      {id: '0', key: 1, text: "Alpha", color: "lightblue"},
      {id: '1', key: 2, text: "Beta", color: "orange"},
      {id: '2', key: 3, text: "Gamma", color: "lightgreen", group: 5},
      {id: '3', key: 4, text: "Delta", color: "pink", group: 5},
      {id: '4', key: 5, text: "Epsilon", color: "green", isGroup: true}
    ],
    links: [
      {key: 0, from: '1', to: 2, color: "blue"},
      {key: 1, from: '2', to: 2},
      {key: 2, from: '3', to: 4, color: "green"},
      {key: 3, from: '3', to: 1, color: "purple"}
    ]
  },
  levels: [0, 1]
}
