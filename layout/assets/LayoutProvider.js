"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LayoutProvider;
exports.LayoutContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

require("./styles.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    contentHide: {
      opacity: 0
    }
  };
});
var LayoutContext = (0, _react.createContext)({
  state: false,
  isLoading: true,
  setLayoutState: function setLayoutState() {}
});
exports.LayoutContext = LayoutContext;

function LayoutProvider(_ref) {
  var children = _ref.children,
      state = _ref.state,
      customComponent = _ref.customComponent,
      resize = _ref.resize;
  console.log('LayoutProvider', state);

  var _Array = Array(2),
      _Array2 = _slicedToArray(_Array, 2),
      layout = _Array2[0],
      setLayout = _Array2[1];
  /*useState({
  state: state || false,
  isLoading: true,
  setLayoutState: setLayoutState
  });*/


  console.log('A_LayoutProviderRender'); // const [height, setHeight] = useState(window.innerHeight);
  // const classes = useStyles();

  console.log('B_LayoutProviderRender');
  /*useEffect(() => {
    resize &&
      window.addEventListener("resize", () => setHeight(window.innerHeight));
  }, [resize]);*/

  function setLayoutState() {
    var _arguments = Array.prototype.slice.call(arguments),
        primary = _arguments[0],
        secondary = _arguments[1];

    _typeof(layout.state) === 'object' && layout.state[primary] !== secondary && setLayout(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        state: _objectSpread(_objectSpread({}, prevState.state), {}, _defineProperty({}, primary, secondary))
      });
    });
    typeof layout.state === 'boolean' && setLayout(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        state: primary
      });
    });
  }

  console.log('C_LayoutProviderRender');
  /*useEffect(() => {
    let isLoading;
    if (typeof layout.state === 'object') {
      isLoading = !Object.keys(layout.state).reduce(
        (acc, curr) => acc && layout.state[curr],
        true
      );
    } else if (typeof layout.state === 'boolean') {
      isLoading = !layout.state;
    } else {
      console.error('Excpected value of the state of LayoutProvider to be an object or boolean');
      console.trace();
    }
    setLayout(prevState => ({
      ...prevState,
      isLoading: isLoading === undefined ? true : isLoading
    }));
  }, [layout]);*/

  /*className={classes.contentHide}*/

  return /*#__PURE__*/_react.default.createElement(LayoutContext.Provider, {
    value: layout
  }, layout.isLoading ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    style: {
      height: window.innerHeight
    },
    container: true,
    justify: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true
  }, customComponent || 'Loading')), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: 0
    }
  }, children)) : children);
}