class StringBuilder {
  constructor(initialValue) {
    this._value = initialValue;
  }

  getValue() {
    return this._value;
  }

  padStart(str) {
    this._value = str + this._value;
  }

  padEnd(str) {
    this._value = this._value + str;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
