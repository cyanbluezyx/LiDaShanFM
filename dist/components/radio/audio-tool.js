'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioTool = function (_wepy$component) {
	_inherits(AudioTool, _wepy$component);

	function AudioTool() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, AudioTool);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AudioTool.__proto__ || Object.getPrototypeOf(AudioTool)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
			list: {
				type: Object,
				default: []
			},
			audio: {
				type: Object,
				default: [],
				twoWay: true
			},
			isPlay: {
				type: Boolean,
				default: false,
				twoWay: true
			}
		}, _this.data = {
			playBtnSrc: ''
		}, _this.watch = {
			isPlay: function isPlay(newValue, oldValue) {
				this.playBtnSrc = this.isPlay ? '../images/icon-tool-pause.png' : '../images/icon-tool-run.png';
				this.$apply();
			}
		}, _this.methods = {
			next: function next(num) {
				var _this2 = this;

				var audioList = this.$root.$parent.globalData.curAudioList;
				var audioPlayer = this.$root.$parent.globalData.backgroundAudioPlay;
				var curIndex = audioList.findIndex(function (item) {
					return item.radioId == _this2.audio.radioId;
				}) + Number.parseInt(num);
				if (curIndex < audioList.length && curIndex >= 0) {
					audioPlayer.src = _constant.AUDIO_PATH + audioList[curIndex].audioName;
					this.audio = audioList[curIndex];
				} else {
					audioPlayer.src = _constant.AUDIO_PATH + audioList[0].audioName;
					this.audio = audioList[0];
				}
				audioPlayer.autoplay = true;
				audioPlayer.title = this.audio.title;
				this.$root.$parent.globalData.backgroundAudioPlay = audioPlayer;
				this.$root.$parent.globalData.curAudio = this.audio;
				this.playBtnSrc = '../images/icon-tool-pause.png';
				wx.setStorageSync(_constant.CURRENT_AUDIO, this.audio);
			},
			playAudio: function playAudio() {
				var audioPlayer = this.$root.$parent.globalData.backgroundAudioPlay;
				if (audioPlayer.paused === undefined) {
					audioPlayer.src = _constant.AUDIO_PATH + this.audio.audioName;
					this.playBtnSrc = '../images/icon-tool-pause.png';
				} else if (audioPlayer.paused) {
					audioPlayer.src = _constant.AUDIO_PATH + this.audio.audioName;
					audioPlayer.play();
					this.playBtnSrc = '../images/icon-tool-pause.png';
				} else {
					audioPlayer.pause();
					this.playBtnSrc = '../images/icon-tool-run.png';
				}
				this.$root.$parent.globalData.backgroundAudioPlay = audioPlayer;
			},
			navigateTo: function navigateTo() {
				_wepy2.default.navigateTo({
					url: '/pages/radio/radio_play?jsonStr={}' //?jsonStr=' + JSON.stringify(this.audio)
				});
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(AudioTool, [{
		key: 'onLoad',
		value: function onLoad() {
			this.setIcon();
		}
	}, {
		key: 'setIcon',
		value: function setIcon() {
			//console.log(this.isPlay)
			this.playBtnSrc = this.isPlay ? '../images/icon-tool-pause.png' : '../images/icon-tool-run.png';
		}
	}]);

	return AudioTool;
}(_wepy2.default.component);

exports.default = AudioTool;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvLXRvb2wuanMiXSwibmFtZXMiOlsiQXVkaW9Ub29sIiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJhdWRpbyIsInR3b1dheSIsImlzUGxheSIsIkJvb2xlYW4iLCJkYXRhIiwicGxheUJ0blNyYyIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIiRhcHBseSIsIm1ldGhvZHMiLCJuZXh0IiwibnVtIiwiYXVkaW9MaXN0IiwiJHJvb3QiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImN1ckF1ZGlvTGlzdCIsImF1ZGlvUGxheWVyIiwiYmFja2dyb3VuZEF1ZGlvUGxheSIsImN1ckluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsInJhZGlvSWQiLCJOdW1iZXIiLCJwYXJzZUludCIsImxlbmd0aCIsInNyYyIsImF1ZGlvTmFtZSIsImF1dG9wbGF5IiwidGl0bGUiLCJjdXJBdWRpbyIsInd4Iiwic2V0U3RvcmFnZVN5bmMiLCJwbGF5QXVkaW8iLCJwYXVzZWQiLCJ1bmRlZmluZWQiLCJwbGF5IiwicGF1c2UiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2V0SWNvbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7MExBQ3BCQyxLLEdBQVE7QUFDUEMsU0FBTTtBQUNMQyxVQUFNQyxNQUREO0FBRUxDLGFBQVM7QUFGSixJQURDO0FBS1BDLFVBQU87QUFDTkgsVUFBTUMsTUFEQTtBQUVOQyxhQUFTLEVBRkg7QUFHTkUsWUFBUTtBQUhGLElBTEE7QUFVUEMsV0FBUTtBQUNQTCxVQUFNTSxPQURDO0FBRVBKLGFBQVMsS0FGRjtBQUdQRSxZQUFRO0FBSEQ7QUFWRCxHLFFBaUJSRyxJLEdBQU87QUFDTkMsZUFBWTtBQUROLEcsUUFJUEMsSyxHQUFRO0FBQ1BKLFNBRE8sa0JBQ0FLLFFBREEsRUFDVUMsUUFEVixFQUNvQjtBQUMxQixTQUFLSCxVQUFMLEdBQWtCLEtBQUtILE1BQUwsR0FBYywrQkFBZCxHQUFnRCw2QkFBbEU7QUFDQSxTQUFLTyxNQUFMO0FBQ0E7QUFKTSxHLFFBV1JDLE8sR0FBVTtBQUNUQyxPQURTLGdCQUNKQyxHQURJLEVBQ0M7QUFBQTs7QUFDVCxRQUFJQyxZQUFZLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsVUFBbkIsQ0FBOEJDLFlBQTlDO0FBQ0EsUUFBSUMsY0FBYyxLQUFLSixLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLFVBQW5CLENBQThCRyxtQkFBaEQ7QUFDQSxRQUFJQyxXQUFXUCxVQUFVUSxTQUFWLENBQW9CLFVBQUNDLElBQUQsRUFBVTtBQUM1QyxZQUFRQSxLQUFLQyxPQUFMLElBQWdCLE9BQUt2QixLQUFMLENBQVd1QixPQUFuQztBQUNBLEtBRmMsSUFFVkMsT0FBT0MsUUFBUCxDQUFnQmIsR0FBaEIsQ0FGTDtBQUdBLFFBQUdRLFdBQVdQLFVBQVVhLE1BQXJCLElBQStCTixZQUFZLENBQTlDLEVBQWdEO0FBQy9DRixpQkFBWVMsR0FBWixHQUFrQix1QkFBYWQsVUFBVU8sUUFBVixFQUFvQlEsU0FBbkQ7QUFDQSxVQUFLNUIsS0FBTCxHQUFhYSxVQUFVTyxRQUFWLENBQWI7QUFDQSxLQUhELE1BR0s7QUFDSkYsaUJBQVlTLEdBQVosR0FBa0IsdUJBQWFkLFVBQVUsQ0FBVixFQUFhZSxTQUE1QztBQUNBLFVBQUs1QixLQUFMLEdBQWFhLFVBQVUsQ0FBVixDQUFiO0FBQ0E7QUFDREssZ0JBQVlXLFFBQVosR0FBdUIsSUFBdkI7QUFDQVgsZ0JBQVlZLEtBQVosR0FBb0IsS0FBSzlCLEtBQUwsQ0FBVzhCLEtBQS9CO0FBQ0EsU0FBS2hCLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsVUFBbkIsQ0FBOEJHLG1CQUE5QixHQUFvREQsV0FBcEQ7QUFDQSxTQUFLSixLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLFVBQW5CLENBQThCZSxRQUE5QixHQUF5QyxLQUFLL0IsS0FBOUM7QUFDQSxTQUFLSyxVQUFMLEdBQWtCLCtCQUFsQjtBQUNBMkIsT0FBR0MsY0FBSCwwQkFBZ0MsS0FBS2pDLEtBQXJDO0FBQ0EsSUFwQlE7QUFxQlRrQyxZQXJCUyx1QkFxQkc7QUFDWCxRQUFJaEIsY0FBYyxLQUFLSixLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLFVBQW5CLENBQThCRyxtQkFBaEQ7QUFDQSxRQUFHRCxZQUFZaUIsTUFBWixLQUF1QkMsU0FBMUIsRUFBb0M7QUFDbkNsQixpQkFBWVMsR0FBWixHQUFrQix1QkFBYSxLQUFLM0IsS0FBTCxDQUFXNEIsU0FBMUM7QUFDQSxVQUFLdkIsVUFBTCxHQUFrQiwrQkFBbEI7QUFDQSxLQUhELE1BR00sSUFBR2EsWUFBWWlCLE1BQWYsRUFBc0I7QUFDM0JqQixpQkFBWVMsR0FBWixHQUFrQix1QkFBYSxLQUFLM0IsS0FBTCxDQUFXNEIsU0FBMUM7QUFDQVYsaUJBQVltQixJQUFaO0FBQ0EsVUFBS2hDLFVBQUwsR0FBa0IsK0JBQWxCO0FBQ0EsS0FKSyxNQUlEO0FBQ0phLGlCQUFZb0IsS0FBWjtBQUNBLFVBQUtqQyxVQUFMLEdBQWtCLDZCQUFsQjtBQUNBO0FBQ0QsU0FBS1MsS0FBTCxDQUFXQyxPQUFYLENBQW1CQyxVQUFuQixDQUE4QkcsbUJBQTlCLEdBQW9ERCxXQUFwRDtBQUNBLElBbkNRO0FBb0NUcUIsYUFwQ1Msd0JBb0NJO0FBQ1osbUJBQUtBLFVBQUwsQ0FBZ0I7QUFDZkMsVUFBSyxvQ0FEVSxDQUMwQjtBQUQxQixLQUFoQjtBQUdBO0FBeENRLEc7Ozs7OzJCQUpEO0FBQ1IsUUFBS0MsT0FBTDtBQUNBOzs7NEJBNkNTO0FBQ1Q7QUFDQSxRQUFLcEMsVUFBTCxHQUFrQixLQUFLSCxNQUFMLEdBQWMsK0JBQWQsR0FBZ0QsNkJBQWxFO0FBQ0E7Ozs7RUEvRXFDLGVBQUt3QyxTOztrQkFBdkJoRCxTIiwiZmlsZSI6ImF1ZGlvLXRvb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmltcG9ydCB7QVVESU9fUEFUSCxDVVJSRU5UX0FVRElPfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvVG9vbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHRwcm9wcyA9IHtcclxuXHRcdGxpc3Q6IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0OiBbXVxyXG5cdFx0fSxcclxuXHRcdGF1ZGlvOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR3b1dheTogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdGlzUGxheToge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcclxuXHRcdFx0dHdvV2F5OiB0cnVlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkYXRhID0ge1xyXG5cdFx0cGxheUJ0blNyYzogJydcclxuXHR9XHJcblxyXG5cdHdhdGNoID0ge1xyXG5cdFx0aXNQbGF5KG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cdFx0XHR0aGlzLnBsYXlCdG5TcmMgPSB0aGlzLmlzUGxheSA/ICcuLi9pbWFnZXMvaWNvbi10b29sLXBhdXNlLnBuZycgOiAnLi4vaW1hZ2VzL2ljb24tdG9vbC1ydW4ucG5nJ1xyXG5cdFx0XHR0aGlzLiRhcHBseSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHR0aGlzLnNldEljb24oKVxyXG5cdH1cclxuXHJcblx0bWV0aG9kcyA9IHtcclxuXHRcdG5leHQobnVtKSB7XHJcblx0XHRcdGxldCBhdWRpb0xpc3QgPSB0aGlzLiRyb290LiRwYXJlbnQuZ2xvYmFsRGF0YS5jdXJBdWRpb0xpc3RcclxuXHRcdFx0bGV0IGF1ZGlvUGxheWVyID0gdGhpcy4kcm9vdC4kcGFyZW50Lmdsb2JhbERhdGEuYmFja2dyb3VuZEF1ZGlvUGxheVxyXG5cdFx0XHRsZXQgY3VySW5kZXggPSBhdWRpb0xpc3QuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIChpdGVtLnJhZGlvSWQgPT0gdGhpcy5hdWRpby5yYWRpb0lkKVxyXG5cdFx0XHR9KSArIE51bWJlci5wYXJzZUludChudW0pXHJcblx0XHRcdGlmKGN1ckluZGV4IDwgYXVkaW9MaXN0Lmxlbmd0aCAmJiBjdXJJbmRleCA+PSAwKXtcclxuXHRcdFx0XHRhdWRpb1BsYXllci5zcmMgPSBBVURJT19QQVRIICsgYXVkaW9MaXN0W2N1ckluZGV4XS5hdWRpb05hbWVcclxuXHRcdFx0XHR0aGlzLmF1ZGlvID0gYXVkaW9MaXN0W2N1ckluZGV4XVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRhdWRpb1BsYXllci5zcmMgPSBBVURJT19QQVRIICsgYXVkaW9MaXN0WzBdLmF1ZGlvTmFtZVxyXG5cdFx0XHRcdHRoaXMuYXVkaW8gPSBhdWRpb0xpc3RbMF1cclxuXHRcdFx0fVxyXG5cdFx0XHRhdWRpb1BsYXllci5hdXRvcGxheSA9IHRydWVcclxuXHRcdFx0YXVkaW9QbGF5ZXIudGl0bGUgPSB0aGlzLmF1ZGlvLnRpdGxlXHJcblx0XHRcdHRoaXMuJHJvb3QuJHBhcmVudC5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkgPSBhdWRpb1BsYXllclxyXG5cdFx0XHR0aGlzLiRyb290LiRwYXJlbnQuZ2xvYmFsRGF0YS5jdXJBdWRpbyA9IHRoaXMuYXVkaW9cclxuXHRcdFx0dGhpcy5wbGF5QnRuU3JjID0gJy4uL2ltYWdlcy9pY29uLXRvb2wtcGF1c2UucG5nJ1xyXG5cdFx0XHR3eC5zZXRTdG9yYWdlU3luYyhDVVJSRU5UX0FVRElPLHRoaXMuYXVkaW8pXHJcblx0XHR9LFxyXG5cdFx0cGxheUF1ZGlvKCkge1xyXG5cdFx0XHRsZXQgYXVkaW9QbGF5ZXIgPSB0aGlzLiRyb290LiRwYXJlbnQuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5XHJcblx0XHRcdGlmKGF1ZGlvUGxheWVyLnBhdXNlZCA9PT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0XHRhdWRpb1BsYXllci5zcmMgPSBBVURJT19QQVRIICsgdGhpcy5hdWRpby5hdWRpb05hbWVcclxuXHRcdFx0XHR0aGlzLnBsYXlCdG5TcmMgPSAnLi4vaW1hZ2VzL2ljb24tdG9vbC1wYXVzZS5wbmcnXHJcblx0XHRcdH1lbHNlIGlmKGF1ZGlvUGxheWVyLnBhdXNlZCl7XHJcblx0XHRcdFx0YXVkaW9QbGF5ZXIuc3JjID0gQVVESU9fUEFUSCArIHRoaXMuYXVkaW8uYXVkaW9OYW1lXHJcblx0XHRcdFx0YXVkaW9QbGF5ZXIucGxheSgpXHJcblx0XHRcdFx0dGhpcy5wbGF5QnRuU3JjID0gJy4uL2ltYWdlcy9pY29uLXRvb2wtcGF1c2UucG5nJ1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRhdWRpb1BsYXllci5wYXVzZSgpXHJcblx0XHRcdFx0dGhpcy5wbGF5QnRuU3JjID0gJy4uL2ltYWdlcy9pY29uLXRvb2wtcnVuLnBuZydcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLiRyb290LiRwYXJlbnQuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5ID0gYXVkaW9QbGF5ZXJcclxuXHRcdH0sXHJcblx0XHRuYXZpZ2F0ZVRvKCkge1xyXG5cdFx0XHR3ZXB5Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9yYWRpby9yYWRpb19wbGF5P2pzb25TdHI9e30nLy8/anNvblN0cj0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5hdWRpbylcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldEljb24oKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMuaXNQbGF5KVxyXG5cdFx0dGhpcy5wbGF5QnRuU3JjID0gdGhpcy5pc1BsYXkgPyAnLi4vaW1hZ2VzL2ljb24tdG9vbC1wYXVzZS5wbmcnIDogJy4uL2ltYWdlcy9pY29uLXRvb2wtcnVuLnBuZydcclxuXHR9XHJcbn1cclxuIl19