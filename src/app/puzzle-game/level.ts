import { WordGenerator } from "./word-generator";

export const game = {
  0: {
    task: 'Erzeuge einen beliebegen gueltigen Graphen',
    nodes: [],
    links: [],
  },
  1: {
    task: 'Stellen Sie die nachfolgenden Sprache als deterministische endliche Automaten dar \n L = {w | w ∈ {0,1}∗ der nur Wörter akzeptiert, die mit 0 anfangen}',
    nodes: [
      { id: 0, text: "A" },
      { id: 1, text: "B", figure: 'Ring' },
      { id: 2, text: "C" }

    ],
    links: [
      { key: 0, from: 0, to: 1, text: '0' },
      { key: 1, from: 0, to: 2, text: '1' },
      { key: 2, from: 2, to: 2, text: '0,1' },
      { key: 4, from: 1, to: 1, text: '0,1' },
    ],
    rightWords: function () {
      const wordGenerator = new WordGenerator();
      const words = wordGenerator.generateWords({
        nodes: [
          { id: 0, text: "A" },
          { id: 1, text: "B", figure: 'Ring' },
          { id: 2, text: "C" }
        ],
        links: [
          { key: "Start", from: -1, to: 0, text: 'Start' },
          { key: 0, from: 0, to: 1, text: '0' },
          { key: 1, from: 0, to: 2, text: '1' },
          { key: 2, from: 2, to: 2, text: '0,1' },
          { key: 4, from: 1, to: 1, text: '0,1' },
        ],
      });
      return words;
    },
    randomWords: function () {
      const wordGenerator = new WordGenerator();
      const randomGeneratedArray = wordGenerator.generateRandomWords(["1", "0"])

      return randomGeneratedArray;
    },
    solution: {
      nodes: [
        { id: 0, text: "A" },
        { id: 1, text: "B", figure: 'Ring' },
        { id: 2, text: "C" }
      ],
      links: [
        { key: "Start", from: -1, to: 0, text: 'Start' },
        { key: 0, from: 0, to: 1, text: '0' },
        { key: 1, from: 0, to: 2, text: '1' },
        { key: 2, from: 2, to: 2, text: '0,1' },
        { key: 4, from: 1, to: 1, text: '0,1' },
      ],
    },
    points: 20
  },
  2: {
    task: 'Stellen Sie die nachfolgenden Sprache als deterministische endliche Automaten dar \n L = {w | w ∈ {0,1}∗ der nur Wörter akzeptiert, die mit 0 anfangen}',
    nodes: [
      { id: 0, text: "A" },
      { id: 1, text: "B", figure: 'Ring' },
      { id: 2, text: "C" }
    ],
    links: [
      { key: 0, from: 0, to: 1, text: '0' },
      { key: 1, from: 0, to: 2, text: '1' },
      { key: 2, from: 2, to: 2, text: '0,1' },
      { key: 4, from: 1, to: 1, text: '0,1' },
    ],
    rightWords: function () {
      const wordGenerator = new WordGenerator();
      const words = wordGenerator.generateWords({
        nodes: [
          { id: 0, text: "A" },
          { id: 1, text: "B", figure: 'Ring' },
          { id: 2, text: "C" }
        ],
        links: [
          { key: "Start", from: -1, to: 0, text: 'Start' },
          { key: 0, from: 0, to: 1, text: '0' },
          { key: 1, from: 0, to: 2, text: '1' },
          { key: 2, from: 2, to: 2, text: '0,1' },
          { key: 4, from: 1, to: 1, text: '0,1' },
        ],
      });
      return words;
    },
    randomWords: function () {
      const wordGenerator = new WordGenerator();
      const randomGeneratedArray = wordGenerator.generateRandomWords(["1", "0"])

      return randomGeneratedArray;
    },
    solution: {
      nodes: [
        { id: 0, text: "A" },
        { id: 1, text: "B", figure: 'Ring' },
        { id: 2, text: "C" }
      ],
      links: [
        { key: "Start", from: -1, to: 0, text: 'Start' },
        { key: 0, from: 0, to: 1, text: '0' },
        { key: 1, from: 0, to: 2, text: '1' },
        { key: 2, from: 2, to: 2, text: '0,1' },
        { key: 4, from: 1, to: 1, text: '0,1' },
      ],
    },
    points: 20
  },
  3: {
    task: 'Stellen Sie die nachfolgenden Sprache als deterministische endliche Automaten dar \n L = {w | w ∈ {0,1}∗ und w entha ̈lt das Teilwort 110}',
    nodes: [
      { id: 0, text: "A" },
      { id: 1, text: "B" },
      { id: 2, text: "C" },
      { id: 3, text: "D", figure: 'Ring' }
    ],
    links: [
      { key: 0, from: 0, to: 1, text: '1' },
      { key: 1, from: 0, to: 0, text: '0' },
      { key: 2, from: 1, to: 0, text: '0' },
      { key: 3, from: 1, to: 2, text: '1' },
      { key: 4, from: 2, to: 2, text: '1' },
      { key: 5, from: 2, to: 3, text: '0' },
      { key: 6, from: 3, to: 3, text: '0,1' }
    ],
    rightWords: function () {
      const wordGenerator = new WordGenerator();
      const words = wordGenerator.generateWords({
        nodes: [
          { id: 0, text: "A" },
          { id: 1, text: "B" },
          { id: 2, text: "C" },
          { id: 3, text: "D", figure: 'Ring' }
        ],
        links: [
          { key: "Start", from: -1, to: 0, text: 'Start' },
          { key: 0, from: 0, to: 1, text: '1' },
          { key: 1, from: 0, to: 0, text: '0' },
          { key: 2, from: 1, to: 0, text: '0' },
          { key: 3, from: 1, to: 2, text: '1' },
          { key: 4, from: 2, to: 2, text: '1' },
          { key: 5, from: 2, to: 3, text: '0' },
          { key: 6, from: 3, to: 3, text: '0,1' }
        ],
      });
      return words;
    },
    randomWords: function () {
      const wordGenerator = new WordGenerator();
      const randomGeneratedArray = wordGenerator.generateRandomWords(["1", "0"])

      return randomGeneratedArray;
    },
    solution: {
      nodes: [
        { id: 0, text: "A" },
        { id: 1, text: "B" },
        { id: 2, text: "C" },
        { id: 3, text: "D", figure: 'Ring' }
      ],
      links: [
        { key: "Start", from: -1, to: 0, text: 'Start' },
        { key: 0, from: 0, to: 1, text: '1' },
        { key: 1, from: 0, to: 0, text: '0' },
        { key: 2, from: 1, to: 0, text: '0' },
        { key: 3, from: 1, to: 2, text: '1' },
        { key: 4, from: 2, to: 2, text: '1' },
        { key: 5, from: 2, to: 3, text: '0' },
        { key: 6, from: 3, to: 3, text: '0,1' }
      ],
    },
    points: 20
  },
  4: {
    task: 'Stellen Sie die nachfolgenden Sprache als deterministische endliche Automaten dar L = {w | w ∈ {0,1}∗ und w entha ̈lt nicht das Teilwort 110}',
    nodes: [
      { id: 0, text: "A", color: "white", figure: 'Ring' },
      { id: 1, text: "B", color: "white", figure: 'Ring' },
      { id: 2, text: "C", color: "white", figure: 'Ring' },
      //{id: 3, text: "D", color: "pink", key:'Ende', stroke:'black'},
      { id: 3, text: "D", color: "white", }
    ],
    links: [
      { key: 0, from: 0, to: 1, text: '1' },
      { key: 1, from: 0, to: 0, text: '0' },
      { key: 2, from: 1, to: 0, text: '0' },
      { key: 3, from: 1, to: 2, text: '1' },
      { key: 4, from: 2, to: 2, text: '1' },
      { key: 5, from: 2, to: 3, text: '0' },
      { key: 6, from: 3, to: 3, text: '0,1' }
    ],
    solution: {
      nodes: [
        { id: 0, text: "A", figure: 'Ring' },
        { id: 1, text: "B", figure: 'Ring' },
        { id: 2, text: "C", figure: 'Ring' },
        { id: 3, text: "D" }
      ],
      links: [
        { key: "Start", from: -1, to: 0, text: 'Start' },
        { key: 0, from: 0, to: 1, text: '1' },
        { key: 1, from: 0, to: 0, text: '0' },
        { key: 2, from: 1, to: 0, text: '0' },
        { key: 3, from: 1, to: 2, text: '1' },
        { key: 4, from: 2, to: 2, text: '1' },
        { key: 5, from: 2, to: 3, text: '0' },
        { key: 6, from: 3, to: 3, text: '0,1' }
      ],//Referenzautomat
    },
    randomWords: function () {
      const wordGenerator = new WordGenerator();
      const randomGeneratedArray = wordGenerator.generateRandomWords(["1", "0"])

      return randomGeneratedArray;
    },
    points: 20
  },
  5: {
    task: '̈Gegeben sei die Sprache L1 = {w ∈ {0} *| |w| ist durch 3 teilbar}. Geben Sie einen deterministischen endlichen Automaten in Graphdarstellung an, der L1 erkennt',
    nodes: [
      { id: 0, text: "A", color: "white", figure: 'Ring' },
      { id: 1, text: "B" },
      { id: 2, text: "C" },
    ],
    links: [
      { key: 0, from: 0, to: 1, text: '0' },
      { key: 1, from: 1, to: 2, text: '0' },
      { key: 2, from: 2, to: 0, text: '0' },
    ],
    solution: {
      nodes: [
        { id: 0, text: "A", color: "white", figure: 'Ring' },
        { id: 1, text: "B" },
        { id: 2, text: "C" },
      ],
      links: [
        { key: "Start", from: -1, to: 0, text: 'Start' },
        { key: 0, from: 0, to: 1, text: '0' },
        { key: 1, from: 1, to: 2, text: '0' },
        { key: 2, from: 2, to: 0, text: '0' },
      ],
    },
    randomWords: function () {
      const wordGenerator = new WordGenerator();
      const randomGeneratedArray = wordGenerator.generateRandomWords(["0", "0"])

      return randomGeneratedArray;
    },
    points: 20
  },
  levels: [0, 1, 2, 3, 4, 5]
}
