import Address from "./address";

export default class Customer {
  _id: string;
  _name: string;
  _address!: Address;
  _active: boolean = true;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (!this._id) {
      throw new Error("id is required");
    }

    if (!this._name) {
      throw new Error("name is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (!this._address) {
      throw new Error("address is required");
    }

    this._active = true;
  }

  deactivated() {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}
