"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
  }
  /**
   * 弹出提示框
   */

  _createClass(Tips, null, [{
    key: "success",
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: "success",
          mask: true,
          duration: duration
        });
      }, 300);
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: "confirm",
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "提示";

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: "toast",
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: icon,
          mask: true,
          duration: 500
        });
      }, 300);

      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 警告框
     */

  }, {
    key: "alert",
    value: function alert(title) {
      wx.showToast({
        title: title,
        image: "../images/alert.png",
        mask: true,
        duration: 1500
      });
    }

    /**
     * 错误框
     */

  }, {
    key: "error",
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        image: "../images/error.png",
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: "loading",
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      wx.showLoading({
        title: title,
        mask: true
      });
    }

    /**
     * 加载完毕
     */

  }, {
    key: "loaded",
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        wx.hideLoading();
      }
    }
  }, {
    key: "share",
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast("分享成功");
        }
      };
    }
  }]);

  return Tips;
}();

/**
 * 静态变量，是否加载中
 */


exports.default = Tips;
Tips.isLoading = false;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXh0IiwicGF5bG9hZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJmYWlsIiwib25IaWRlIiwiaW1hZ2UiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7QUFDakIsa0JBQWM7QUFBQTs7QUFDWixTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7QUFDRDs7Ozs7OzRCQUllQyxLLEVBQXVCO0FBQUEsVUFBaEJDLFFBQWdCLHVFQUFMLEdBQUs7O0FBQ3BDQyxpQkFBVyxZQUFNO0FBQ2ZDLFdBQUdDLFNBQUgsQ0FBYTtBQUNYSixpQkFBT0EsS0FESTtBQUVYSyxnQkFBTSxTQUZLO0FBR1hDLGdCQUFNLElBSEs7QUFJWEwsb0JBQVVBO0FBSkMsU0FBYjtBQU1ELE9BUEQsRUFPRyxHQVBIO0FBUUEsVUFBSUEsV0FBVyxDQUFmLEVBQWtCO0FBQ2hCLGVBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1AscUJBQVcsWUFBTTtBQUNmTTtBQUNELFdBRkQsRUFFR1AsUUFGSDtBQUdELFNBSk0sQ0FBUDtBQUtEO0FBQ0Y7O0FBRUQ7Ozs7Ozs0QkFHZVMsSSxFQUFrQztBQUFBLFVBQTVCQyxPQUE0Qix1RUFBbEIsRUFBa0I7QUFBQSxVQUFkWCxLQUFjLHVFQUFOLElBQU07O0FBQy9DLGFBQU8sSUFBSU8sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q04sV0FBR1MsU0FBSCxDQUFhO0FBQ1haLGlCQUFPQSxLQURJO0FBRVhhLG1CQUFTSCxJQUZFO0FBR1hJLHNCQUFZLElBSEQ7QUFJWEMsbUJBQVMsc0JBQU87QUFDZCxnQkFBSUMsSUFBSUMsT0FBUixFQUFpQjtBQUNmVCxzQkFBUUcsT0FBUjtBQUNELGFBRkQsTUFFTyxJQUFJSyxJQUFJRSxNQUFSLEVBQWdCO0FBQ3JCVCxxQkFBT0UsT0FBUDtBQUNEO0FBQ0YsV0FWVTtBQVdYUSxnQkFBTSxtQkFBTztBQUNYVixtQkFBT0UsT0FBUDtBQUNEO0FBYlUsU0FBYjtBQWVELE9BaEJNLENBQVA7QUFpQkQ7OzswQkFFWVgsSyxFQUFPb0IsTSxFQUEwQjtBQUFBLFVBQWxCZixJQUFrQix1RUFBWCxTQUFXOztBQUM1Q0gsaUJBQVcsWUFBTTtBQUNmQyxXQUFHQyxTQUFILENBQWE7QUFDWEosaUJBQU9BLEtBREk7QUFFWEssZ0JBQU1BLElBRks7QUFHWEMsZ0JBQU0sSUFISztBQUlYTCxvQkFBVTtBQUpDLFNBQWI7QUFNRCxPQVBELEVBT0csR0FQSDs7QUFTQTtBQUNBLFVBQUltQixNQUFKLEVBQVk7QUFDVmxCLG1CQUFXLFlBQU07QUFDZmtCO0FBQ0QsU0FGRCxFQUVHLEdBRkg7QUFHRDtBQUNGOztBQUVEOzs7Ozs7MEJBR2FwQixLLEVBQU87QUFDbEJHLFNBQUdDLFNBQUgsQ0FBYTtBQUNYSixlQUFPQSxLQURJO0FBRVhxQixlQUFPLHFCQUZJO0FBR1hmLGNBQU0sSUFISztBQUlYTCxrQkFBVTtBQUpDLE9BQWI7QUFNRDs7QUFFRDs7Ozs7OzBCQUlhRCxLLEVBQU9vQixNLEVBQVE7QUFDMUJqQixTQUFHQyxTQUFILENBQWE7QUFDWEosZUFBT0EsS0FESTtBQUVYcUIsZUFBTyxxQkFGSTtBQUdYZixjQUFNLElBSEs7QUFJWEwsa0JBQVU7QUFKQyxPQUFiO0FBTUE7QUFDQSxVQUFJbUIsTUFBSixFQUFZO0FBQ1ZsQixtQkFBVyxZQUFNO0FBQ2ZrQjtBQUNELFNBRkQsRUFFRyxHQUZIO0FBR0Q7QUFDRjs7QUFFRDs7Ozs7OzhCQUc4QjtBQUFBLFVBQWZwQixLQUFlLHVFQUFQLEtBQU87O0FBQzVCLFVBQUlGLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEI7QUFDRDtBQUNERCxXQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0FJLFNBQUdtQixXQUFILENBQWU7QUFDYnRCLGVBQU9BLEtBRE07QUFFYk0sY0FBTTtBQUZPLE9BQWY7QUFJRDs7QUFFRDs7Ozs7OzZCQUdnQjtBQUNkLFVBQUlSLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEJELGFBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQUksV0FBR29CLFdBQUg7QUFDRDtBQUNGOzs7MEJBRVl2QixLLEVBQU93QixHLEVBQUtDLEksRUFBTTtBQUM3QixhQUFPO0FBQ0x6QixlQUFPQSxLQURGO0FBRUwwQixjQUFNRixHQUZEO0FBR0xDLGNBQU1BLElBSEQ7QUFJTFYsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmxCLGVBQUs2QixLQUFMLENBQVcsTUFBWDtBQUNEO0FBTkksT0FBUDtBQVFEOzs7Ozs7QUFHSDs7Ozs7a0JBdEltQjdCLEk7QUF5SW5CQSxLQUFLQyxTQUFMLEdBQWlCLEtBQWpCIiwiZmlsZSI6InRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmj5DnpLrkuI7liqDovb3lt6XlhbfnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8ueWHuuaPkOekuuahhlxyXG4gICAgICovXHJcbiAgXHJcbiAgICBzdGF0aWMgc3VjY2Vzcyh0aXRsZSwgZHVyYXRpb24gPSA1MDApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9LCBkdXJhdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICog5by55Ye656Gu6K6k56qX5Y+jXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjb25maXJtKHRleHQsIHBheWxvYWQgPSB7fSwgdGl0bGUgPSBcIuaPkOekulwiKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IHRleHQsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxyXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogcmVzID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyB0b2FzdCh0aXRsZSwgb25IaWRlLCBpY29uID0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAzMDApO1xyXG4gIFxyXG4gICAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcclxuICAgICAgaWYgKG9uSGlkZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgb25IaWRlKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDorablkYrmoYZcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFsZXJ0KHRpdGxlKSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGltYWdlOiBcIi4uL2ltYWdlcy9hbGVydC5wbmdcIixcclxuICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/moYZcclxuICAgICAqL1xyXG4gIFxyXG4gICAgc3RhdGljIGVycm9yKHRpdGxlLCBvbkhpZGUpIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1hZ2VzL2Vycm9yLnBuZ1wiLFxyXG4gICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICB9KTtcclxuICAgICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXHJcbiAgICAgIGlmIChvbkhpZGUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG9uSGlkZSgpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICog5by55Ye65Yqg6L295o+Q56S6XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsb2FkaW5nKHRpdGxlID0gXCLliqDovb3kuK1cIikge1xyXG4gICAgICBpZiAoVGlwcy5pc0xvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgVGlwcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veWujOavlVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbG9hZGVkKCkge1xyXG4gICAgICBpZiAoVGlwcy5pc0xvYWRpbmcpIHtcclxuICAgICAgICBUaXBzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyBzaGFyZSh0aXRsZSwgdXJsLCBkZXNjKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIHBhdGg6IHVybCxcclxuICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgVGlwcy50b2FzdChcIuWIhuS6q+aIkOWKn1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOmdmeaAgeWPmOmHj++8jOaYr+WQpuWKoOi9veS4rVxyXG4gICAqL1xyXG4gIFRpcHMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgIl19