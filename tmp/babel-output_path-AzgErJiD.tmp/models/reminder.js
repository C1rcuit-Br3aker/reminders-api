"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  tableName: `reminders`,

  list: function list() {
    return this.belongsTo(`list`);
  }
};