'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _counter = require('./../components/wall/counter.js');

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wall = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Wall, _wepy$page);

  function Wall() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Wall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Wall.__proto__ || Object.getPrototypeOf(Wall)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '表白墙'
    }, _this.$repeat = {}, _this.$props = { "counter": { "xmlns:v-bind": "", "v-bind:num.sync": "50" } }, _this.$events = {}, _this.components = {
      counter: _counter2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Wall;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Wall , 'pages/wall'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGwuanMiXSwibmFtZXMiOlsiV2FsbCIsIm51bSIsInN0YXRlIiwiY291bnRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFRcUJBLEksV0FOcEIsd0JBQVE7QUFDUEMsS0FETyxlQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQXJCO0FBQ0Q7QUFITSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7O2tMQU9DRyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixJQUFyQyxFQUFYLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JOO0FBRFEsSzs7OztFQVJzQixlQUFLTyxJO2tCQUFsQlYsSSIsImZpbGUiOiJ3YWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICBpbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL3dhbGwvY291bnRlcidcclxuXHJcbiAgQGNvbm5lY3Qoe1xyXG4gICAgbnVtIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ihqOeZveWimSdcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY291bnRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnVtLnN5bmNcIjpcIjUwXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgY291bnRlcjogQ291bnRlclxyXG4gICAgfVxyXG4gIH1cclxuIl19