import Building from './5-building.js';

class TestBuilding extends Building {}

test("Building forces override", () => {
  expect(() => {
    new TestBuilding(200);
  }).toThrowError("Class extending Building must override evacuationWarningMessage");
});
