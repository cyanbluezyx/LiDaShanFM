"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioPlay = function (_wepy$page) {
	_inherits(RadioPlay, _wepy$page);

	function RadioPlay() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RadioPlay);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioPlay.__proto__ || Object.getPrototypeOf(RadioPlay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
			navigationBarBackgroundColor: "#332D2D",
			navigationBarTitleText: "正在播放",
			navigationBarTextStyle: "white",
			backgroundColor: "#332D2D"
		}, _this.data = {
			audio: {},
			myAudio: {},
			src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
		}, _this.methods = {
			playAudio: function playAudio() {
				if (this.myAudio) {
					this.myAudio.play();
				}
			},
			seek: function seek(time) {
				var seektime = this.myAudio.currentTime + Number.parseInt(time);
				this.myAudio.seek(seektime);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RadioPlay, [{
		key: "onLoad",
		value: function onLoad(options) {
			// 使用 wx.createAudioContext 获取 audio 上下文 context
			//this.audioCtx = wx.createInnerAudioContext('myAudio')
			var item = JSON.parse(options.jsonStr);
			this.audio = item;
			this.myAudio = wx.createInnerAudioContext();
			this.myAudio.autoplay = false;
			this.myAudio.src = this.src;
		}
	}]);

	return RadioPlay;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(RadioPlay , 'pages/radio/radio_play'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvX3BsYXkuanMiXSwibmFtZXMiOlsiUmFkaW9QbGF5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsImF1ZGlvIiwibXlBdWRpbyIsInNyYyIsIm1ldGhvZHMiLCJwbGF5QXVkaW8iLCJwbGF5Iiwic2VlayIsInRpbWUiLCJzZWVrdGltZSIsImN1cnJlbnRUaW1lIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJvcHRpb25zIiwiaXRlbSIsIkpTT04iLCJwYXJzZSIsImpzb25TdHIiLCJ3eCIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0IiwiYXV0b3BsYXkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNMQyxpQ0FBOEIsU0FEekI7QUFFTEMsMkJBQXdCLE1BRm5CO0FBR0xDLDJCQUF3QixPQUhuQjtBQUlMQyxvQkFBaUI7QUFKWixHLFFBT1ZDLEksR0FBTztBQUNOQyxVQUFNLEVBREE7QUFFTkMsWUFBUSxFQUZGO0FBR05DLFFBQUs7QUFIQyxHLFFBTVBDLE8sR0FBVTtBQUNUQyxZQURTLHVCQUNHO0FBQ1gsUUFBRyxLQUFLSCxPQUFSLEVBQWdCO0FBQ2YsVUFBS0EsT0FBTCxDQUFhSSxJQUFiO0FBQ0E7QUFDRCxJQUxRO0FBTVRDLE9BTlMsZ0JBTUpDLElBTkksRUFNQztBQUNULFFBQUlDLFdBQVcsS0FBS1AsT0FBTCxDQUFhUSxXQUFiLEdBQTJCQyxPQUFPQyxRQUFQLENBQWdCSixJQUFoQixDQUExQztBQUNBLFNBQUtOLE9BQUwsQ0FBYUssSUFBYixDQUFrQkUsUUFBbEI7QUFDQTtBQVRRLEc7Ozs7O3lCQVlISSxPLEVBQVM7QUFDYjtBQUNGO0FBQ0EsT0FBSUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXSCxRQUFRSSxPQUFuQixDQUFYO0FBQ0EsUUFBS2hCLEtBQUwsR0FBYWEsSUFBYjtBQUNBLFFBQUtaLE9BQUwsR0FBZWdCLEdBQUdDLHVCQUFILEVBQWY7QUFDQSxRQUFLakIsT0FBTCxDQUFha0IsUUFBYixHQUF3QixLQUF4QjtBQUNBLFFBQUtsQixPQUFMLENBQWFDLEdBQWIsR0FBbUIsS0FBS0EsR0FBeEI7QUFDQzs7OztFQWxDb0MsZUFBS2tCLEk7O2tCQUF2QjNCLFMiLCJmaWxlIjoicmFkaW9fcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9QbGF5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMkQyRFwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuato+WcqOaSreaUvlwiLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiBcIndoaXRlXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMyRDJEXCJcclxuXHR9XHJcblx0XHJcblx0ZGF0YSA9IHtcclxuXHRcdGF1ZGlvOnt9LFxyXG5cdFx0bXlBdWRpbzp7fSxcclxuXHRcdHNyYzogJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2RENCREM5QUI3QzQ5RkQ3MTNENjMyRDMxM0FDNDg1OEJBQ0I4REREMjkwNjdEM0M2MDE0ODFEMzZFNjIwNTNCRjhERkVBRjc0QzBBNUNDRkFERDY0NzExNjBDQUYzRTZBJmZyb210YWc9NDYnLFxyXG5cdH1cclxuXHJcblx0bWV0aG9kcyA9IHtcclxuXHRcdHBsYXlBdWRpbygpIHtcclxuXHRcdFx0aWYodGhpcy5teUF1ZGlvKXtcclxuXHRcdFx0XHR0aGlzLm15QXVkaW8ucGxheSgpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzZWVrKHRpbWUpe1xyXG5cdFx0XHRsZXQgc2Vla3RpbWUgPSB0aGlzLm15QXVkaW8uY3VycmVudFRpbWUgKyBOdW1iZXIucGFyc2VJbnQodGltZSlcclxuXHRcdFx0dGhpcy5teUF1ZGlvLnNlZWsoc2Vla3RpbWUpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkxvYWQob3B0aW9ucykge1xyXG4gICAgLy8g5L2/55SoIHd4LmNyZWF0ZUF1ZGlvQ29udGV4dCDojrflj5YgYXVkaW8g5LiK5LiL5paHIGNvbnRleHRcclxuXHRcdC8vdGhpcy5hdWRpb0N0eCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCdteUF1ZGlvJylcclxuXHRcdGxldCBpdGVtID0gSlNPTi5wYXJzZShvcHRpb25zLmpzb25TdHIpXHJcblx0XHR0aGlzLmF1ZGlvID0gaXRlbVxyXG5cdFx0dGhpcy5teUF1ZGlvID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKVxyXG5cdFx0dGhpcy5teUF1ZGlvLmF1dG9wbGF5ID0gZmFsc2VcclxuXHRcdHRoaXMubXlBdWRpby5zcmMgPSB0aGlzLnNyY1xyXG4gIH1cclxufVxyXG4iXX0=