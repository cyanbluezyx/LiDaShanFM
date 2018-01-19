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
			playBtnSrc: '../../images/icon-run.png',
			globalData: {}
		}, _this.watch = {
			curAudio: function curAudio(newValue, oldValue) {
				this.$parent.globalData.curAudio = newValue;
				if (newValue === {}) {
					_wepy2.default.removeStorageSync(_constant.CURRENT_AUDIO);
				} else {
					_wepy2.default.setStorageSync(_constant.CURRENT_AUDIO, newValue);
				}
			}
		}, _this.computed = {}, _this.methods = {
			playAudio: function playAudio() {
				if (this.globalData.backgroundAudioPlay.paused) {
					this.globalData.backgroundAudioPlay.play();
					this.playBtnSrc = '../../images/icon-pause.png';
				} else {
					this.globalData.backgroundAudioPlay.pause();
					this.playBtnSrc = '../../images/icon-run.png';
				}
			},
			seek: function seek(time) {
				var seektime = this.globalData.backgroundAudioPlay.currentTime + Number.parseInt(time);
				this.globalData.backgroundAudioPlay.seek(seektime);
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
				this.wxAudioControls(this.curAudio);
				this.wxAudioSetContext(this.curAudio);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RadioPlay, [{
		key: 'onLoad',
		value: function onLoad(options) {
			this.globalData = this.$parent.globalData;
			this.curAudio = Object.assign({}, this.globalData.curAudio);
			this.wxAudioInit();
			//获取当前音频信息
			var item = JSON.parse(options.jsonStr);
			if (item.radioId !== undefined) {
				this.curAudio = item;
				//获取音频列表（用于控制上下首跳转）
				this.audioList = this.globalData.curAudioList;
				this.wxAudioControls(this.curAudio);
			}
			this.wxAudioSetContext(this.curAudio);
		}
	}, {
		key: 'wxAudioInit',
		value: function wxAudioInit() {
			var _this3 = this;

			this.globalData.backgroundAudioPlay.onPlay(function () {
				_this3.playBtnSrc = '../../images/icon-pause.png';
			});
			this.globalData.backgroundAudioPlay.onStop(function () {
				_this3.playBtnSrc = '../../images/icon-run.png';
				_this3.globalData.curAudio = {};
			});
			this.globalData.backgroundAudioPlay.onPause(function () {
				_this3.playBtnSrc = '../../images/icon-run.png';
			});
			this.globalData.backgroundAudioPlay.onWaiting(function () {
				_this3.wxAudioUpdateProcess();
			});
			this.globalData.backgroundAudioPlay.onEnded(function () {
				var curIndex = _this3.audioList.findIndex(function (item) {
					return item.radioId == _this3.curAudio.radioId;
				}) + 1;
				if (curIndex >= _this3.audioList.length) {
					_this3.curAudio = _this3.audioList[0];
				} else {
					_this3.curAudio = _this3.audioList[curIndex];
				}
				_this3.wxAudioControls(_this3.curAudio);
				_this3.wxAudioSetContext(_this3.curAudio);
			});
			this.globalData.backgroundAudioPlay.onTimeUpdate(function () {
				_this3.wxAudioUpdateProcess();
			});
		}
	}, {
		key: 'wxAudioControls',
		value: function wxAudioControls(audio) {
			this.globalData.backgroundAudioPlay.title = audio.title;
			this.globalData.backgroundAudioPlay.autoplay = true;
			this.globalData.backgroundAudioPlay.src = _constant.AUDIO_PATH + audio.audioName;
		}
	}, {
		key: 'wxAudioSetContext',
		value: function wxAudioSetContext(audio) {
			this.totalDuration = this.totalDurationFilter(audio.playLength);
			this.playBtnSrc = this.globalData.backgroundAudioPlay.paused ? '../../images/icon-run.png' : '../../images/icon-pause.png';
		}
	}, {
		key: 'totalDurationFilter',
		value: function totalDurationFilter(time) {
			return time.replace('分', ':').replace('秒', '');
		}
	}, {
		key: 'durationFilter',
		value: function durationFilter(time) {
			var minute = Number.parseInt(time / 60).toString().padStart(2, '0'),
			    sec = Number.parseInt(time % 60).toString().padStart(2, '0');
			return minute + ':' + sec;
		}
	}, {
		key: 'wxAudioUpdateProcess',
		value: function wxAudioUpdateProcess() {
			this.curProcess = Number.parseInt(this.globalData.backgroundAudioPlay.currentTime * 100 / this.globalData.backgroundAudioPlay.duration);
			this.curTime = this.durationFilter(this.globalData.backgroundAudioPlay.currentTime);
			this.$apply();
		}
	}]);

	return RadioPlay;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(RadioPlay , 'pages/radio/radio_play'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvX3BsYXkuanMiXSwibmFtZXMiOlsiUmFkaW9QbGF5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsImN1ckF1ZGlvIiwibXlBdWRpbyIsImN1clByb2Nlc3MiLCJjdXJUaW1lIiwidG90YWxEdXJhdGlvbiIsImF1ZGlvTGlzdCIsInBsYXlCdG5TcmMiLCJnbG9iYWxEYXRhIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiJHBhcmVudCIsInJlbW92ZVN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJwbGF5QXVkaW8iLCJiYWNrZ3JvdW5kQXVkaW9QbGF5IiwicGF1c2VkIiwicGxheSIsInBhdXNlIiwic2VlayIsInRpbWUiLCJzZWVrdGltZSIsImN1cnJlbnRUaW1lIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJ0dXJuQXVkaW8iLCJudW0iLCJjdXJJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJyYWRpb0lkIiwibGVuZ3RoIiwid3hBdWRpb0NvbnRyb2xzIiwid3hBdWRpb1NldENvbnRleHQiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwid3hBdWRpb0luaXQiLCJKU09OIiwicGFyc2UiLCJqc29uU3RyIiwidW5kZWZpbmVkIiwiY3VyQXVkaW9MaXN0Iiwib25QbGF5Iiwib25TdG9wIiwib25QYXVzZSIsIm9uV2FpdGluZyIsInd4QXVkaW9VcGRhdGVQcm9jZXNzIiwib25FbmRlZCIsIm9uVGltZVVwZGF0ZSIsImF1ZGlvIiwidGl0bGUiLCJhdXRvcGxheSIsInNyYyIsImF1ZGlvTmFtZSIsInRvdGFsRHVyYXRpb25GaWx0ZXIiLCJwbGF5TGVuZ3RoIiwicmVwbGFjZSIsIm1pbnV0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJz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LEdBQWpELENBRFI7QUFFQSxVQUFVRixNQUFWLFNBQW9CRyxHQUFwQjtBQUNBOzs7eUNBRXNCO0FBQ3RCLFFBQUs3RCxVQUFMLEdBQWtCdUIsT0FBT0MsUUFBUCxDQUFnQixLQUFLbkIsVUFBTCxDQUFnQlUsbUJBQWhCLENBQW9DTyxXQUFwQyxHQUFrRCxHQUFsRCxHQUF3RCxLQUFLakIsVUFBTCxDQUFnQlUsbUJBQWhCLENBQW9DK0MsUUFBNUcsQ0FBbEI7QUFDQSxRQUFLN0QsT0FBTCxHQUFlLEtBQUs4RCxjQUFMLENBQW9CLEtBQUsxRCxVQUFMLENBQWdCVSxtQkFBaEIsQ0FBb0NPLFdBQXhELENBQWY7QUFDQSxRQUFLMEMsTUFBTDtBQUNBOzs7O0VBdElxQyxlQUFLQyxJOztrQkFBdkIxRSxTIiwiZmlsZSI6InJhZGlvX3BsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9hcGkvYXBpJ1xyXG5cclxuaW1wb3J0IHtBVURJT19QQVRILCBDVVJSRU5UX0FVRElPfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvUGxheSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiMzMzJEMkRcIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLmraPlnKjmkq3mlL5cIixcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogXCJ3aGl0ZVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMkQyRFwiXHJcblx0fVxyXG5cdFxyXG5cdGRhdGEgPSB7XHJcblx0XHRjdXJBdWRpbzp7fSxcclxuXHRcdG15QXVkaW86e30sXHJcblx0XHRjdXJQcm9jZXNzOiAwLFxyXG5cdFx0Y3VyVGltZTogJzAwOjAwJyxcclxuXHRcdHRvdGFsRHVyYXRpb246ICcwMDowMCcsXHJcblx0XHRhdWRpb0xpc3Q6IFtdLFxyXG5cdFx0cGxheUJ0blNyYzogJy4uLy4uL2ltYWdlcy9pY29uLXJ1bi5wbmcnLFxyXG5cdFx0Z2xvYmFsRGF0YToge31cclxuXHR9XHJcblxyXG5cdHdhdGNoID0ge1xyXG5cdFx0Y3VyQXVkaW8gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cdFx0XHR0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5jdXJBdWRpbyA9IG5ld1ZhbHVlXHJcblx0XHRcdGlmKG5ld1ZhbHVlID09PSB7fSl7XHJcblx0XHRcdFx0d2VweS5yZW1vdmVTdG9yYWdlU3luYyhDVVJSRU5UX0FVRElPKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0d2VweS5zZXRTdG9yYWdlU3luYyhDVVJSRU5UX0FVRElPLCBuZXdWYWx1ZSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gIH1cclxuXHJcblx0Y29tcHV0ZWQgPSB7XHJcblx0fVxyXG5cdFxyXG5cdG1ldGhvZHMgPSB7XHJcblx0XHRwbGF5QXVkaW8oKSB7XHJcblx0XHRcdGlmKHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LnBhdXNlZCl7XHJcblx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkucGxheSgpXHJcblx0XHRcdFx0dGhpcy5wbGF5QnRuU3JjID0gJy4uLy4uL2ltYWdlcy9pY29uLXBhdXNlLnBuZydcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkucGF1c2UoKVxyXG5cdFx0XHRcdHRoaXMucGxheUJ0blNyYyA9ICcuLi8uLi9pbWFnZXMvaWNvbi1ydW4ucG5nJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2Vlayh0aW1lKXtcclxuXHRcdFx0bGV0IHNlZWt0aW1lID0gdGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkuY3VycmVudFRpbWUgKyBOdW1iZXIucGFyc2VJbnQodGltZSlcclxuXHRcdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkuc2VlayhzZWVrdGltZSlcdFxyXG5cdFx0fSxcclxuXHRcdHR1cm5BdWRpbyhudW0pIHtcclxuXHRcdFx0bGV0IGN1ckluZGV4ID0gdGhpcy5hdWRpb0xpc3QuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIChpdGVtLnJhZGlvSWQgPT0gdGhpcy5jdXJBdWRpby5yYWRpb0lkKVxyXG5cdFx0XHR9KSArIE51bWJlci5wYXJzZUludChudW0pXHJcblx0XHRcdGlmKGN1ckluZGV4IDwgdGhpcy5hdWRpb0xpc3QubGVuZ3RoICYmIGN1ckluZGV4ID49IDApe1xyXG5cdFx0XHRcdHRoaXMuY3VyQXVkaW8gPSB0aGlzLmF1ZGlvTGlzdFtjdXJJbmRleF1cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmN1ckF1ZGlvID0gdGhpcy5hdWRpb0xpc3RbMF1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnd4QXVkaW9Db250cm9scyh0aGlzLmN1ckF1ZGlvKVxyXG5cdFx0XHR0aGlzLnd4QXVkaW9TZXRDb250ZXh0KHRoaXMuY3VyQXVkaW8pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkxvYWQob3B0aW9ucykge1xyXG5cdFx0dGhpcy5nbG9iYWxEYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGFcclxuXHRcdHRoaXMuY3VyQXVkaW8gPSBPYmplY3QuYXNzaWduKHt9LHRoaXMuZ2xvYmFsRGF0YS5jdXJBdWRpbylcclxuXHRcdHRoaXMud3hBdWRpb0luaXQoKVxyXG5cdFx0Ly/ojrflj5blvZPliY3pn7PpopHkv6Hmga9cclxuXHRcdGxldCBpdGVtID0gSlNPTi5wYXJzZShvcHRpb25zLmpzb25TdHIpXHJcblx0XHRpZihpdGVtLnJhZGlvSWQgIT09IHVuZGVmaW5lZCl7XHJcblx0XHRcdHRoaXMuY3VyQXVkaW8gPSBpdGVtXHJcblx0XHRcdC8v6I635Y+W6Z+z6aKR5YiX6KGo77yI55So5LqO5o6n5Yi25LiK5LiL6aaW6Lez6L2s77yJXHJcblx0XHRcdHRoaXMuYXVkaW9MaXN0ID0gdGhpcy5nbG9iYWxEYXRhLmN1ckF1ZGlvTGlzdFxyXG5cdFx0XHR0aGlzLnd4QXVkaW9Db250cm9scyh0aGlzLmN1ckF1ZGlvKVxyXG5cdFx0fVxyXG5cdFx0dGhpcy53eEF1ZGlvU2V0Q29udGV4dCh0aGlzLmN1ckF1ZGlvKVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHR3eEF1ZGlvSW5pdCgpe1xyXG5cdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkub25QbGF5KCgpID0+IHtcclxuXHRcdFx0dGhpcy5wbGF5QnRuU3JjID0gJy4uLy4uL2ltYWdlcy9pY29uLXBhdXNlLnBuZydcclxuXHRcdH0pXHJcblx0XHR0aGlzLmdsb2JhbERhdGEuYmFja2dyb3VuZEF1ZGlvUGxheS5vblN0b3AoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnBsYXlCdG5TcmMgPSAnLi4vLi4vaW1hZ2VzL2ljb24tcnVuLnBuZydcclxuXHRcdFx0dGhpcy5nbG9iYWxEYXRhLmN1ckF1ZGlvID0ge31cclxuXHRcdH0pXHJcblx0XHR0aGlzLmdsb2JhbERhdGEuYmFja2dyb3VuZEF1ZGlvUGxheS5vblBhdXNlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5wbGF5QnRuU3JjID0gJy4uLy4uL2ltYWdlcy9pY29uLXJ1bi5wbmcnXHJcblx0XHR9KVxyXG5cdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkub25XYWl0aW5nKCgpID0+IHtcclxuXHRcdFx0dGhpcy53eEF1ZGlvVXBkYXRlUHJvY2VzcygpXHJcblx0XHR9KVxyXG5cdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkub25FbmRlZCgoKSA9PiB7XHJcblx0XHRcdGxldCBjdXJJbmRleCA9IHRoaXMuYXVkaW9MaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAoaXRlbS5yYWRpb0lkID09IHRoaXMuY3VyQXVkaW8ucmFkaW9JZClcclxuXHRcdFx0fSkgKyAxXHJcblx0XHRcdGlmKGN1ckluZGV4ID49IHRoaXMuYXVkaW9MaXN0Lmxlbmd0aCl7XHJcblx0XHRcdFx0dGhpcy5jdXJBdWRpbyA9IHRoaXMuYXVkaW9MaXN0WzBdXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuY3VyQXVkaW8gPSB0aGlzLmF1ZGlvTGlzdFtjdXJJbmRleF1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnd4QXVkaW9Db250cm9scyh0aGlzLmN1ckF1ZGlvKVxyXG5cdFx0XHR0aGlzLnd4QXVkaW9TZXRDb250ZXh0KHRoaXMuY3VyQXVkaW8pXHJcblx0XHR9KVxyXG5cdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkub25UaW1lVXBkYXRlKCgpID0+IHtcclxuXHRcdFx0dGhpcy53eEF1ZGlvVXBkYXRlUHJvY2VzcygpXHJcblx0XHR9KVxyXG4gIH1cclxuXHJcbiAgd3hBdWRpb0NvbnRyb2xzKGF1ZGlvKSB7XHJcbiAgICB0aGlzLmdsb2JhbERhdGEuYmFja2dyb3VuZEF1ZGlvUGxheS50aXRsZSA9IGF1ZGlvLnRpdGxlXHJcblx0XHR0aGlzLmdsb2JhbERhdGEuYmFja2dyb3VuZEF1ZGlvUGxheS5hdXRvcGxheSA9IHRydWVcclxuXHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LnNyYyA9IEFVRElPX1BBVEggKyBhdWRpby5hdWRpb05hbWVcclxuXHR9XHJcblxyXG5cdHd4QXVkaW9TZXRDb250ZXh0KGF1ZGlvKSB7XHJcblx0XHR0aGlzLnRvdGFsRHVyYXRpb24gPSB0aGlzLnRvdGFsRHVyYXRpb25GaWx0ZXIoYXVkaW8ucGxheUxlbmd0aClcclxuXHRcdHRoaXMucGxheUJ0blNyYyA9IHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LnBhdXNlZCA/ICcuLi8uLi9pbWFnZXMvaWNvbi1ydW4ucG5nJyA6ICcuLi8uLi9pbWFnZXMvaWNvbi1wYXVzZS5wbmcnXHJcblx0fVxyXG5cclxuICB0b3RhbER1cmF0aW9uRmlsdGVyKHRpbWUpe1xyXG5cdFx0cmV0dXJuIHRpbWUucmVwbGFjZSgn5YiGJywnOicpLnJlcGxhY2UoJ+enkicsJycpXHJcblx0fVxyXG5cclxuICBkdXJhdGlvbkZpbHRlcih0aW1lKXtcclxuXHRcdGxldCBtaW51dGUgPSBOdW1iZXIucGFyc2VJbnQodGltZSAvIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsJzAnKSwgXHJcblx0XHRcdFx0c2VjID0gTnVtYmVyLnBhcnNlSW50KHRpbWUgJSA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCcwJylcclxuXHRcdHJldHVybiBgJHttaW51dGV9OiR7c2VjfWBcclxuXHR9XHJcblxyXG5cdHd4QXVkaW9VcGRhdGVQcm9jZXNzKCkge1xyXG5cdFx0dGhpcy5jdXJQcm9jZXNzID0gTnVtYmVyLnBhcnNlSW50KHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LmN1cnJlbnRUaW1lICogMTAwIC8gdGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkuZHVyYXRpb24pXHJcblx0XHR0aGlzLmN1clRpbWUgPSB0aGlzLmR1cmF0aW9uRmlsdGVyKHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LmN1cnJlbnRUaW1lKVxyXG5cdFx0dGhpcy4kYXBwbHkoKVxyXG5cdH1cclxufVxyXG4iXX0=