"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLayout;

var _react = require("react");

var _LayoutProvider = require("./LayoutProvider");

function useLayout() {
  return (0, _react.useContext)(_LayoutProvider.LayoutContext);
}