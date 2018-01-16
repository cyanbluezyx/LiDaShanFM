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
      appid: 'wxbdc9e5c5e85a8f71'
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
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJhcHBpZCIsInVzZSIsInRoYXQiLCJnZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJuaWNrTmFtZSIsImxvZ2luIiwicmVzIiwiY29kZSIsImdldFVzZXJJbmZvIiwiX3VzZXJJbmZvIiwic2V0U3RvcmFnZVN5bmMiLCJfc3lzdGVtSW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNiIiwic3VjY2VzcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBdURFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFoRGZBLE1BZ0RlLEdBaEROO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsaUJBRkssRUFHTCxZQUhLLEVBSUwsWUFKSyxFQUtMLHdCQUxLLENBREE7QUFRUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLE9BSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQVJEO0FBY1AsZ0JBQVU7QUFDUixpQkFBUyxTQUREO0FBRVIseUJBQWlCLFNBRlQ7QUFHUiwyQkFBbUIsU0FIWDtBQUlSLHVCQUFlLE9BSlA7QUFLUixnQkFBUSxDQUFDO0FBQ1Asc0JBQVksYUFETDtBQUVQLGtCQUFRLElBRkQ7QUFHUCxzQkFBWSx1QkFITDtBQUlQLDhCQUFvQjtBQUpiLFNBQUQsRUFLTDtBQUNELHNCQUFZLGlCQURYO0FBRUQsa0JBQVEsSUFGUDtBQUdELHNCQUFZLHVCQUhYO0FBSUQsOEJBQW9CO0FBSm5CLFNBTEssRUFVTDtBQUNELHNCQUFZLFlBRFg7QUFFRCxrQkFBUSxLQUZQO0FBR0Qsc0JBQVksc0JBSFg7QUFJRCw4QkFBb0I7QUFKbkIsU0FWSyxFQWVMO0FBQ0Qsc0JBQVksWUFEWDtBQUVELGtCQUFRLEdBRlA7QUFHRCxzQkFBWSxzQkFIWDtBQUlELDhCQUFvQjtBQUpuQixTQWZLO0FBTEE7QUFkSCxLQWdETTtBQUFBLFVBTGZDLFVBS2UsR0FMRjtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGFBQU87QUFGSSxLQUtFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIYTtBQUlkOzs7Ozs7Ozs7Ozs7QUFHS0Msb0IsR0FBTyxJO0FBRVBILHdCLEdBQVcsZUFBS0ksY0FBTCx5QkFBa0MsRTs7QUFDakRDLHdCQUFRQyxHQUFSLENBQVlOLFFBQVo7O29CQUVJQSxTQUFTTyxROzs7Ozs7dUJBQ0ssZUFBS0MsS0FBTCxFOzs7QUFBWkMsbUI7O3FCQUVEQSxJQUFJQyxJOzs7Ozs7dUJBQ2lCLGVBQUtDLFdBQUwsRTs7O0FBQWxCQyx5Qjs7O0FBRUosK0JBQUtDLGNBQUwsc0JBQThCRCxVQUFVWixRQUF4QztBQUNBSyx3QkFBUUMsR0FBUixDQUFZSCxLQUFLSixVQUFMLENBQWdCQyxRQUE1Qjs7QUFFSWMsMkIsR0FBYyxlQUFLQyxpQkFBTCxFOzs7QUFFbEIsK0JBQUtGLGNBQUwsd0JBQWdDQyxXQUFoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9DRSxDLEVBQUc7QUFDUixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOakIsd0JBQVFDLEdBQVIsQ0FBWWdCLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUMsRSxFQUFJO0FBQ2QsVUFBTXBCLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS0osVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtXLFdBQUwsQ0FBaUI7QUFDZmEsZUFEZSxtQkFDTmYsR0FETSxFQUNEO0FBQ1pOLGVBQUtKLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCUyxJQUFJVCxRQUEvQjtBQUNBdUIsZ0JBQU1BLEdBQUdkLElBQUlULFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXZHMEIsZUFBS3lCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmltcG9ydCB7XHJcbiAgVVNFUl9TUEVDSUNBTF9JTkZPLFxyXG4gIFVTRVJfSU5GTyxcclxuICBTWVNURU1fSU5GT1xyXG59IGZyb20gJy4vdXRpbHMvY29uc3RhbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvcmFkaW8nLFxyXG4gICAgICAncGFnZXMvY29tbXVuaXR5JyxcclxuICAgICAgJ3BhZ2VzL3dhbGwnLFxyXG4gICAgICAncGFnZXMvaW5mbycsXHJcbiAgICAgICdwYWdlcy9yYWRpby9yYWRpb19wbGF5J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0VDMUQyNCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnY7lpKflsbFGTScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgICBcInRhYkJhclwiOiB7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjMkMyQzJDXCIsXHJcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiNFQzFEMjRcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRjNGM0YzXCIsXHJcbiAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJibGFja1wiLFxyXG4gICAgICBcImxpc3RcIjogW3tcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvcmFkaW9cIixcclxuICAgICAgICBcInRleHRcIjogXCLnlLXlj7BcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL3JhZGlvX2xvZ28ucG5nXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL3JhZGlvX2xvZ29fYWN0aXZlLnBuZ1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvY29tbXVuaXR5XCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5aOw5o6nXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9taWNyb19sb2dvLnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9taWNyb19sb2dvX2FjdGl2ZS5wbmdcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL3dhbGxcIixcclxuICAgICAgICBcInRleHRcIjogXCLooajnmb3loplcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL2xvdmVfbG9nby5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvbG92ZV9sb2dvX2FjdGl2ZS5wbmdcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZm9cIixcclxuICAgICAgICBcInRleHRcIjogXCLmiJFcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL2luZm9fbG9nby5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvaW5mb19sb2dvX2FjdGl2ZS5wbmdcIlxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgYXBwaWQ6ICd3eGJkYzllNWM1ZTg1YThmNzEnXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpc1xyXG5cclxuICAgIGxldCB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPKSB8fCB7fVxyXG4gICAgY29uc29sZS5sb2codXNlckluZm8pXHJcblxyXG4gICAgaWYoIXVzZXJJbmZvLm5pY2tOYW1lKXtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG5cclxuICAgICAgaWYocmVzLmNvZGUpe1xyXG4gICAgICAgIGxldCBfdXNlckluZm8gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuXHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX0lORk8sX3VzZXJJbmZvLnVzZXJJbmZvKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbylcclxuXHJcbiAgICAgICAgbGV0IF9zeXN0ZW1JbmZvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8sX3N5c3RlbUluZm8pXHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19