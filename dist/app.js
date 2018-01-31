'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _constant = require('./utils/constant.js');

var _api = require('./api/api.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
var state = store.getState();
(0, _wepyRedux.setStore)(store);

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
        navigationBarTextStyle: 'white',
        enablePullDownRefresh: true
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
    _this.intercept('request', {
      config: function config(p) {
        p.timestamp = +new Date();
        return p;
      },
      success: function success(p) {
        console.log('request success');
        return p;
      },
      fail: function fail(p) {
        console.log('request error');
        return p;
      }
    });
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var isExpired, res, c;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isExpired = false;

                wx.checkSession({
                  success: function success() {
                    //session 未过期，并且在本生命周期一直有效
                    isExpired = false;
                  },
                  fail: function fail() {
                    //登录态过期
                    isExpired = true;
                  }
                });

                if (!isExpired) {
                  _context.next = 11;
                  break;
                }

                _context.next = 5;
                return _wepy2.default.login();

              case 5:
                res = _context.sent;

                if (!res.code) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return _wepy2.default.getUserInfo();

              case 9:
                c = _context.sent;

                (0, _api.wxCode2Session)({
                  query: {
                    jsCode: res.code,
                    userInfo: c
                  }
                }).then(function (resp) {
                  var res = resp.data;
                  if (res.status == '0') {
                    _wepy2.default.setStorageSync('openid', res.result);
                    _wepy2.default.setStorageSync(_constant.USER_INFO, c.userInfo);
                    var systemInfo = _wepy2.default.getSystemInfoSync();
                    _wepy2.default.setStorageSync(_constant.SYSTEM_INFO, systemInfo);
                  }
                });

              case 11:
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
    key: 'addPlayCount',
    value: function addPlayCount(radioId) {
      (0, _api.addPlayCount)({
        method: 'POST',
        query: {
          audioId: radioId
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJhcHBpZCIsImN1ckF1ZGlvIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImN1ckF1ZGlvTGlzdCIsImJhY2tncm91bmRBdWRpb1BsYXkiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwidGltZXN0YW1wIiwiRGF0ZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImlzRXhwaXJlZCIsImNoZWNrU2Vzc2lvbiIsImxvZ2luIiwicmVzIiwiY29kZSIsImdldFVzZXJJbmZvIiwiYyIsInF1ZXJ5IiwianNDb2RlIiwidGhlbiIsInJlc3AiLCJkYXRhIiwic3RhdHVzIiwic2V0U3RvcmFnZVN5bmMiLCJyZXN1bHQiLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJjYiIsInRoYXQiLCJyYWRpb0lkIiwibWV0aG9kIiwiYXVkaW9JZCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFTQTs7QUFNQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EsSUFBTUMsUUFBUUQsTUFBTUUsUUFBTixFQUFkO0FBQ0EseUJBQVNGLEtBQVQ7Ozs7O0FBdURFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFwRGZHLE1Bb0RlLEdBcEROO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsaUJBRkss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SUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJYLG9COztBQUNOZCx3QkFBUUMsR0FBUixDQUFZYSxJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VZLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS3pDLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLcUIsV0FBTCxDQUFpQjtBQUNmVCxlQURlLG1CQUNOTyxHQURNLEVBQ0Q7QUFDWnFCLGVBQUt6QyxVQUFMLENBQWdCQyxRQUFoQixHQUEyQm1CLElBQUluQixRQUEvQjtBQUNBdUMsZ0JBQU1BLEdBQUdwQixJQUFJbkIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7aUNBQ1l5QyxPLEVBQVM7QUFDcEIsNkJBQWE7QUFDWEMsZ0JBQVEsTUFERztBQUVYbkIsZUFBTztBQUNMb0IsbUJBQVNGO0FBREo7QUFGSSxPQUFiO0FBTUQ7Ozs7RUEzSTBCLGVBQUtHLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmltcG9ydCB7XHJcbiAgVVNFUl9TUEVDSUNBTF9JTkZPLFxyXG4gIFVTRVJfSU5GTyxcclxuICBTWVNURU1fSU5GTyxcclxuICBBVURJT19QQVRILFxyXG4gIENVUlJFTlRfQVVESU8sXHJcbiAgU0VTU0lPTl9JRFxyXG59IGZyb20gJy4vdXRpbHMvY29uc3RhbnQnXHJcblxyXG5pbXBvcnQge1xyXG4gIHd4Q29kZTJTZXNzaW9uLFxyXG4gIHd4TG9naW4sXHJcbiAgYWRkUGxheUNvdW50XHJcbn0gZnJvbSAnLi9hcGkvYXBpJ1xyXG5cclxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxyXG5jb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcclxuc2V0U3RvcmUoc3RvcmUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvcmFkaW8nLFxyXG4gICAgICAncGFnZXMvY29tbXVuaXR5JyxcclxuICAgICAgJ3BhZ2VzL3dhbGwnLFxyXG4gICAgICAncGFnZXMvaW5mbycsXHJcbiAgICAgICdwYWdlcy9yYWRpby9yYWRpb19wbGF5J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0VDMUQyNCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnY7lpKflsbFGTScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFwidGFiQmFyXCI6IHtcclxuICAgICAgXCJjb2xvclwiOiBcIiMyQzJDMkNcIixcclxuICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI0VDMUQyNFwiLFxyXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGM0YzRjNcIixcclxuICAgICAgXCJib3JkZXJTdHlsZVwiOiBcImJsYWNrXCIsXHJcbiAgICAgIFwibGlzdFwiOiBbe1xyXG4gICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvcmFkaW9cIixcclxuICAgICAgXCJ0ZXh0XCI6IFwi55S15Y+wXCIsXHJcbiAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvcmFkaW9fbG9nby5wbmdcIixcclxuICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL3JhZGlvX2xvZ29fYWN0aXZlLnBuZ1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2NvbW11bml0eVwiLFxyXG4gICAgICBcInRleHRcIjogXCLlo7DmjqdcIixcclxuICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9taWNyb19sb2dvLnBuZ1wiLFxyXG4gICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvbWljcm9fbG9nb19hY3RpdmUucG5nXCJcclxuICAgICAgfSwge1xyXG4gICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvd2FsbFwiLFxyXG4gICAgICBcInRleHRcIjogXCLooajnmb3loplcIixcclxuICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9sb3ZlX2xvZ28ucG5nXCIsXHJcbiAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9sb3ZlX2xvZ29fYWN0aXZlLnBuZ1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZm9cIixcclxuICAgICAgXCJ0ZXh0XCI6IFwi5oiRXCIsXHJcbiAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvaW5mb19sb2dvLnBuZ1wiLFxyXG4gICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvaW5mb19sb2dvX2FjdGl2ZS5wbmdcIlxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgYXBwaWQ6ICd3eGJkYzllNWM1ZTg1YThmNzEnLFxyXG4gICAgY3VyQXVkaW86IHd4LmdldFN0b3JhZ2VTeW5jKENVUlJFTlRfQVVESU8pLFxyXG4gICAgY3VyQXVkaW9MaXN0OiBbXSxcclxuICAgIGJhY2tncm91bmRBdWRpb1BsYXk6IHt9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XHJcbiAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcclxuICAgICAgICBjb25maWcgKHApIHtcclxuICAgICAgICAgICAgcC50aW1lc3RhbXAgPSArbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzIChwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsIChwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGVycm9yJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25MYXVuY2goKSB7XHJcbiAgICBsZXQgaXNFeHBpcmVkID0gZmFsc2VcclxuICAgIHd4LmNoZWNrU2Vzc2lvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9zZXNzaW9uIOacqui/h+acn++8jOW5tuS4lOWcqOacrOeUn+WRveWRqOacn+S4gOebtOacieaViFxyXG4gICAgICAgIGlzRXhwaXJlZCA9IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/nmbvlvZXmgIHov4fmnJ9cclxuICAgICAgICBpc0V4cGlyZWQgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZihpc0V4cGlyZWQpe1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbiAgICAgIGlmKHJlcy5jb2RlKXtcclxuICAgICAgICBsZXQgYyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB3eENvZGUyU2Vzc2lvbih7XHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBqc0NvZGU6IHJlcy5jb2RlLFxyXG4gICAgICAgICAgICB1c2VySW5mbzogY1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICBsZXQgcmVzID0gcmVzcC5kYXRhXHJcbiAgICAgICAgICBpZihyZXMuc3RhdHVzID09ICcwJyl7XHJcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ29wZW5pZCcscmVzLnJlc3VsdCk7XHJcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPLCBjLnVzZXJJbmZvKVxyXG4gICAgICAgICAgICBsZXQgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhTWVNURU1fSU5GTywgc3lzdGVtSW5mbyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgYWRkUGxheUNvdW50KHJhZGlvSWQpIHtcclxuICAgIGFkZFBsYXlDb3VudCh7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBxdWVyeToge1xyXG4gICAgICAgIGF1ZGlvSWQ6IHJhZGlvSWRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbn1cclxuIl19