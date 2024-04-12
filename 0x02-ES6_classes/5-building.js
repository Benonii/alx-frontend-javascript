export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    Building.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  static evacuationWarningMessage() {
    setTimeout(() => {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }, 100); // Delay for 2000 milliseconds (2 seconds)setTimeout(()
  }
}
