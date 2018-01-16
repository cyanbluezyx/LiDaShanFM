'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
			}
		}, _this.methods = {
			playRadio: function playRadio(audio) {
				console.log(audio);
				_wepy2.default.navigateTo({
					url: '/pages/radio/radio_play?jsonStr=' + JSON.stringify(audio)
				});
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return RadioList;
}(_wepy2.default.component);

exports.default = RadioList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiUmFkaW9MaXN0IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJtZXRob2RzIiwicGxheVJhZGlvIiwiYXVkaW8iLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7OzswTEFDcEJDLEssR0FBUTtBQUNQQyxTQUFNO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsYUFBUztBQUZKO0FBREMsRyxRQU9SQyxPLEdBQVU7QUFDVEMsWUFEUyxxQkFDQ0MsS0FERCxFQUNRO0FBQ2hCQyxZQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxtQkFBS0csVUFBTCxDQUFnQjtBQUNmQyxVQUFLLHFDQUFxQ0MsS0FBS0MsU0FBTCxDQUFlTixLQUFmO0FBRDNCLEtBQWhCO0FBR0E7QUFOUSxHOzs7O0VBUjRCLGVBQUtPLFM7O2tCQUF2QmYsUyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0xpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblx0cHJvcHMgPSB7XHJcblx0XHRsaXN0OiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdDogW11cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1ldGhvZHMgPSB7XHJcblx0XHRwbGF5UmFkaW8oYXVkaW8pIHtcclxuXHRcdFx0Y29uc29sZS5sb2coYXVkaW8pXHJcblx0XHRcdHdlcHkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3JhZGlvL3JhZGlvX3BsYXk/anNvblN0cj0nICsgSlNPTi5zdHJpbmdpZnkoYXVkaW8pXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==