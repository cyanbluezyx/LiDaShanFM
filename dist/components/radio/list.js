'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioList = function (_wepy$component) {
	_inherits(RadioList, _wepy$component);

	function RadioList() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RadioList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioList.__proto__ || Object.getPrototypeOf(RadioList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
			list: {
				type: Object,
				default: []
			},

			audio: {
				type: Object,
				default: [],
				twoWay: true
			}
		}, _this.methods = {
			playRadio: function playRadio(audio) {
				_wepy2.default.navigateTo({
					url: '/pages/radio/radio_play?jsonStr=' + JSON.stringify(audio)
				});
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return RadioList;
}(_wepy2.default.component);

exports.default = RadioList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiUmFkaW9MaXN0IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJhdWRpbyIsInR3b1dheSIsIm1ldGhvZHMiLCJwbGF5UmFkaW8iLCJuYXZpZ2F0ZVRvIiwidXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzBMQUNwQkMsSyxHQUFRO0FBQ1BDLFNBQU07QUFDTEMsVUFBTUMsTUFERDtBQUVMQyxhQUFTO0FBRkosSUFEQzs7QUFNUEMsVUFBTztBQUNOSCxVQUFNQyxNQURBO0FBRU5DLGFBQVMsRUFGSDtBQUdORSxZQUFRO0FBSEY7QUFOQSxHLFFBYVJDLE8sR0FBVTtBQUNUQyxZQURTLHFCQUNDSCxLQURELEVBQ1E7QUFDaEIsbUJBQUtJLFVBQUwsQ0FBZ0I7QUFDZkMsVUFBSyxxQ0FBcUNDLEtBQUtDLFNBQUwsQ0FBZVAsS0FBZjtBQUQzQixLQUFoQjtBQUdBO0FBTFEsRzs7OztFQWQ0QixlQUFLUSxTOztrQkFBdkJkLFMiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge0NVUlJFTlRfQVVESU99IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9MaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG5cdHByb3BzID0ge1xyXG5cdFx0bGlzdDoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQ6IFtdXHJcblx0XHR9XHJcblx0XHQsXHJcblx0XHRhdWRpbzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQ6IFtdLFxyXG5cdFx0XHR0d29XYXk6IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1ldGhvZHMgPSB7XHJcblx0XHRwbGF5UmFkaW8oYXVkaW8pIHtcclxuXHRcdFx0d2VweS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvcmFkaW8vcmFkaW9fcGxheT9qc29uU3RyPScgKyBKU09OLnN0cmluZ2lmeShhdWRpbylcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19