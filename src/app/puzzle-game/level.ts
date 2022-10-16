import { WordGenerator } from "./word-generator";

export const game = {
  0: {
    task: 'Erzeuge einen beliebegen gueltigen Graphen',
    nodes: [],
    links: [],
    testIncludes: ['110'],
    testExcludes: ['001']
  },
  1: {
    task: 'Stellen Sie die nachfolgenden Sprache als deterministische endliche Automaten dar \n L = {w | w ∈ {0,1}∗ und w entha ̈lt das Teilwort 110}',
    nodes: [
      {id: 0, text: "A", color: "lightblue"},
      {id: 1, text: "B", color: "orange"},
      {id: 2, text: "C", color: "lightgreen"},
      //{id: 3, text: "D", color: "pink", key:'Ende', stroke:'black'},
      {id: 3, text: "D", color: "white", key:'Ende', figure: 'Ring'}
    ],
    links: [
      {key: 0, from: 0, to: 1, text: '1'},
      {key: 1, from: 0, to: 0, text: '0'},
      {key: 2, from: 1, to: 0, text: '0'},
      {key: 3, from: 1, to: 2, text: '1'},
      {key: 4, from: 2, to: 2, text: '1'},
      {key: 5, from: 2, to: 3, text: '0'},
      {key: 6, from: 3, to: 3, text: '0,1'}
    ]
  },
  2: {
    task: 'Stellen Sie die nachfolgenden Sprache als deterministische endliche Automaten dar L = {w | w ∈ {0,1}∗ und w entha ̈lt nicht das Teilwort 110}',
    nodes: [
      {id: 0, text: "A", color: "white", figure: 'Ring'},
      {id: 1, text: "B", color: "white", figure: 'Ring'},
      {id: 2, text: "C", color: "white", figure: 'Ring'},
      //{id: 3, text: "D", color: "pink", key:'Ende', stroke:'black'},
      {id: 3, text: "D", color: "white", }
    ],
    links: [
      {key: 0, from: 0, to: 1, text: '1'},
      {key: 1, from: 0, to: 0, text: '0'},
      {key: 2, from: 1, to: 0, text: '0'},
      {key: 3, from: 1, to: 2, text: '1'},
      {key: 4, from: 2, to: 2, text: '1'},
      {key: 5, from: 2, to: 3, text: '0'},
      {key: 6, from: 3, to: 3, text: '0,1'}
    ],
    solution: function(){
      const wordGenerator = new WordGenerator();
      const words = wordGenerator.generateWords({
        nodes: [
          {id: 0, text: "A", figure: 'Ring'},
          {id: 1, text: "B",  figure: 'Ring'},
          {id: 2, text: "C",  figure: 'Ring'},
          {id: 3, text: "D" }
        ],
        links: [
          {key: "Start", from: -1, to: 0, text: 'Start'},
          {key: 0, from: 0, to: 1, text: '1'},
          {key: 1, from: 0, to: 0, text: '0'},
          {key: 2, from: 1, to: 0, text: '0'},
          {key: 3, from: 1, to: 2, text: '1'},
          {key: 4, from: 2, to: 2, text: '1'},
          {key: 5, from: 2, to: 3, text: '0'},
          {key: 6, from: 3, to: 3, text: '0,1'}
        ],
      });

      return words;
     }
  },
  3: {
    task: '̈Gegeben sei die Sprache L1 = {w ∈ {0} *| |w| ist durch 3 teilbar}. Geben Sie einen deterministischen endlichen Automaten in Graphdarstellung an, der L1 erkennt',
    nodes: [
      {id: 0, text: "A", color: "white", figure: 'Ring'},
      {id: 1, text: "B"},
      {id: 2, text: "C"},     
    ],
    links: [
      {key: 0, from: 0, to: 1, text: '0'},
      {key: 1, from: 1, to: 2, text: '0'},
      {key: 2, from: 2, to: 0, text: '0'},
    ],
    solution: "0100110111"
  },
  
  levels: [0, 1, 2, 3]
}
