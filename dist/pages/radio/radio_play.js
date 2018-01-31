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
			this.curAudio = this.globalData.curAudio;
			this.audioList = this.globalData.curAudioList;
			this.wxAudioInit();
			//获取当前音频信息
			var item = JSON.parse(options.jsonStr);
			if (item.radioId === this.curAudio.radioId && this.globalData.backgroundAudioPlay.src !== undefined) {} else {
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
			_api2.default.addPlayCount({
				method: 'POST',
				query: {
					audioId: audio.radioId
				}
			});
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
			return time ? minute + ':' + sec : '00:00';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvX3BsYXkuanMiXSwibmFtZXMiOlsiUmFkaW9QbGF5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsImN1ckF1ZGlvIiwibXlBdWRpbyIsImN1clByb2Nlc3MiLCJjdXJUaW1lIiwidG90YWxEdXJhdGlvbiIsImF1ZGlvTGlzdCIsInBsYXlCdG5TcmMiLCJnbG9iYWxEYXRhIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiJHBhcmVudCIsInJlbW92ZVN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJwbGF5QXVkaW8iLCJiYWNrZ3JvdW5kQXVkaW9QbGF5IiwicGF1c2VkIiwicGxheSIsInBhdXNlIiwic2VlayIsInRpbWUiLCJzZWVrdGltZSIsImN1cnJlbnRUaW1lIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJ0dXJuQXVkaW8iLCJudW0iLCJjdXJJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJyYWRpb0lkIiwibGVuZ3RoIiwid3hBdWRpb0NvbnRyb2xzIiwid3hBdWRpb1NldENvbnRleHQiLCJvcHRpb25zIiwiY3VyQXVkaW9MaXN0Iiwid3hBdWRpb0luaXQiLCJKU09OIiwicGFyc2UiLCJqc29uU3RyIiwic3JjIiwidW5kZWZpbmVkIiwib25QbGF5Iiwib25TdG9wIiwib25QYXVzZSIsIm9uV2FpdGluZyIsInd4QXVkaW9VcGRhdGVQcm9jZXNzIiwib25FbmRlZCIsIm9uVGltZVVwZGF0ZSIsImF1ZGlvIiwiYWRkUGxheUNvdW50IiwibWV0aG9kIiwicXVlcnkiLCJhdWRpb0lkIiwidGl0bGUiLCJhdXRvcGxheSIsImF1ZGlvTmFtZSIsInRvdGFsRHVyYXRpb25GaWx0ZXIiLCJwbGF5TGVuZ3RoIiwicmVwbGFjZSIsIm1pbnV0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJzZWMiLCJkdXJhdGlvbiIsImR1cmF0aW9uRmlsdGVyIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNMQyxpQ0FBOEIsU0FEekI7QUFFTEMsMkJBQXdCLE1BRm5CO0FBR0xDLDJCQUF3QixPQUhuQjtBQUlMQyxvQkFBaUI7QUFKWixHLFFBT1ZDLEksR0FBTztBQUNOQyxhQUFTLEVBREg7QUFFTkMsWUFBUSxFQUZGO0FBR05DLGVBQVksQ0FITjtBQUlOQyxZQUFTLE9BSkg7QUFLTkMsa0JBQWUsT0FMVDtBQU1OQyxjQUFXLEVBTkw7QUFPTkMsZUFBWSwyQkFQTjtBQVFOQyxlQUFZO0FBUk4sRyxRQVdQQyxLLEdBQVE7QUFDUFIsV0FETyxvQkFDR1MsUUFESCxFQUNhQyxRQURiLEVBQ3VCO0FBQzdCLFNBQUtDLE9BQUwsQ0FBYUosVUFBYixDQUF3QlAsUUFBeEIsR0FBbUNTLFFBQW5DO0FBQ0EsUUFBR0EsYUFBYSxFQUFoQixFQUFtQjtBQUNsQixvQkFBS0csaUJBQUw7QUFDQSxLQUZELE1BR0k7QUFDSCxvQkFBS0MsY0FBTCwwQkFBbUNKLFFBQW5DO0FBQ0E7QUFDRDtBQVRNLEcsUUFZUkssUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1RDLFlBRFMsdUJBQ0c7QUFDWCxRQUFHLEtBQUtULFVBQUwsQ0FBZ0JVLG1CQUFoQixDQUFvQ0MsTUFBdkMsRUFBOEM7QUFDN0MsVUFBS1gsVUFBTCxDQUFnQlUsbUJBQWhCLENBQW9DRSxJQUFwQztBQUNBLFVBQUtiLFVBQUwsR0FBa0IsNkJBQWxCO0FBQ0EsS0FIRCxNQUdLO0FBQ0osVUFBS0MsVUFBTCxDQUFnQlUsbUJBQWhCLENBQW9DRyxLQUFwQztBQUNBLFVBQUtkLFVBQUwsR0FBa0IsMkJBQWxCO0FBQ0E7QUFDRCxJQVRRO0FBVVRlLE9BVlMsZ0JBVUpDLElBVkksRUFV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OztpQ0FFZXZDLEksRUFBSztBQUNwQixPQUFJd0MsU0FBU3JDLE9BQU9DLFFBQVAsQ0FBZ0JKLE9BQU8sRUFBdkIsRUFBMkJ5QyxRQUEzQixHQUFzQ0MsUUFBdEMsQ0FBK0MsQ0FBL0MsRUFBaUQsR0FBakQsQ0FBYjtBQUFBLE9BQ0VDLE1BQU14QyxPQUFPQyxRQUFQLENBQWdCSixPQUFPLEVBQXZCLEVBQTJCeUMsUUFBM0IsR0FBc0NDLFFBQXRDLENBQStDLENBQS9DLEVBQWlELEdBQWpELENBRFI7QUFFQSxVQUFPMUMsT0FBVXdDLE1BQVYsU0FBb0JHLEdBQXBCLFVBQVA7QUFDQTs7O3lDQUVzQjtBQUN0QixRQUFLL0QsVUFBTCxHQUFrQnVCLE9BQU9DLFFBQVAsQ0FBZ0IsS0FBS25CLFVBQUwsQ0FBZ0JVLG1CQUFoQixDQUFvQ08sV0FBcEMsR0FBa0QsR0FBbEQsR0FBd0QsS0FBS2pCLFVBQUwsQ0FBZ0JVLG1CQUFoQixDQUFvQ2lELFFBQTVHLENBQWxCO0FBQ0EsUUFBSy9ELE9BQUwsR0FBZSxLQUFLZ0UsY0FBTCxDQUFvQixLQUFLNUQsVUFBTCxDQUFnQlUsbUJBQWhCLENBQW9DTyxXQUF4RCxDQUFmO0FBQ0EsUUFBSzRDLE1BQUw7QUFDQTs7OztFQTlJcUMsZUFBS0MsSTs7a0JBQXZCNUUsUyIsImZpbGUiOiJyYWRpb19wbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSdcclxuXHJcbmltcG9ydCB7QVVESU9fUEFUSCwgQ1VSUkVOVF9BVURJT30gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb1BsYXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogXCIjMzMyRDJEXCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5q2j5Zyo5pKt5pS+XCIsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6IFwid2hpdGVcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzJEMkRcIlxyXG5cdH1cclxuXHRcclxuXHRkYXRhID0ge1xyXG5cdFx0Y3VyQXVkaW86e30sXHJcblx0XHRteUF1ZGlvOnt9LFxyXG5cdFx0Y3VyUHJvY2VzczogMCxcclxuXHRcdGN1clRpbWU6ICcwMDowMCcsXHJcblx0XHR0b3RhbER1cmF0aW9uOiAnMDA6MDAnLFxyXG5cdFx0YXVkaW9MaXN0OiBbXSxcclxuXHRcdHBsYXlCdG5TcmM6ICcuLi8uLi9pbWFnZXMvaWNvbi1ydW4ucG5nJyxcclxuXHRcdGdsb2JhbERhdGE6IHt9XHJcblx0fVxyXG5cclxuXHR3YXRjaCA9IHtcclxuXHRcdGN1ckF1ZGlvIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHRcdFx0dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuY3VyQXVkaW8gPSBuZXdWYWx1ZVxyXG5cdFx0XHRpZihuZXdWYWx1ZSA9PT0ge30pe1xyXG5cdFx0XHRcdHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoQ1VSUkVOVF9BVURJTylcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHdlcHkuc2V0U3RvcmFnZVN5bmMoQ1VSUkVOVF9BVURJTywgbmV3VmFsdWUpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuICB9XHJcblxyXG5cdGNvbXB1dGVkID0ge1xyXG5cdH1cclxuXHRcclxuXHRtZXRob2RzID0ge1xyXG5cdFx0cGxheUF1ZGlvKCkge1xyXG5cdFx0XHRpZih0aGlzLmdsb2JhbERhdGEuYmFja2dyb3VuZEF1ZGlvUGxheS5wYXVzZWQpe1xyXG5cdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LnBsYXkoKVxyXG5cdFx0XHRcdHRoaXMucGxheUJ0blNyYyA9ICcuLi8uLi9pbWFnZXMvaWNvbi1wYXVzZS5wbmcnXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LnBhdXNlKClcclxuXHRcdFx0XHR0aGlzLnBsYXlCdG5TcmMgPSAnLi4vLi4vaW1hZ2VzL2ljb24tcnVuLnBuZydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHNlZWsodGltZSl7XHJcblx0XHRcdGxldCBzZWVrdGltZSA9IHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LmN1cnJlbnRUaW1lICsgTnVtYmVyLnBhcnNlSW50KHRpbWUpXHJcblx0XHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LnNlZWsoc2Vla3RpbWUpXHRcclxuXHRcdH0sXHJcblx0XHR0dXJuQXVkaW8obnVtKSB7XHJcblx0XHRcdGxldCBjdXJJbmRleCA9IHRoaXMuYXVkaW9MaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAoaXRlbS5yYWRpb0lkID09IHRoaXMuY3VyQXVkaW8ucmFkaW9JZClcclxuXHRcdFx0fSkgKyBOdW1iZXIucGFyc2VJbnQobnVtKVxyXG5cdFx0XHRpZihjdXJJbmRleCA8IHRoaXMuYXVkaW9MaXN0Lmxlbmd0aCAmJiBjdXJJbmRleCA+PSAwKXtcclxuXHRcdFx0XHR0aGlzLmN1ckF1ZGlvID0gdGhpcy5hdWRpb0xpc3RbY3VySW5kZXhdXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJBdWRpbyA9IHRoaXMuYXVkaW9MaXN0WzBdXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy53eEF1ZGlvQ29udHJvbHModGhpcy5jdXJBdWRpbylcclxuXHRcdFx0dGhpcy53eEF1ZGlvU2V0Q29udGV4dCh0aGlzLmN1ckF1ZGlvKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25Mb2FkKG9wdGlvbnMpIHtcclxuXHRcdHRoaXMuZ2xvYmFsRGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhXHJcblx0XHR0aGlzLmN1ckF1ZGlvID0gdGhpcy5nbG9iYWxEYXRhLmN1ckF1ZGlvXHJcblx0XHR0aGlzLmF1ZGlvTGlzdCA9IHRoaXMuZ2xvYmFsRGF0YS5jdXJBdWRpb0xpc3RcclxuXHRcdHRoaXMud3hBdWRpb0luaXQoKVxyXG5cdFx0Ly/ojrflj5blvZPliY3pn7PpopHkv6Hmga9cclxuXHRcdGxldCBpdGVtID0gSlNPTi5wYXJzZShvcHRpb25zLmpzb25TdHIpXHJcblx0XHRpZihpdGVtLnJhZGlvSWQgPT09IHRoaXMuY3VyQXVkaW8ucmFkaW9JZCAmJiB0aGlzLmdsb2JhbERhdGEuYmFja2dyb3VuZEF1ZGlvUGxheS5zcmMgIT09IHVuZGVmaW5lZCl7XHJcblx0XHRcdFxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuY3VyQXVkaW8gPSBpdGVtXHJcblx0XHRcdC8v6I635Y+W6Z+z6aKR5YiX6KGo77yI55So5LqO5o6n5Yi25LiK5LiL6aaW6Lez6L2s77yJXHJcblx0XHRcdHRoaXMuYXVkaW9MaXN0ID0gdGhpcy5nbG9iYWxEYXRhLmN1ckF1ZGlvTGlzdFxyXG5cdFx0XHR0aGlzLnd4QXVkaW9Db250cm9scyh0aGlzLmN1ckF1ZGlvKVxyXG5cdFx0fVxyXG5cdFx0dGhpcy53eEF1ZGlvU2V0Q29udGV4dCh0aGlzLmN1ckF1ZGlvKVxyXG5cdH1cclxuXHJcblx0d3hBdWRpb0luaXQoKXtcclxuXHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5Lm9uUGxheSgoKSA9PiB7XHJcblx0XHRcdHRoaXMucGxheUJ0blNyYyA9ICcuLi8uLi9pbWFnZXMvaWNvbi1wYXVzZS5wbmcnXHJcblx0XHR9KVxyXG5cdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkub25TdG9wKCgpID0+IHtcclxuXHRcdFx0dGhpcy5wbGF5QnRuU3JjID0gJy4uLy4uL2ltYWdlcy9pY29uLXJ1bi5wbmcnXHJcblx0XHRcdHRoaXMuZ2xvYmFsRGF0YS5jdXJBdWRpbyA9IHt9XHJcblx0XHR9KVxyXG5cdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkub25QYXVzZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMucGxheUJ0blNyYyA9ICcuLi8uLi9pbWFnZXMvaWNvbi1ydW4ucG5nJ1xyXG5cdFx0fSlcclxuXHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5Lm9uV2FpdGluZygoKSA9PiB7XHJcblx0XHRcdHRoaXMud3hBdWRpb1VwZGF0ZVByb2Nlc3MoKVxyXG5cdFx0fSlcclxuXHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5Lm9uRW5kZWQoKCkgPT4ge1xyXG5cdFx0XHRsZXQgY3VySW5kZXggPSB0aGlzLmF1ZGlvTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKGl0ZW0ucmFkaW9JZCA9PSB0aGlzLmN1ckF1ZGlvLnJhZGlvSWQpXHJcblx0XHRcdH0pICsgMVxyXG5cdFx0XHRpZihjdXJJbmRleCA+PSB0aGlzLmF1ZGlvTGlzdC5sZW5ndGgpe1xyXG5cdFx0XHRcdHRoaXMuY3VyQXVkaW8gPSB0aGlzLmF1ZGlvTGlzdFswXVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLmN1ckF1ZGlvID0gdGhpcy5hdWRpb0xpc3RbY3VySW5kZXhdXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy53eEF1ZGlvQ29udHJvbHModGhpcy5jdXJBdWRpbylcclxuXHRcdFx0dGhpcy53eEF1ZGlvU2V0Q29udGV4dCh0aGlzLmN1ckF1ZGlvKVxyXG5cdFx0fSlcclxuXHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5Lm9uVGltZVVwZGF0ZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMud3hBdWRpb1VwZGF0ZVByb2Nlc3MoKVxyXG5cdFx0fSlcclxuICB9XHJcblxyXG4gIHd4QXVkaW9Db250cm9scyhhdWRpbykge1xyXG5cdFx0YXBpLmFkZFBsYXlDb3VudCh7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdGF1ZGlvSWQ6IGF1ZGlvLnJhZGlvSWRcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LnRpdGxlID0gYXVkaW8udGl0bGVcclxuXHRcdHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LmF1dG9wbGF5ID0gdHJ1ZVxyXG5cdFx0dGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkuc3JjID0gQVVESU9fUEFUSCArIGF1ZGlvLmF1ZGlvTmFtZVxyXG5cdH1cclxuXHJcblx0d3hBdWRpb1NldENvbnRleHQoYXVkaW8pIHtcclxuXHRcdHRoaXMudG90YWxEdXJhdGlvbiA9IHRoaXMudG90YWxEdXJhdGlvbkZpbHRlcihhdWRpby5wbGF5TGVuZ3RoKVxyXG5cdFx0dGhpcy5wbGF5QnRuU3JjID0gdGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkucGF1c2VkID8gJy4uLy4uL2ltYWdlcy9pY29uLXJ1bi5wbmcnIDogJy4uLy4uL2ltYWdlcy9pY29uLXBhdXNlLnBuZydcclxuXHR9XHJcblxyXG4gIHRvdGFsRHVyYXRpb25GaWx0ZXIodGltZSl7XHJcblx0XHRyZXR1cm4gdGltZS5yZXBsYWNlKCfliIYnLCc6JykucmVwbGFjZSgn56eSJywnJylcclxuXHR9XHJcblxyXG4gIGR1cmF0aW9uRmlsdGVyKHRpbWUpe1xyXG5cdFx0bGV0IG1pbnV0ZSA9IE51bWJlci5wYXJzZUludCh0aW1lIC8gNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwnMCcpLCBcclxuXHRcdFx0XHRzZWMgPSBOdW1iZXIucGFyc2VJbnQodGltZSAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsJzAnKVxyXG5cdFx0cmV0dXJuIHRpbWUgPyBgJHttaW51dGV9OiR7c2VjfWAgOiBgMDA6MDBgXHJcblx0fVxyXG5cclxuXHR3eEF1ZGlvVXBkYXRlUHJvY2VzcygpIHtcclxuXHRcdHRoaXMuY3VyUHJvY2VzcyA9IE51bWJlci5wYXJzZUludCh0aGlzLmdsb2JhbERhdGEuYmFja2dyb3VuZEF1ZGlvUGxheS5jdXJyZW50VGltZSAqIDEwMCAvIHRoaXMuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5LmR1cmF0aW9uKVxyXG5cdFx0dGhpcy5jdXJUaW1lID0gdGhpcy5kdXJhdGlvbkZpbHRlcih0aGlzLmdsb2JhbERhdGEuYmFja2dyb3VuZEF1ZGlvUGxheS5jdXJyZW50VGltZSlcclxuXHRcdHRoaXMuJGFwcGx5KClcclxuXHR9XHJcbn1cclxuIl19