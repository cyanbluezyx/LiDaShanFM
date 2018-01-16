'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _cover = require('./../components/radio/cover.js');

var _cover2 = _interopRequireDefault(_cover);

var _list = require('./../components/radio/list.js');

var _list2 = _interopRequireDefault(_list);

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
    }, _this.$repeat = {}, _this.$props = { "radioList": { "xmlns:v-bind": "", "v-bind:list.sync": "radioList" } }, _this.$events = {}, _this.components = {
      radioCover: _cover2.default,
      radioList: _list2.default
    }, _this.data = {
      radioList: [{
        radioId: 'RI1000001',
        title: '“算了吧，放下吧，忘了吧”',
        playCount: '14.5万',
        playLength: '9分24秒',
        date: '2018-1-15'
      }, {
        radioId: 'RI1000002',
        title: '一辈子都看不见爱情怎么办',
        playCount: '20.9万',
        playLength: '13分26秒',
        date: '2017-12-23'
      }, {
        radioId: 'RI1000003',
        title: '写给渐渐老去的自己',
        playCount: '39.5万',
        playLength: '12分',
        date: '2017-11-15'
      }, {
        radioId: 'RI1000004',
        title: '我不愿将就',
        playCount: '34.4万',
        playLength: '14分18秒',
        date: '2017-11-2'
      }, {
        radioId: 'RI1000005',
        title: '“你一个人过得好吗”',
        playCount: '50.3万',
        playLength: '9分57秒',
        date: '2017-10-25'
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Radio;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Radio , 'pages/radio'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbIlJhZGlvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInJhZGlvQ292ZXIiLCJyYWRpb0xpc3QiLCJkYXRhIiwicmFkaW9JZCIsInRpdGxlIiwicGxheUNvdW50IiwicGxheUxlbmd0aCIsImRhdGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsV0FBdEMsRUFBYixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxpQ0FEUTtBQUVSQztBQUZRLEssUUFLVkMsSSxHQUFPO0FBQ0xELGlCQUFVLENBQ1I7QUFDRUUsaUJBQVMsV0FEWDtBQUVFQyxlQUFNLGVBRlI7QUFHRUMsbUJBQVcsT0FIYjtBQUlFQyxvQkFBWSxPQUpkO0FBS0VDLGNBQU07QUFMUixPQURRLEVBUVI7QUFDRUosaUJBQVMsV0FEWDtBQUVFQyxlQUFNLGNBRlI7QUFHRUMsbUJBQVcsT0FIYjtBQUlFQyxvQkFBWSxRQUpkO0FBS0VDLGNBQU07QUFMUixPQVJRLEVBZVI7QUFDRUosaUJBQVMsV0FEWDtBQUVFQyxlQUFNLFdBRlI7QUFHRUMsbUJBQVcsT0FIYjtBQUlFQyxvQkFBWSxLQUpkO0FBS0VDLGNBQU07QUFMUixPQWZRLEVBc0JSO0FBQ0VKLGlCQUFTLFdBRFg7QUFFRUMsZUFBTSxPQUZSO0FBR0VDLG1CQUFXLE9BSGI7QUFJRUMsb0JBQVksUUFKZDtBQUtFQyxjQUFNO0FBTFIsT0F0QlEsRUE2QlI7QUFDRUosaUJBQVMsV0FEWDtBQUVFQyxlQUFNLFlBRlI7QUFHRUMsbUJBQVcsT0FIYjtBQUlFQyxvQkFBWSxPQUpkO0FBS0VDLGNBQU07QUFMUixPQTdCUTtBQURMLEs7Ozs7RUFiMEIsZUFBS0MsSTs7a0JBQW5CZixLIiwiZmlsZSI6InJhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgaW1wb3J0IFJhZGlvQ292ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9yYWRpby9jb3ZlcidcclxuICBpbXBvcnQgUmFkaW9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmFkaW8vbGlzdCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5p2O5aSn5bGx55S15Y+wJ1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJyYWRpb0xpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwicmFkaW9MaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgcmFkaW9Db3ZlcjogUmFkaW9Db3ZlcixcclxuICAgICAgcmFkaW9MaXN0OiBSYWRpb0xpc3RcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICByYWRpb0xpc3Q6W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJhZGlvSWQ6ICdSSTEwMDAwMDEnLFxyXG4gICAgICAgICAgdGl0bGU6J+KAnOeul+S6huWQp++8jOaUvuS4i+WQp++8jOW/mOS6huWQp+KAnScsXHJcbiAgICAgICAgICBwbGF5Q291bnQ6ICcxNC415LiHJyxcclxuICAgICAgICAgIHBsYXlMZW5ndGg6ICc55YiGMjTnp5InLFxyXG4gICAgICAgICAgZGF0ZTogJzIwMTgtMS0xNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJhZGlvSWQ6ICdSSTEwMDAwMDInLFxyXG4gICAgICAgICAgdGl0bGU6J+S4gOi+iOWtkOmDveeci+S4jeingeeIseaDheaAjuS5iOWKnicsXHJcbiAgICAgICAgICBwbGF5Q291bnQ6ICcyMC455LiHJyxcclxuICAgICAgICAgIHBsYXlMZW5ndGg6ICcxM+WIhjI256eSJyxcclxuICAgICAgICAgIGRhdGU6ICcyMDE3LTEyLTIzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmFkaW9JZDogJ1JJMTAwMDAwMycsXHJcbiAgICAgICAgICB0aXRsZTon5YaZ57uZ5riQ5riQ6ICB5Y6755qE6Ieq5bexJyxcclxuICAgICAgICAgIHBsYXlDb3VudDogJzM5LjXkuIcnLFxyXG4gICAgICAgICAgcGxheUxlbmd0aDogJzEy5YiGJyxcclxuICAgICAgICAgIGRhdGU6ICcyMDE3LTExLTE1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmFkaW9JZDogJ1JJMTAwMDAwNCcsXHJcbiAgICAgICAgICB0aXRsZTon5oiR5LiN5oS/5bCG5bCxJyxcclxuICAgICAgICAgIHBsYXlDb3VudDogJzM0LjTkuIcnLFxyXG4gICAgICAgICAgcGxheUxlbmd0aDogJzE05YiGMTjnp5InLFxyXG4gICAgICAgICAgZGF0ZTogJzIwMTctMTEtMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJhZGlvSWQ6ICdSSTEwMDAwMDUnLFxyXG4gICAgICAgICAgdGl0bGU6J+KAnOS9oOS4gOS4quS6uui/h+W+l+WlveWQl+KAnScsXHJcbiAgICAgICAgICBwbGF5Q291bnQ6ICc1MC4z5LiHJyxcclxuICAgICAgICAgIHBsYXlMZW5ndGg6ICc55YiGNTfnp5InLFxyXG4gICAgICAgICAgZGF0ZTogJzIwMTctMTAtMjUnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=