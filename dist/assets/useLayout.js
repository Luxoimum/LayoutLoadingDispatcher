"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLayout;

var _react = require("react");

var _layoutDispatcher = require("./layoutDispatcher");

function useLayout() {
  return (0, _react.useContext)(_layoutDispatcher.LayoutContext);
}