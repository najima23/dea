// noinspection all

export const codeSttring = `
  G = ( V, Σ, R, A ):

  V = { A, O, Z },
  Σ = { 0 ... 9, +, -, ∗, /, (, ) },
  R = {

      A → A O A | ( A ) | Z ,

      O → * | + | - | / ,

      Z → 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

  }.
`;
