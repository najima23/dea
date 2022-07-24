import { Options } from 'intro.js';

export const introJsConfig: Options = {
  steps: [
    {
      element: '#tool0',
      intro: `
        <p><b>Generiere korrektes Reber-Wort:</b> Erzeugt durch die DEA ein zufaelliges Wort, welches ein Reber Wort ist</p>
        <p><b>Generiere falsches Reber-Wort:</b> Erzeugt durch die DEA ein zufaelliges Wort, welches KEIN Reber Wort ist</p>
        <p><b>Tech-Stack:</b> Zeigt die Tools an, womit diese Seite implementiert wurde</p>
        <p><b>Theorie:</b> Wiki Artikel zu dem Thema DEA</p>
        <p><b>Starte Tour!:</b> Startet eine Tour</p>
          `,
      position: 'left',
    },
    {
      element: '#tool1',
      intro:
        '<p><b>Eingabe:</b> Manuelle Eingabe des Strings</p><p><b>Ausgabe:</b> Auswertung des Wortes (automatisch)</p>',
      position: 'left',
    },
    {
      element: '#tool2',
      intro:
        'Die Tabelle zeigt die Zustaende und das Eingabealphabet in Zusammenhang mit der Übergangsfunktion. Beim Ausfuehren des Codes, werden die Zeilen markiert',
      position: 'right',
    },
    {
      element: '#tool3',
      intro:
        'Canvas man kann intuitiv durch gedrueckt halten und bewegen, oder mit scroll sowohl zoomen, als auch den Graphen bewegen. Beim starten der Animation, werden die Zustaende animiert',
      position: 'right',
    },
    {
      element: '#tool4',
      intro:
        'Zeigt die Zustandsmenge (Q), das Eingabealphabet (E) und die Finalzustaende (F) an',
      position: 'right',
    },
    {
      element: '#tool5',
      intro:
        'Steuerung der Animation (zum start, ein schritt zurueck, abspielen, pause, ein schritt nach vor, zum Ende)',
      position: 'right',
    },
    {
      element: '#tool6',
      intro: 'Einstellung der Animationsgeschwindigkeit',
      position: 'right',
    },
  ],
  showBullets: true,
  showButtons: true,
  exitOnOverlayClick: false,
  keyboardNavigation: true,
};
