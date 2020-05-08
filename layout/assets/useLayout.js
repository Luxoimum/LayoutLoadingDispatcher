"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLayout;

var _react = require("react");

var _LayoutProvider = _interopRequireDefault(require("./LayoutProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useLayout() {
  return (0, _react.useContext)(_LayoutProvider.default);
}