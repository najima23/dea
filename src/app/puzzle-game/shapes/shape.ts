import * as go from "gojs";

export const initRing = () => {

  const GeneratorEllipseSpot1 = new go.Spot(0.156, 0.156);
  const GeneratorEllipseSpot2 = new go.Spot(0.844, 0.844);

  go.Shape.defineFigureGenerator("Ring", function(shape, w, h) {
    const rad = w / 2;
    const geo = new go.Geometry();
    const fig = new go.PathFigure(w, w / 2, true);  // clockwise

    geo.add(fig);
    fig.add(new go.PathSegment(go.PathSegment.Arc, 0, 360, rad, rad, rad, rad).close());

    const rad2 = Math.max(rad - 3, 0);

    if (rad2 > 0) {
      fig.add(new go.PathSegment(go.PathSegment.Move, w / 2 + rad2, w / 2))
      fig.add(new go.PathSegment(go.PathSegment.Arc, 0, -360, rad, rad, rad2, rad2).close());
    }

    geo.spot1 = GeneratorEllipseSpot1;
    geo.spot2 = GeneratorEllipseSpot2;
    geo.defaultStretch = go.GraphObject.Uniform;

    return geo;
  });
}

