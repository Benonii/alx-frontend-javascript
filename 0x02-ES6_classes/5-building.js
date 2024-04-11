export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set evacuationWarningMessage(sqft) {
    throw Error("Class extending Building must override evacuationWarningMessage'");
  }
}
