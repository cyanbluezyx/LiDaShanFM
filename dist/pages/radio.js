'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

var _cover = require('./../components/radio/cover.js');

var _cover2 = _interopRequireDefault(_cover);

var _list = require('./../components/radio/list.js');

var _list2 = _interopRequireDefault(_list);

var _audioTool = require('./../components/radio/audio-tool.js');

var _audioTool2 = _interopRequireDefault(_audioTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_wepy$page) {
  _inherits(Radio, _wepy$page);

  function Radio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radio.__proto__ || Object.getPrototypeOf(Radio)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '李大山电台'
    }, _this.$repeat = {}, _this.$props = { "radioList": { "xmlns:v-bind": "", "v-bind:list.sync": "radioList", "v-bind:audio.sync": "curAudio" }, "radioTool": { "xmlns:wx": "", "class": "radio-tool", "xmlns:v-bind": "", "v-bind:list.sync": "radioList", "v-bind:audio.sync": "curAudio", "v-bind:isPlay.sync": "isPlay" } }, _this.$events = {}, _this.components = {
      radioCover: _cover2.default,
      radioList: _list2.default,
      radioTool: _audioTool2.default
    }, _this.data = {
      radioList: [],
      curAudio: {},
      isPlay: false,
      backgroundAudioPlay: {},
      audioListHeight: 0,
      audioListWidth: 0
    }, _this.computed = {
      isShowTool: function isShowTool() {
        return Object.keys(this.curAudio).length != 0;
      }
    }, _this.watch = {
      curAudio: function curAudio(newValue, oldValue) {
        this.$parent.globalData.curAudio = newValue;
        if (newValue === {}) {
          _wepy2.default.removeStorageSync(_constant.CURRENT_AUDIO);
        } else {
          _wepy2.default.setStorageSync(_constant.CURRENT_AUDIO, newValue);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Radio, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      var that = this;
      var d = that.$parent.globalData;

      d.backgroundAudioPlay = wx.getBackgroundAudioManager();
      this.backgroundAudioPlay = d.backgroundAudioPlay;

      _api2.default.getAudioList({
        query: {
          author: '李大山'
        }
      }).then(function (resp) {
        d.curAudioList = resp.data.result;
        that.radioList = d.curAudioList;
        that.curAudio = d.curAudio;
        _this2.$apply();
      });
      var systemInfo = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var _this3 = this;

      this.curAudio = _wepy2.default.getStorageSync(_constant.CURRENT_AUDIO);
      var audioPlayer = this.$parent.globalData.backgroundAudioPlay;
      this.isPlay = audioPlayer.paused === undefined || audioPlayer.paused ? false : true;

      this.backgroundAudioPlay.onEnded(function () {
        var curIndex = _this3.radioList.findIndex(function (item) {
          return item.radioId == _this3.curAudio.radioId;
        }) + 1;
        if (curIndex >= _this3.radioList.length) {
          _this3.curAudio = _this3.radioList[0];
        } else {
          _this3.curAudio = _this3.radioList[curIndex];
        }
        _this3.backgroundAudioPlay.title = _this3.curAudio.title;
        _this3.backgroundAudioPlay.src = _constant.AUDIO_PATH + _this3.curAudio.audioName;
        _this3.$apply();
        _this3.$parent.addPlayCount(_this3.curAudio.radioId);
      });
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: '李大山FM',
        path: '/pages/radio',
        success: function success(res) {
          // 转发成功
          console.log('success');
        },
        fail: function fail(res) {
          // 转发失败
          console.log('failure');
        }
      };
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.onLoad();
    }
  }]);

  return Radio;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Radio , 'pages/radio'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbIlJhZGlvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInJhZGlvQ292ZXIiLCJyYWRpb0xpc3QiLCJyYWRpb1Rvb2wiLCJkYXRhIiwiY3VyQXVkaW8iLCJpc1BsYXkiLCJiYWNrZ3JvdW5kQXVkaW9QbGF5IiwiYXVkaW9MaXN0SGVpZ2h0IiwiYXVkaW9MaXN0V2lkdGgiLCJjb21wdXRlZCIsImlzU2hvd1Rvb2wiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJyZW1vdmVTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwidGhhdCIsImQiLCJ3eCIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJnZXRBdWRpb0xpc3QiLCJxdWVyeSIsImF1dGhvciIsInRoZW4iLCJjdXJBdWRpb0xpc3QiLCJyZXNwIiwicmVzdWx0IiwiJGFwcGx5Iiwic3lzdGVtSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwiYXVkaW9QbGF5ZXIiLCJwYXVzZWQiLCJ1bmRlZmluZWQiLCJvbkVuZGVkIiwiY3VySW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwicmFkaW9JZCIsInRpdGxlIiwic3JjIiwiYXVkaW9OYW1lIiwiYWRkUGxheUNvdW50IiwicmVzIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJwYXRoIiwic3VjY2VzcyIsImZhaWwiLCJvbkxvYWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JD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QStCLHVCQUFhLE9BQUt4QyxRQUFMLENBQWN5QyxTQUExRDtBQUNBLGVBQUtiLE1BQUw7QUFDQSxlQUFLZixPQUFMLENBQWE2QixZQUFiLENBQTBCLE9BQUsxQyxRQUFMLENBQWNzQyxPQUF4QztBQUNELE9BYkQ7QUFjRDs7O3NDQUVpQkssRyxFQUFLO0FBQ3JCLFVBQUlBLElBQUlDLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSCxJQUFJSSxNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMUixlQUFPLE9BREY7QUFFTFMsY0FBTSxjQUZEO0FBR0xDLGlCQUFTLGlCQUFTTixHQUFULEVBQWM7QUFDckI7QUFDQUUsa0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsU0FOSTtBQU9MSSxjQUFNLGNBQVNQLEdBQVQsRUFBYztBQUNsQjtBQUNBRSxrQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDRDtBQVZJLE9BQVA7QUFZRDs7O3dDQUVvQjtBQUNuQixXQUFLSyxNQUFMO0FBQ0Q7Ozs7RUF2R2dDLGVBQUtDLEk7O2tCQUFuQi9ELEsiLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBpbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcbiAgaW1wb3J0IHtDVVJSRU5UX0FVRElPLCBBVURJT19QQVRILCBTWVNURU1fSU5GT30gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnXHJcblxyXG4gIGltcG9ydCBSYWRpb0NvdmVyIGZyb20gJy4uL2NvbXBvbmVudHMvcmFkaW8vY292ZXInXHJcbiAgaW1wb3J0IFJhZGlvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvL2xpc3QnXHJcbiAgaW1wb3J0IEF1ZGlvVG9vbCBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvL2F1ZGlvLXRvb2wnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+adjuWkp+WxseeUteWPsCdcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicmFkaW9MaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInJhZGlvTGlzdFwiLFwidi1iaW5kOmF1ZGlvLnN5bmNcIjpcImN1ckF1ZGlvXCJ9LFwicmFkaW9Ub29sXCI6e1wieG1sbnM6d3hcIjpcIlwiLFwiY2xhc3NcIjpcInJhZGlvLXRvb2xcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJyYWRpb0xpc3RcIixcInYtYmluZDphdWRpby5zeW5jXCI6XCJjdXJBdWRpb1wiLFwidi1iaW5kOmlzUGxheS5zeW5jXCI6XCJpc1BsYXlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICByYWRpb0NvdmVyOiBSYWRpb0NvdmVyLFxyXG4gICAgICByYWRpb0xpc3Q6IFJhZGlvTGlzdCxcclxuICAgICAgcmFkaW9Ub29sOiBBdWRpb1Rvb2xcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICByYWRpb0xpc3Q6W10sXHJcbiAgICAgIGN1ckF1ZGlvOiB7fSxcclxuICAgICAgaXNQbGF5OiBmYWxzZSxcclxuICAgICAgYmFja2dyb3VuZEF1ZGlvUGxheToge30sXHJcbiAgICAgIGF1ZGlvTGlzdEhlaWdodDogMCxcclxuICAgICAgYXVkaW9MaXN0V2lkdGg6IDBcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgaXNTaG93VG9vbCgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmN1ckF1ZGlvKS5sZW5ndGggIT0gMFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2ggPSB7XHJcbiAgICAgIGN1ckF1ZGlvIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5jdXJBdWRpbyA9IG5ld1ZhbHVlXHJcbiAgICAgICAgaWYobmV3VmFsdWUgPT09IHt9KXtcclxuICAgICAgICAgIHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoQ1VSUkVOVF9BVURJTylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoQ1VSUkVOVF9BVURJTywgbmV3VmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgbGV0IGQgPSB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YVxyXG5cclxuICAgICAgZC5iYWNrZ3JvdW5kQXVkaW9QbGF5ID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpXHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZEF1ZGlvUGxheSA9IGQuYmFja2dyb3VuZEF1ZGlvUGxheVxyXG5cclxuICAgICAgYXBpLmdldEF1ZGlvTGlzdCh7XHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIGF1dGhvciA6ICfmnY7lpKflsbEnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgIGQuY3VyQXVkaW9MaXN0ID0gcmVzcC5kYXRhLnJlc3VsdFxyXG4gICAgICAgIHRoYXQucmFkaW9MaXN0ID0gZC5jdXJBdWRpb0xpc3RcclxuICAgICAgICB0aGF0LmN1ckF1ZGlvID0gZC5jdXJBdWRpb1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBzeXN0ZW1JbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhTWVNURU1fSU5GTylcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIHRoaXMuY3VyQXVkaW8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKENVUlJFTlRfQVVESU8pXHJcbiAgICAgIGxldCBhdWRpb1BsYXllciA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXlcclxuICAgICAgdGhpcy5pc1BsYXkgPSAoYXVkaW9QbGF5ZXIucGF1c2VkID09PSB1bmRlZmluZWQgfHwgYXVkaW9QbGF5ZXIucGF1c2VkKSA/IGZhbHNlIDogdHJ1ZVxyXG5cclxuICAgICAgdGhpcy5iYWNrZ3JvdW5kQXVkaW9QbGF5Lm9uRW5kZWQoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJJbmRleCA9IHRoaXMucmFkaW9MaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChpdGVtLnJhZGlvSWQgPT0gdGhpcy5jdXJBdWRpby5yYWRpb0lkKVxyXG4gICAgICAgIH0pICsgMVxyXG4gICAgICAgIGlmKGN1ckluZGV4ID49IHRoaXMucmFkaW9MaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgICB0aGlzLmN1ckF1ZGlvID0gdGhpcy5yYWRpb0xpc3RbMF1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuY3VyQXVkaW8gPSB0aGlzLnJhZGlvTGlzdFtjdXJJbmRleF1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQXVkaW9QbGF5LnRpdGxlID0gdGhpcy5jdXJBdWRpby50aXRsZVxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEF1ZGlvUGxheS5zcmMgPSBBVURJT19QQVRIICsgdGhpcy5jdXJBdWRpby5hdWRpb05hbWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgdGhpcy4kcGFyZW50LmFkZFBsYXlDb3VudCh0aGlzLmN1ckF1ZGlvLnJhZGlvSWQpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6ICfmnY7lpKflsbFGTScsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9yYWRpbycsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmFpbHVyZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSAge1xyXG4gICAgICB0aGlzLm9uTG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuIl19