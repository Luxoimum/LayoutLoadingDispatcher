"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Demo1 = Demo1;

var _react = _interopRequireWildcard(require("react"));

var _layoutDispatcher = require("../assets/layoutDispatcher");

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    explanation: {
      backgroundColor: _grey.default[200],
      padding: theme.spacing(2),
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    insideFunction: {
      paddingLeft: theme.spacing(1)
    },
    insideItem: {
      paddingLeft: theme.spacing(2)
    },
    insideDoubleItem: {
      paddingLeft: theme.spacing(3)
    },
    paragraph: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      textAlign: "justify"
    }
  };
}); // Simulating asyncronouse acction by creating sleep function

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
} // Creating a custom spinner countdown


function CustomSpinner(_ref) {
  var maxCount = _ref.maxCount;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      tick = _useState2[0],
      setTick = _useState2[1];

  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  (0, _react.useEffect)(function () {
    var waiting = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return sleep(500);

              case 2:
                setTick(tick + 1);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function waiting() {
        return _ref2.apply(this, arguments);
      };
    }();

    tick < maxCount * 2 - 1 && waiting();
  }, [tick, maxCount]);
  var number = maxCount - parseInt(tick / 2, 10);
  return /*#__PURE__*/_react.default.createElement(_core.Fade, {
    in: tick % 2 === 0
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h2"
  }, number));
}

function CountdownLoadingDemo() {
  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      tick = _useState4[0],
      setTick = _useState4[1];

  var _useLayout = (0, _layoutDispatcher.useLayout)(),
      setLayoutState = _useLayout.setLayoutState;

  var classes = useStyles();
  (0, _react.useEffect)(function () {
    var waiting = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return sleep(1e3);

              case 2:
                setTick(tick + 1);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function waiting() {
        return _ref3.apply(this, arguments);
      };
    }();

    if (tick > 4) {
      setLayoutState("app", true);
    } else {
      waiting();
    }
  }, [tick, setLayoutState]);
  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h5",
    align: "center"
  }, "Website just loaded correctly (:")), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    align: "center",
    variant: "body1"
  }, "There is the", " ", /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "inline",
    fontStyle: "italic"
  }, "\"How to use\""), " ", "code:"), /*#__PURE__*/_react.default.createElement(_core.Paper, {
    className: classes.explanation,
    elevation: 0
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    paragraph: true
  }, "//Using LayoutProvider to setup our state and customizated spinner"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2"
  }, "function Demo() {"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideFunction,
    variant: "body2"
  }, "return ("), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideItem,
    variant: "body2"
  }, "<LayoutProvider"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideDoubleItem,
    variant: "body2"
  }, "layoutElements={{ app: false }}"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideDoubleItem,
    variant: "body2"
  }, "customComponent={<CustomSpinner maxCount={5} />}"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideItem,
    variant: "body2"
  }, ">"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideDoubleItem,
    variant: "body2"
  }, "<CountdownLoadingDemo />"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideItem,
    variant: "body2"
  }, "</LayoutProvider>"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideItem,
    variant: "body2"
  }, ");"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideFunction,
    variant: "body2"
  }, "}"))), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "div",
    className: classes.paragraph,
    variant: "body1"
  }, "The component", " ", /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "inline",
    fontStyle: "italic"
  }, "\"CustomSpinner\""), " ", "will create the countdown effect. In addition, the component", " ", /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "inline",
    fontStyle: "italic"
  }, "\"CountdownLoadingDemo\""), " ", "will be waiting 5 secounds until to call the function", " ", /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "inline",
    fontStyle: "italic"
  }, "\"setLayoutState\""), " ", "and set the attribute", " ", /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "inline",
    fontStyle: "italic"
  }, "\"app\""), " ", "to", " ", /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "inline",
    fontStyle: "italic"
  }, "\"true\""), " ", "by this way:"), /*#__PURE__*/_react.default.createElement(_core.Paper, {
    className: classes.explanation,
    elevation: 0
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    paragraph: true
  }, "//First, get the instance of \"setLayoutState\" by calling the \"useLayout()\" hook"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2"
  }, "function CustomSpinner({ maxCount }) {"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideFunction,
    variant: "body2"
  }, "const { setLayoutState } = useLayout();"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    align: "center",
    variant: "body2"
  }, "."), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    align: "center",
    variant: "body2"
  }, "."), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    align: "center",
    variant: "body2"
  }, "."), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "div",
    className: classes.insideFunction,
    variant: "body2"
  }, "//Then, we change the value of the ", /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "inline",
    fontStyle: "italic"
  }, "LayoutProvider"), " ", "when countdown gets 0"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideFunction,
    variant: "body2"
  }, "if (countdown === 0) {"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideDoubleItem,
    variant: "body2"
  }, "setLayoutState(\"app\", true)"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.insideFunction,
    variant: "body2"
  }, "}"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    align: "center",
    variant: "body2"
  }, "."), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    align: "center",
    variant: "body2"
  }, "."), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    align: "center",
    variant: "body2"
  }, ".")), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "div",
    className: classes.paragraph,
    variant: "body1",
    paragraph: true
  }, "In order to change show us the website, the component", " ", /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "inline",
    fontStyle: "italic"
  }, "\"LayoutProvider\""), " ", "will catch that change (\"app\" === true) and will update the state to showing the content hidden at the start."), /*#__PURE__*/_react.default.createElement(_core.Button, {
    onClick: function onClick() {
      return window.location = window.origin;
    }
  }, "Go Back!"));
}

function Demo1() {
  return /*#__PURE__*/_react.default.createElement(_layoutDispatcher.LayoutProvider, {
    state: {
      app: false
    },
    customComponent: /*#__PURE__*/_react.default.createElement(CustomSpinner, {
      maxCount: 5
    })
  }, /*#__PURE__*/_react.default.createElement(CountdownLoadingDemo, null));
}