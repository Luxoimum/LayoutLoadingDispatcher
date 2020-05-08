"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LayoutProvider", {
  enumerable: true,
  get: function get() {
    return _layoutDispatcher.default;
  }
});
Object.defineProperty(exports, "useLayout", {
  enumerable: true,
  get: function get() {
    return _useLayout.default;
  }
});

var _layoutDispatcher = _interopRequireDefault(require("./assets/layoutDispatcher"));

var _useLayout = _interopRequireDefault(require("./assets/useLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }