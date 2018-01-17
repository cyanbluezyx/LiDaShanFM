'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../../utils/constant.js');

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
			curAudio: {},
			myAudio: {},
			curProcess: 0,
			curTime: '00:00',
			totalDuration: '00:00',
			audioList: [],
			playBtnSrc: '../../images/icon-run.png'
		}, _this.computed = {}, _this.methods = {
			playAudio: function playAudio() {
				if (this.myAudio.paused) {
					this.myAudio.play();
					this.playBtnSrc = '../../images/icon-pause.png';
				} else {
					this.myAudio.pause();
					this.playBtnSrc = '../../images/icon-run.png';
				}
			},
			seek: function seek(time) {
				var seektime = this.myAudio.currentTime + Number.parseInt(time);
				this.myAudio.seek(seektime);
			},
			turnAudio: function turnAudio(num) {
				var _this2 = this;

				var curIndex = this.audioList.findIndex(function (item) {
					return item.radioId == _this2.curAudio.radioId;
				}) + Number.parseInt(num);
				if (curIndex < this.audioList.length && curIndex >= 0) {
					this.curAudio = this.audioList[curIndex];
				} else {
					this.curAudio = this.audioList[0];
				}
				this.wxAudioControls();
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RadioPlay, [{
		key: 'onLoad',
		value: function onLoad(options) {
			//获取当前音频信息
			var item = JSON.parse(options.jsonStr);
			this.curAudio = item;
			//获取音频列表（用于控制上下首跳转）
			this.audioList = _api2.default.getAudioList();
			//初始化音频组件
			this.wxAudioInit();
		}
	}, {
		key: 'wxAudioInit',
		value: function wxAudioInit() {
			var _this3 = this;

			this.myAudio = wx.getBackgroundAudioManager(); //wx.createInnerAudioContext()
			this.wxAudioControls();
			this.myAudio.onTimeUpdate(function () {
				_this3.wxAudioUpdateProcess();
			});
			this.myAudio.onPlay(function () {
				_this3.playBtnSrc = '../../images/icon-pause.png';
			});
			this.myAudio.onStop(function () {
				_this3.playBtnSrc = '../../images/icon-run.png';
			});
			this.myAudio.onPause(function () {
				_this3.playBtnSrc = '../../images/icon-run.png';
			});
			this.myAudio.onWaiting(function () {
				_this3.wxAudioUpdateProcess();
			});
			this.myAudio.onEnded(function () {
				var curIndex = _this3.audioList.findIndex(function (item) {
					return item.radioId == _this3.curAudio.radioId;
				}) + 1;
				if (curIndex >= _this3.audioList.length) {
					_this3.curAudio = _this3.audioList[0];
				} else {
					_this3.curAudio = _this3.audioList[curIndex];
				}
				_this3.wxAudioControls();
			});
		}
	}, {
		key: 'wxAudioUpdateProcess',
		value: function wxAudioUpdateProcess() {
			this.curProcess = Number.parseInt(this.myAudio.currentTime * 100 / this.myAudio.duration);
			this.curTime = this.durationFilter(this.myAudio.currentTime);
			this.$apply();
		}
	}, {
		key: 'wxAudioControls',
		value: function wxAudioControls() {
			this.myAudio.title = this.curAudio.title;
			this.myAudio.autoplay = true;
			this.myAudio.src = _constant.AUDIO_PATH + this.curAudio.audioName;
			this.totalDuration = this.totalDurationFilter(this.curAudio.playLength);
		}
	}, {
		key: 'durationFilter',
		value: function durationFilter(time) {
			var minute = Number.parseInt(time / 60).toString().padStart(2, '0'),
			    sec = Number.parseInt(time % 60).toString().padStart(2, '0');
			return minute + ':' + sec;
		}
	}, {
		key: 'totalDurationFilter',
		value: function totalDurationFilter(time) {
			return time.replace('分', ':').replace('秒', '');
		}
	}]);

	return RadioPlay;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(RadioPlay , 'pages/radio/radio_play'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvX3BsYXkuanMiXSwibmFtZXMiOlsiUmFkaW9QbGF5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsImN1ckF1ZGlvIiwibXlBdWRpbyIsImN1clByb2Nlc3MiLCJjdXJUaW1lIiwidG90YWxEdXJhdGlvbiIsImF1ZGlvTGlzdCIsInBsYXlCdG5TcmMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJwbGF5QXVkaW8iLCJwYXVzZWQiLCJwbGF5IiwicGF1c2UiLCJzZWVrIiwidGltZSIsInNlZWt0aW1lIiwiY3VycmVudFRpbWUiLCJOdW1iZXIiLCJwYXJzZUludCIsInR1cm5BdWRpbyIsIm51bSIsImN1ckluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsInJhZGlvSWQiLCJsZW5ndGgiLCJ3eEF1ZGlvQ29udHJvbHMiLCJvcHRpb25zIiwiSlNPTiIsInBhcnNlIiwianNvblN0ciIsImdldEF1ZGlvTGlzdCIsInd4QXVkaW9Jbml0Iiwid3giLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwib25UaW1lVXBkYXRlIiwid3hBdWRpb1VwZGF0ZVByb2Nlc3MiLCJvblBsYXkiLCJvblN0b3AiLCJvblBhdXNlIiwib25XYWl0aW5nIiwib25FbmRlZCIsImR1cmF0aW9uIiwiZHVyYXRpb25GaWx0ZXIiLCIkYXBwbHkiLCJ0aXRsZSIsImF1dG9wbGF5Iiwic3JjIiwiYXVkaW9OYW1lIiwidG90YWxEdXJhdGlvbkZpbHRlciIsInBsYXlMZW5ndGgiLCJtaW51dGUiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwic2VjIiwicmVwbGFjZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7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LENBRFI7QUFFQSxVQUFVRixNQUFWLFNBQW9CRyxHQUFwQjtBQUNBOzs7c0NBRW1CeEMsSSxFQUFLO0FBQ3hCLFVBQU9BLEtBQUt5QyxPQUFMLENBQWEsR0FBYixFQUFpQixHQUFqQixFQUFzQkEsT0FBdEIsQ0FBOEIsR0FBOUIsRUFBa0MsRUFBbEMsQ0FBUDtBQUNBOzs7O0VBOUdxQyxlQUFLQyxJOztrQkFBdkIvRCxTIiwiZmlsZSI6InJhZGlvX3BsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9hcGkvYXBpJ1xyXG5cclxuaW1wb3J0IHtBVURJT19QQVRIfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvUGxheSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiMzMzJEMkRcIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLmraPlnKjmkq3mlL5cIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogXCJ3aGl0ZVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMkQyRFwiXHJcblx0fVxyXG5cdFxyXG5cdGRhdGEgPSB7XHJcblx0XHRjdXJBdWRpbzp7fSxcclxuXHRcdG15QXVkaW86e30sXHJcblx0XHRjdXJQcm9jZXNzOiAwLFxyXG5cdFx0Y3VyVGltZTogJzAwOjAwJyxcclxuXHRcdHRvdGFsRHVyYXRpb246ICcwMDowMCcsXHJcblx0XHRhdWRpb0xpc3Q6IFtdLFxyXG5cdFx0cGxheUJ0blNyYzogJy4uLy4uL2ltYWdlcy9pY29uLXJ1bi5wbmcnLFxyXG5cdH1cclxuXHJcblx0Y29tcHV0ZWQgPSB7XHJcblx0fVxyXG5cdFxyXG5cdG1ldGhvZHMgPSB7XHJcblx0XHRwbGF5QXVkaW8oKSB7XHJcblx0XHRcdGlmKHRoaXMubXlBdWRpby5wYXVzZWQpe1xyXG5cdFx0XHRcdHRoaXMubXlBdWRpby5wbGF5KClcclxuXHRcdFx0XHR0aGlzLnBsYXlCdG5TcmMgPSAnLi4vLi4vaW1hZ2VzL2ljb24tcGF1c2UucG5nJ1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLm15QXVkaW8ucGF1c2UoKVxyXG5cdFx0XHRcdHRoaXMucGxheUJ0blNyYyA9ICcuLi8uLi9pbWFnZXMvaWNvbi1ydW4ucG5nJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2Vlayh0aW1lKXtcclxuXHRcdFx0bGV0IHNlZWt0aW1lID0gdGhpcy5teUF1ZGlvLmN1cnJlbnRUaW1lICsgTnVtYmVyLnBhcnNlSW50KHRpbWUpXHJcblx0XHRcdHRoaXMubXlBdWRpby5zZWVrKHNlZWt0aW1lKVx0XHJcblx0XHR9LFxyXG5cdFx0dHVybkF1ZGlvKG51bSkge1xyXG5cdFx0XHRsZXQgY3VySW5kZXggPSB0aGlzLmF1ZGlvTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKGl0ZW0ucmFkaW9JZCA9PSB0aGlzLmN1ckF1ZGlvLnJhZGlvSWQpXHJcblx0XHRcdH0pICsgTnVtYmVyLnBhcnNlSW50KG51bSlcclxuXHRcdFx0aWYoY3VySW5kZXggPCB0aGlzLmF1ZGlvTGlzdC5sZW5ndGggJiYgY3VySW5kZXggPj0gMCl7XHJcblx0XHRcdFx0dGhpcy5jdXJBdWRpbyA9IHRoaXMuYXVkaW9MaXN0W2N1ckluZGV4XVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuY3VyQXVkaW8gPSB0aGlzLmF1ZGlvTGlzdFswXVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMud3hBdWRpb0NvbnRyb2xzKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uTG9hZChvcHRpb25zKSB7XHJcblx0XHQvL+iOt+WPluW9k+WJjemfs+mikeS/oeaBr1xyXG5cdFx0bGV0IGl0ZW0gPSBKU09OLnBhcnNlKG9wdGlvbnMuanNvblN0cilcclxuXHRcdHRoaXMuY3VyQXVkaW8gPSBpdGVtXHJcblx0XHQvL+iOt+WPlumfs+mikeWIl+ihqO+8iOeUqOS6juaOp+WItuS4iuS4i+mmlui3s+i9rO+8iVxyXG5cdFx0dGhpcy5hdWRpb0xpc3QgPSBhcGkuZ2V0QXVkaW9MaXN0KClcclxuXHRcdC8v5Yid5aeL5YyW6Z+z6aKR57uE5Lu2XHJcblx0XHR0aGlzLnd4QXVkaW9Jbml0KClcclxuXHR9XHJcblx0XHJcblx0d3hBdWRpb0luaXQoKSB7XHJcblx0XHR0aGlzLm15QXVkaW8gPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCkvL3d4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KClcclxuXHRcdHRoaXMud3hBdWRpb0NvbnRyb2xzKClcclxuXHRcdHRoaXMubXlBdWRpby5vblRpbWVVcGRhdGUoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnd4QXVkaW9VcGRhdGVQcm9jZXNzKClcclxuXHRcdH0pXHJcblx0XHR0aGlzLm15QXVkaW8ub25QbGF5KCgpID0+IHtcclxuXHRcdFx0dGhpcy5wbGF5QnRuU3JjID0gJy4uLy4uL2ltYWdlcy9pY29uLXBhdXNlLnBuZydcclxuXHRcdH0pXHJcblx0XHR0aGlzLm15QXVkaW8ub25TdG9wKCgpID0+IHtcclxuXHRcdFx0dGhpcy5wbGF5QnRuU3JjID0gJy4uLy4uL2ltYWdlcy9pY29uLXJ1bi5wbmcnXHJcblx0XHR9KVxyXG5cdFx0dGhpcy5teUF1ZGlvLm9uUGF1c2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnBsYXlCdG5TcmMgPSAnLi4vLi4vaW1hZ2VzL2ljb24tcnVuLnBuZydcclxuXHRcdH0pXHJcblx0XHR0aGlzLm15QXVkaW8ub25XYWl0aW5nKCgpID0+IHtcclxuXHRcdFx0dGhpcy53eEF1ZGlvVXBkYXRlUHJvY2VzcygpXHJcblx0XHR9KVxyXG5cdFx0dGhpcy5teUF1ZGlvLm9uRW5kZWQoKCkgPT4ge1xyXG5cdFx0XHRsZXQgY3VySW5kZXggPSB0aGlzLmF1ZGlvTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKGl0ZW0ucmFkaW9JZCA9PSB0aGlzLmN1ckF1ZGlvLnJhZGlvSWQpXHJcblx0XHRcdH0pICsgMVxyXG5cdFx0XHRpZihjdXJJbmRleCA+PSB0aGlzLmF1ZGlvTGlzdC5sZW5ndGgpe1xyXG5cdFx0XHRcdHRoaXMuY3VyQXVkaW8gPSB0aGlzLmF1ZGlvTGlzdFswXVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLmN1ckF1ZGlvID0gdGhpcy5hdWRpb0xpc3RbY3VySW5kZXhdXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy53eEF1ZGlvQ29udHJvbHMoKVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHd4QXVkaW9VcGRhdGVQcm9jZXNzKCkge1xyXG5cdFx0XHR0aGlzLmN1clByb2Nlc3MgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5teUF1ZGlvLmN1cnJlbnRUaW1lICogMTAwIC8gdGhpcy5teUF1ZGlvLmR1cmF0aW9uKVxyXG5cdFx0XHR0aGlzLmN1clRpbWUgPSB0aGlzLmR1cmF0aW9uRmlsdGVyKHRoaXMubXlBdWRpby5jdXJyZW50VGltZSlcclxuXHRcdFx0dGhpcy4kYXBwbHkoKVxyXG5cdH1cclxuXHJcblx0d3hBdWRpb0NvbnRyb2xzKCl7XHJcblx0XHR0aGlzLm15QXVkaW8udGl0bGUgPSB0aGlzLmN1ckF1ZGlvLnRpdGxlXHJcblx0XHR0aGlzLm15QXVkaW8uYXV0b3BsYXkgPSB0cnVlXHJcblx0XHR0aGlzLm15QXVkaW8uc3JjID0gQVVESU9fUEFUSCArIHRoaXMuY3VyQXVkaW8uYXVkaW9OYW1lXHJcblx0XHR0aGlzLnRvdGFsRHVyYXRpb24gPSB0aGlzLnRvdGFsRHVyYXRpb25GaWx0ZXIodGhpcy5jdXJBdWRpby5wbGF5TGVuZ3RoKVxyXG5cdH1cclxuXHJcblx0ZHVyYXRpb25GaWx0ZXIodGltZSl7XHJcblx0XHRsZXQgbWludXRlID0gTnVtYmVyLnBhcnNlSW50KHRpbWUgLyA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCcwJyksIFxyXG5cdFx0XHRcdHNlYyA9IE51bWJlci5wYXJzZUludCh0aW1lICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwnMCcpXHJcblx0XHRyZXR1cm4gYCR7bWludXRlfToke3NlY31gXHJcblx0fVxyXG5cclxuXHR0b3RhbER1cmF0aW9uRmlsdGVyKHRpbWUpe1xyXG5cdFx0cmV0dXJuIHRpbWUucmVwbGFjZSgn5YiGJywnOicpLnJlcGxhY2UoJ+enkicsJycpXHJcblx0fVxyXG59XHJcbiJdfQ==