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
      minus: function minus() {
        this.num = this.num - 1;
        console.log(this.$name + ' minus tap');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component)) || _class);
exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsInN0YXRlTnVtIiwic3RhdGUiLCJjb3VudGVyIiwibnVtIiwiaW5jTnVtIiwiZGVjTnVtIiwicHJvcHMiLCJ0eXBlIiwiTnVtYmVyIiwiU3RyaW5nIiwiY29lcmNlIiwidiIsImRlZmF1bHQiLCJkYXRhIiwibWV0aG9kcyIsInBsdXMiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCIkZW1pdCIsIm1pbnVzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQzs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBV3FCQSxPLFdBVHBCLHdCQUFRO0FBQ1JDLFVBRFEsb0JBQ0VDLEtBREYsRUFDUztBQUNoQixXQUFPQSxNQUFNQyxPQUFOLENBQWNDLEdBQXJCO0FBQ0E7QUFITyxDQUFSLEVBSUM7QUFDREMsNEJBREM7QUFFREM7QUFGQyxDQUpELEM7Ozs7Ozs7Ozs7Ozs7O3dMQVVFQyxLLEdBQVE7QUFDTkgsV0FBSztBQUNISSxjQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGdCQUFRLGdCQUFVQyxDQUFWLEVBQWE7QUFDbkIsaUJBQU8sQ0FBQ0EsQ0FBUjtBQUNELFNBSkU7QUFLSEMsaUJBQVM7QUFMTjtBQURDLEssUUFVUkMsSSxHQUFPLEUsUUFHUEMsTyxHQUFVO0FBQ1JDLFVBRFEsa0JBQ0E7QUFDTixhQUFLWixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FhLGdCQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLFdBQXpCOztBQUVBLGFBQUtDLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0QsT0FOTztBQU9SQyxXQVBRLG1CQU9DO0FBQ1AsYUFBS2pCLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQWEsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsWUFBekI7QUFDRDtBQVZPLEs7Ozs7RUFkd0IsZUFBS0csUztrQkFBckJ0QixPIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHRpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cdGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5cdGltcG9ydCB7IElOQ1JFTUVOVCwgREVDUkVNRU5UIH0gZnJvbSAnLi4vLi4vc3RvcmUvdHlwZXMvY291bnRlcidcclxuXHJcblx0QGNvbm5lY3Qoe1xyXG5cdFx0c3RhdGVOdW0gKHN0YXRlKSB7XHJcblx0XHRcdHJldHVybiBzdGF0ZS5jb3VudGVyLm51bVxyXG5cdFx0fVxyXG5cdH0se1xyXG5cdFx0aW5jTnVtOiBJTkNSRU1FTlQsXHJcblx0XHRkZWNOdW06IERFQ1JFTUVOVFxyXG5cdH0pXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgbnVtOiB7XHJcbiAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuICAgICAgICBjb2VyY2U6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICByZXR1cm4gK3ZcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHQ6IDUwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHBsdXMgKCkge1xyXG4gICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgcGx1cyB0YXAnKVxyXG5cclxuICAgICAgICB0aGlzLiRlbWl0KCdpbmRleC1lbWl0JywgMSwgMiwgMylcclxuICAgICAgfSxcclxuICAgICAgbWludXMgKCkge1xyXG4gICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gLSAxXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgbWludXMgdGFwJylcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuIl19