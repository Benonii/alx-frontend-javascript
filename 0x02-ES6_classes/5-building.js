export default class Building {

  get sqft() {
    return this._sqft;
  }
  
  constructor(sqft) {
    this._sqft = sqft;
    // Building.evacuationWarningMessage();
  }

  static evacuationWarningMessage() {
      throw Error("Class extending Building must override evacuationWarningMessage");
  } 
}
