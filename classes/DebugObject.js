const OrigDebugObject = require('fortnite-replay-parser/Classes/DebugObject');

class DebugObject extends OrigDebugObject {
  getValueAsInt16() {
    if (this.data.length < 2) {
      return null;
    }

    return this.data.readInt16LE();
  }

  toJSON() {
    return {
      ...super.toJSON(),
      int: undefined,
      int32: this.getValueAsInt(),
      int16: this.getValueAsInt16(),
      int8: this.data[0],
      raw: this.data,
    };
  }
}

module.exports = DebugObject;
