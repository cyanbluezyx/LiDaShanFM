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
      isPlay: false
    }, _this.computed = {
      isShowTool: function isShowTool() {
        return Object.keys(this.curAudio).length != 0;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Radio, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var d = that.$parent.globalData;
      d.curAudioList = _api2.default.getAudioList();
      this.radioList = d.curAudioList;
      this.curAudio = d.curAudio;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.curAudio = _wepy2.default.getStorageSync(_constant.CURRENT_AUDIO);
      var audioPlayer = this.$parent.globalData.backgroundAudioPlay;
      this.isPlay = audioPlayer.paused === undefined || audioPlayer.paused ? false : true;
    }
  }]);

  return Radio;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Radio , 'pages/radio'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbIlJhZGlvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInJhZGlvQ292ZXIiLCJyYWRpb0xpc3QiLCJyYWRpb1Rvb2wiLCJkYXRhIiwiY3VyQXVkaW8iLCJpc1BsYXkiLCJjb21wdXRlZCIsImlzU2hvd1Rvb2wiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidGhhdCIsImQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImN1ckF1ZGlvTGlzdCIsImdldEF1ZGlvTGlzdCIsImdldFN0b3JhZ2VTeW5jIiwiYXVkaW9QbGF5ZXIiLCJiYWNrZ3JvdW5kQXVkaW9QbGF5IiwicGF1c2VkIiwidW5kZWZpbmVkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFdBQXRDLEVBQWtELHFCQUFvQixVQUF0RSxFQUFiLEVBQStGLGFBQVksRUFBQyxZQUFXLEVBQVosRUFBZSxTQUFRLFlBQXZCLEVBQW9DLGdCQUFlLEVBQW5ELEVBQXNELG9CQUFtQixXQUF6RSxFQUFxRixxQkFBb0IsVUFBekcsRUFBb0gsc0JBQXFCLFFBQXpJLEVBQTNHLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGlDQURRO0FBRVJDLCtCQUZRO0FBR1JDO0FBSFEsSyxRQU1WQyxJLEdBQU87QUFDTEYsaUJBQVUsRUFETDtBQUVMRyxnQkFBVSxFQUZMO0FBR0xDLGNBQVE7QUFISCxLLFFBTVBDLFEsR0FBVztBQUNUQyxnQkFEUyx3QkFDRztBQUNWLGVBQU9DLE9BQU9DLElBQVAsQ0FBWSxLQUFLTCxRQUFqQixFQUEyQk0sTUFBM0IsSUFBcUMsQ0FBNUM7QUFDRDtBQUhRLEs7Ozs7OzZCQU1GO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsSUFBSUQsS0FBS0UsT0FBTCxDQUFhQyxVQUFyQjtBQUNBRixRQUFFRyxZQUFGLEdBQWlCLGNBQUlDLFlBQUosRUFBakI7QUFDQSxXQUFLZixTQUFMLEdBQWlCVyxFQUFFRyxZQUFuQjtBQUNBLFdBQUtYLFFBQUwsR0FBZ0JRLEVBQUVSLFFBQWxCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtBLFFBQUwsR0FBZ0IsZUFBS2EsY0FBTCx5QkFBaEI7QUFDQSxVQUFJQyxjQUFjLEtBQUtMLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkssbUJBQTFDO0FBQ0EsV0FBS2QsTUFBTCxHQUFlYSxZQUFZRSxNQUFaLEtBQXVCQyxTQUF2QixJQUFvQ0gsWUFBWUUsTUFBakQsR0FBMkQsS0FBM0QsR0FBbUUsSUFBakY7QUFDRDs7OztFQXRDZ0MsZUFBS0UsSTs7a0JBQW5CN0IsSyIsImZpbGUiOiJyYWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuICBpbXBvcnQge0NVUlJFTlRfQVVESU99IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50J1xyXG5cclxuICBpbXBvcnQgUmFkaW9Db3ZlciBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvL2NvdmVyJ1xyXG4gIGltcG9ydCBSYWRpb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9yYWRpby9saXN0J1xyXG4gIGltcG9ydCBBdWRpb1Rvb2wgZnJvbSAnLi4vY29tcG9uZW50cy9yYWRpby9hdWRpby10b29sJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnY7lpKflsbHnlLXlj7AnXHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInJhZGlvTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJyYWRpb0xpc3RcIixcInYtYmluZDphdWRpby5zeW5jXCI6XCJjdXJBdWRpb1wifSxcInJhZGlvVG9vbFwiOntcInhtbG5zOnd4XCI6XCJcIixcImNsYXNzXCI6XCJyYWRpby10b29sXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwicmFkaW9MaXN0XCIsXCJ2LWJpbmQ6YXVkaW8uc3luY1wiOlwiY3VyQXVkaW9cIixcInYtYmluZDppc1BsYXkuc3luY1wiOlwiaXNQbGF5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgcmFkaW9Db3ZlcjogUmFkaW9Db3ZlcixcclxuICAgICAgcmFkaW9MaXN0OiBSYWRpb0xpc3QsXHJcbiAgICAgIHJhZGlvVG9vbDogQXVkaW9Ub29sXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcmFkaW9MaXN0OltdLFxyXG4gICAgICBjdXJBdWRpbzoge30sXHJcbiAgICAgIGlzUGxheTogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgaXNTaG93VG9vbCgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmN1ckF1ZGlvKS5sZW5ndGggIT0gMFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgbGV0IGQgPSB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YVxyXG4gICAgICBkLmN1ckF1ZGlvTGlzdCA9IGFwaS5nZXRBdWRpb0xpc3QoKVxyXG4gICAgICB0aGlzLnJhZGlvTGlzdCA9IGQuY3VyQXVkaW9MaXN0XHJcbiAgICAgIHRoaXMuY3VyQXVkaW8gPSBkLmN1ckF1ZGlvXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLmN1ckF1ZGlvID0gd2VweS5nZXRTdG9yYWdlU3luYyhDVVJSRU5UX0FVRElPKVxyXG4gICAgICBsZXQgYXVkaW9QbGF5ZXIgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kQXVkaW9QbGF5XHJcbiAgICAgIHRoaXMuaXNQbGF5ID0gKGF1ZGlvUGxheWVyLnBhdXNlZCA9PT0gdW5kZWZpbmVkIHx8IGF1ZGlvUGxheWVyLnBhdXNlZCkgPyBmYWxzZSA6IHRydWVcclxuICAgIH1cclxuICB9XHJcbiJdfQ==