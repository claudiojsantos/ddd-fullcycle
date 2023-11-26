export default class Address {
  _street: string = "";
  _number: number = 0;
  _city: string = "";
  _state: string = "";
  _zip: string = "";

  constructor(
    street: string,
    number: number,
    city: string,
    state: string,
    zip: string
  ) {
    this._street = street;
    this._number = number;
    this._city = city;
    this._state = state;
    this._zip = zip;

    this.validate();
  }

  validate() {
    if (!this._street) {
      throw new Error("street is required");
    }

    if (!this._city) {
      throw new Error("city is required");
    }

    if (!this._state) {
      throw new Error("state is required");
    }

    if (!this._zip) {
      throw new Error("zip is required");
    }
  }
}
