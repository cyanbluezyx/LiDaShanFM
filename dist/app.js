'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _constant = require('./utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/radio', 'pages/community', 'pages/wall', 'pages/info', 'pages/radio/radio_play'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#EC1D24',
        navigationBarTitleText: '李大山FM',
        navigationBarTextStyle: 'white'
      },
      "tabBar": {
        "color": "#2C2C2C",
        "selectedColor": "#EC1D24",
        "backgroundColor": "#F3F3F3",
        "borderStyle": "black",
        "list": [{
          "pagePath": "pages/radio",
          "text": "电台",
          "iconPath": "images/radio_logo.png",
          "selectedIconPath": "images/radio_logo_active.png"
        }, {
          "pagePath": "pages/community",
          "text": "声控",
          "iconPath": "images/micro_logo.png",
          "selectedIconPath": "images/micro_logo_active.png"
        }, {
          "pagePath": "pages/wall",
          "text": "表白墙",
          "iconPath": "images/love_logo.png",
          "selectedIconPath": "images/love_logo_active.png"
        }, {
          "pagePath": "pages/info",
          "text": "我",
          "iconPath": "images/info_logo.png",
          "selectedIconPath": "images/info_logo_active.png"
        }]
      }
    };
    _this.globalData = {
      userInfo: null,
      appid: 'wxbdc9e5c5e85a8f71',
      curAudio: wx.getStorageSync(_constant.CURRENT_AUDIO),
      curAudioList: [],
      backgroundAudioPlay: {}
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userInfo, res, _userInfo, _systemInfo;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO) || {};

                console.log(userInfo);

                if (userInfo.nickName) {
                  _context.next = 15;
                  break;
                }

                _context.next = 6;
                return _wepy2.default.login();

              case 6:
                res = _context.sent;

                if (!res.code) {
                  _context.next = 15;
                  break;
                }

                _context.next = 10;
                return _wepy2.default.getUserInfo();

              case 10:
                _userInfo = _context.sent;


                _wepy2.default.setStorageSync(_constant.USER_INFO, _userInfo.userInfo);
                console.log(that.globalData.userInfo);

                _systemInfo = _wepy2.default.getSystemInfoSync();


                _wepy2.default.setStorageSync(_constant.SYSTEM_INFO, _systemInfo);

              case 15:
                this.wxAudioInit();

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.sleep(3);

              case 2:
                data = _context2.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function testAsync() {
        return _ref2.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }, {
    key: 'wxAudioInit',
    value: function wxAudioInit() {
      this.globalData.backgroundAudioPlay = wx.getBackgroundAudioManager();
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJhcHBpZCIsImN1ckF1ZGlvIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImN1ckF1ZGlvTGlzdCIsImJhY2tncm91bmRBdWRpb1BsYXkiLCJ1c2UiLCJ0aGF0IiwiY29uc29sZSIsImxvZyIsIm5pY2tOYW1lIiwibG9naW4iLCJyZXMiLCJjb2RlIiwiZ2V0VXNlckluZm8iLCJfdXNlckluZm8iLCJzZXRTdG9yYWdlU3luYyIsIl9zeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3eEF1ZGlvSW5pdCIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjYiIsInN1Y2Nlc3MiLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUE0REUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQW5EZkEsTUFtRGUsR0FuRE47QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxpQkFGSyxFQUdMLFlBSEssRUFJTCxZQUpLLEVBS0wsd0JBTEssQ0FEQTtBQVFQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsT0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BUkQ7QUFjUCxnQkFBVTtBQUNSLGlCQUFTLFNBREQ7QUFFUix5QkFBaUIsU0FGVDtBQUdSLDJCQUFtQixTQUhYO0FBSVIsdUJBQWUsT0FKUDtBQUtSLGdCQUFRLENBQUM7QUFDUCxzQkFBWSxhQURMO0FBRVAsa0JBQVEsSUFGRDtBQUdQLHNCQUFZLHVCQUhMO0FBSVAsOEJBQW9CO0FBSmIsU0FBRCxFQUtMO0FBQ0Qsc0JBQVksaUJBRFg7QUFFRCxrQkFBUSxJQUZQO0FBR0Qsc0JBQVksdUJBSFg7QUFJRCw4QkFBb0I7QUFKbkIsU0FMSyxFQVVMO0FBQ0Qsc0JBQVksWUFEWDtBQUVELGtCQUFRLEtBRlA7QUFHRCxzQkFBWSxzQkFIWDtBQUlELDhCQUFvQjtBQUpuQixTQVZLLEVBZUw7QUFDRCxzQkFBWSxZQURYO0FBRUQsa0JBQVEsR0FGUDtBQUdELHNCQUFZLHNCQUhYO0FBSUQsOEJBQW9CO0FBSm5CLFNBZks7QUFMQTtBQWRILEtBbURNO0FBQUEsVUFSZkMsVUFRZSxHQVJGO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsYUFBTyxvQkFGSTtBQUdYQyxnQkFBVUMsR0FBR0MsY0FBSCx5QkFIQztBQUlYQyxvQkFBYyxFQUpIO0FBS1hDLDJCQUFxQjtBQUxWLEtBUUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7Ozs7Ozs7OztBQUdLQyxvQixHQUFPLEk7QUFFUFIsd0IsR0FBVyxlQUFLSSxjQUFMLHlCQUFrQyxFOztBQUNqREssd0JBQVFDLEdBQVIsQ0FBWVYsUUFBWjs7b0JBRUlBLFNBQVNXLFE7Ozs7Ozt1QkFDSyxlQUFLQyxLQUFMLEU7OztBQUFaQyxtQjs7cUJBRURBLElBQUlDLEk7Ozs7Ozt1QkFDaUIsZUFBS0MsV0FBTCxFOzs7QUFBbEJDLHlCOzs7QUFFSiwrQkFBS0MsY0FBTCxzQkFBOEJELFVBQVVoQixRQUF4QztBQUNBUyx3QkFBUUMsR0FBUixDQUFZRixLQUFLVCxVQUFMLENBQWdCQyxRQUE1Qjs7QUFFSWtCLDJCLEdBQWMsZUFBS0MsaUJBQUwsRTs7O0FBRWxCLCtCQUFLRixjQUFMLHdCQUFnQ0MsV0FBaEM7OztBQUlKLHFCQUFLRSxXQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR0tDLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05sQix3QkFBUUMsR0FBUixDQUFZaUIsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVQyxFLEVBQUk7QUFDZCxVQUFNcEIsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLVCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2UsV0FBTCxDQUFpQjtBQUNmYyxlQURlLG1CQUNOaEIsR0FETSxFQUNEO0FBQ1pMLGVBQUtULFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCYSxJQUFJYixRQUEvQjtBQUNBNEIsZ0JBQU1BLEdBQUdmLElBQUliLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7O2tDQUVZO0FBQ1gsV0FBS0QsVUFBTCxDQUFnQk8sbUJBQWhCLEdBQXNDSCxHQUFHMkIseUJBQUgsRUFBdEM7QUFDRDs7OztFQTlHMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuaW1wb3J0IHtcclxuICBVU0VSX1NQRUNJQ0FMX0lORk8sXHJcbiAgVVNFUl9JTkZPLFxyXG4gIFNZU1RFTV9JTkZPLFxyXG4gIEFVRElPX1BBVEgsXHJcbiAgQ1VSUkVOVF9BVURJT1xyXG59IGZyb20gJy4vdXRpbHMvY29uc3RhbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvcmFkaW8nLFxyXG4gICAgICAncGFnZXMvY29tbXVuaXR5JyxcclxuICAgICAgJ3BhZ2VzL3dhbGwnLFxyXG4gICAgICAncGFnZXMvaW5mbycsXHJcbiAgICAgICdwYWdlcy9yYWRpby9yYWRpb19wbGF5J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0VDMUQyNCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnY7lpKflsbFGTScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgICBcInRhYkJhclwiOiB7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjMkMyQzJDXCIsXHJcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiNFQzFEMjRcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRjNGM0YzXCIsXHJcbiAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJibGFja1wiLFxyXG4gICAgICBcImxpc3RcIjogW3tcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvcmFkaW9cIixcclxuICAgICAgICBcInRleHRcIjogXCLnlLXlj7BcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL3JhZGlvX2xvZ28ucG5nXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL3JhZGlvX2xvZ29fYWN0aXZlLnBuZ1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvY29tbXVuaXR5XCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5aOw5o6nXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9taWNyb19sb2dvLnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9taWNyb19sb2dvX2FjdGl2ZS5wbmdcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL3dhbGxcIixcclxuICAgICAgICBcInRleHRcIjogXCLooajnmb3loplcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL2xvdmVfbG9nby5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvbG92ZV9sb2dvX2FjdGl2ZS5wbmdcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZm9cIixcclxuICAgICAgICBcInRleHRcIjogXCLmiJFcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL2luZm9fbG9nby5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvaW5mb19sb2dvX2FjdGl2ZS5wbmdcIlxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgYXBwaWQ6ICd3eGJkYzllNWM1ZTg1YThmNzEnLFxyXG4gICAgY3VyQXVkaW86IHd4LmdldFN0b3JhZ2VTeW5jKENVUlJFTlRfQVVESU8pLFxyXG4gICAgY3VyQXVkaW9MaXN0OiBbXSxcclxuICAgIGJhY2tncm91bmRBdWRpb1BsYXk6IHt9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpc1xyXG5cclxuICAgIGxldCB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPKSB8fCB7fVxyXG4gICAgY29uc29sZS5sb2codXNlckluZm8pXHJcblxyXG4gICAgaWYoIXVzZXJJbmZvLm5pY2tOYW1lKXtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG5cclxuICAgICAgaWYocmVzLmNvZGUpe1xyXG4gICAgICAgIGxldCBfdXNlckluZm8gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuXHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX0lORk8sX3VzZXJJbmZvLnVzZXJJbmZvKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbylcclxuXHJcbiAgICAgICAgbGV0IF9zeXN0ZW1JbmZvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8sX3N5c3RlbUluZm8pXHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnd4QXVkaW9Jbml0KClcclxuICB9XHJcblxyXG4gIHNsZWVwIChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB3eEF1ZGlvSW5pdCgpe1xyXG4gICAgdGhpcy5nbG9iYWxEYXRhLmJhY2tncm91bmRBdWRpb1BsYXkgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKClcclxuICB9XHJcblxyXG4gIFxyXG59XHJcbiJdfQ==