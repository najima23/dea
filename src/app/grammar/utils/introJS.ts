import { Options } from 'intro.js';

export const GrammarIntroConfig: Options = {
  steps: [
    {
      element: '#tool0',
      intro: `
        <p><b>Starte Tour!:</b> Startet eine Tour</p>
        <p><b>Dokumentation:</b> Externer Link zur Dokumentation</p>
          `,
      position: 'left',
    },
    {
      element: '#tool1',
      intro: `
        <p><b>Generiere korrekten Ausdruck:</b> Erzeugt ein zuf&auml;lligen richtigen Ausdruck</p>
        <p><b>Generiere falschen Ausdruck:</b> Erzeugt ein zuf&auml;lligen falschen Ausdruck</p>
          `,
      position: 'left',
    },
    {
      element: '#tool2',
      intro:
        '<p><b>Eingabe:</b> Manuelle Eingabe des Strings</p><p><b>Auswertung:</b> Auswertung des Ausdrucks (automatisch). Erscheint erst nach Eingabe!</p>',
      position: 'left',
    },
    {
      element: '#tool3',
      intro: 'Zeigt das 4-Tuple an mit: G = Grammatik, V = Nicht-Terminalzeichen, Σ = Terminalzeichen, R = Regeln',
      position: 'right',
    },
    {
      element: '#tool4',
      intro:
        'Animation der Ableitungen. Text kann markiert und kopiert werden. Zudem kann auch hier ein Ausdruck erzeugt werden. Bei falscher Eingabe wird der reverse Modus angezeigt',
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
  nextLabel: 'Weiter',
  prevLabel: 'Zur&uuml;ck',
  doneLabel: 'Fertig',
};
