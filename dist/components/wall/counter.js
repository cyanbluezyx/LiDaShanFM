'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../../npm/wepy-redux/lib/index.js');

var _counter = require('./../../store/types/counter.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = (_dec = (0, _wepyRedux.connect)({
  stateNum: function stateNum(state) {
    return state.counter.num;
  }
}, {
  incNum: _counter.INCREMENT,
  decNum: _counter.DECREMENT
}), _dec(_class = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      num: {
        type: [Number, String],
        coerce: function coerce(v) {
          return +v;
        },
        default: 50
      }
    }, _this.data = {}, _this.methods = {
      plus: function plus() {
        this.num = this.num + 1;
        console.log(this.$name + ' plus tap');

        this.$emit('index-emit', 1, 2, 3);
      },
      plus2: function plus2() {
        var store = (0, _wepyRedux.getStore)();
        store.dispatch({ type: 'INCREMENT' });
      },
      minus: function minus() {
        this.num = this.num - 1;
        console.log(this.$name + ' minus tap');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component)) || _class);
exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsInN0YXRlTnVtIiwic3RhdGUiLCJjb3VudGVyIiwibnVtIiwiaW5jTnVtIiwiZGVjTnVtIiwicHJvcHMiLCJ0eXBlIiwiTnVtYmVyIiwiU3RyaW5nIiwiY29lcmNlIiwidiIsImRlZmF1bHQiLCJkYXRhIiwibWV0aG9kcyIsInBsdXMiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCIkZW1pdCIsInBsdXMyIiwic3RvcmUiLCJkaXNwYXRjaCIsIm1pbnVzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQzs7OztBQUNBOztBQUNDOzs7Ozs7Ozs7O0lBV29CQSxPLFdBVHBCLHdCQUFRO0FBQ1JDLFVBRFEsb0JBQ0VDLEtBREYsRUFDUztBQUNoQixXQUFPQSxNQUFNQyxPQUFOLENBQWNDLEdBQXJCO0FBQ0E7QUFITyxDQUFSLEVBSUM7QUFDREMsNEJBREM7QUFFREM7QUFGQyxDQUpELEM7Ozs7Ozs7Ozs7Ozs7O3dMQVVFQyxLLEdBQVE7QUFDTkgsV0FBSztBQUNISSxjQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGdCQUFRLGdCQUFVQyxDQUFWLEVBQWE7QUFDbkIsaUJBQU8sQ0FBQ0EsQ0FBUjtBQUNELFNBSkU7QUFLSEMsaUJBQVM7QUFMTjtBQURDLEssUUFVUkMsSSxHQUFPLEUsUUFHUEMsTyxHQUFVO0FBQ1JDLFVBRFEsa0JBQ0E7QUFDTixhQUFLWixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FhLGdCQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLFdBQXpCOztBQUVBLGFBQUtDLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0QsT0FOTztBQU9SQyxXQVBRLG1CQU9DO0FBQ1AsWUFBTUMsUUFBUywwQkFBZjtBQUNBQSxjQUFNQyxRQUFOLENBQWUsRUFBQ2YsTUFBTSxXQUFQLEVBQWY7QUFDRCxPQVZPO0FBV1JnQixXQVhRLG1CQVdDO0FBQ1AsYUFBS3BCLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQWEsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsWUFBekI7QUFDRDtBQWRPLEs7Ozs7RUFkd0IsZUFBS00sUztrQkFBckJ6QixPIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHRpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cdGltcG9ydCB7IGNvbm5lY3QsIGdldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICBpbXBvcnQgeyBJTkNSRU1FTlQsIERFQ1JFTUVOVCB9IGZyb20gJy4uLy4uL3N0b3JlL3R5cGVzL2NvdW50ZXInXHJcblxyXG5cdEBjb25uZWN0KHtcclxuXHRcdHN0YXRlTnVtIChzdGF0ZSkge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGUuY291bnRlci5udW1cclxuXHRcdH1cclxuXHR9LHtcclxuXHRcdGluY051bTogSU5DUkVNRU5ULFxyXG5cdFx0ZGVjTnVtOiBERUNSRU1FTlRcclxuXHR9KVxyXG5cclxuXHRleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIG51bToge1xyXG4gICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcbiAgICAgICAgY29lcmNlOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgcmV0dXJuICt2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0OiA1MFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBwbHVzICgpIHtcclxuICAgICAgICB0aGlzLm51bSA9IHRoaXMubnVtICsgMVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHBsdXMgdGFwJylcclxuXHJcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5kZXgtZW1pdCcsIDEsIDIsIDMpXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdXMyICgpIHtcclxuICAgICAgICBjb25zdCBzdG9yZSA9ICBnZXRTdG9yZSgpXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdJTkNSRU1FTlQnfSlcclxuICAgICAgfSxcclxuICAgICAgbWludXMgKCkge1xyXG4gICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gLSAxXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgbWludXMgdGFwJylcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuIl19