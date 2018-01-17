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
        playLength: '3分49秒',
        date: '2018-1-15',
        audioName: 'RI1000001.mp3',
        author: '李大山'
      }, {
        radioId: 'RI1000002',
        title: '一辈子都看不见爱情怎么办',
        playCount: '20.9万',
        playLength: '2分42秒',
        date: '2017-12-23',
        audioName: 'RI1000002.mp3',
        author: '李大山'
      }, {
        radioId: 'RI1000003',
        title: '写给渐渐老去的自己',
        playCount: '39.5万',
        playLength: '5分32秒',
        date: '2017-11-15',
        audioName: 'RI1000003.mp3',
        author: '李大山'
      }, {
        radioId: 'RI1000004',
        title: '我不愿将就',
        playCount: '34.4万',
        playLength: '3分50秒',
        date: '2017-11-2',
        audioName: 'RI1000004.mp3',
        author: '李大山'
      }, {
        radioId: 'RI1000005',
        title: '“你一个人过得好吗”',
        playCount: '50.3万',
        playLength: '3分21秒',
        date: '2017-10-25',
        audioName: 'RI1000005.mp3',
        author: '李大山'
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Radio;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Radio , 'pages/radio'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbIlJhZGlvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInJhZGlvQ292ZXIiLCJyYWRpb0xpc3QiLCJkYXRhIiwicmFkaW9JZCIsInRpdGxlIiwicGxheUNvdW50IiwicGxheUxlbmd0aCIsImRhdGUiLCJhdWRpb05hbWUiLCJhdXRob3IiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsV0FBdEMsRUFBYixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxpQ0FEUTtBQUVSQztBQUZRLEssUUFLVkMsSSxHQUFPO0FBQ0xELGlCQUFVLENBQ1I7QUFDRUUsaUJBQVMsV0FEWDtBQUVFQyxlQUFNLGVBRlI7QUFHRUMsbUJBQVcsT0FIYjtBQUlFQyxvQkFBWSxPQUpkO0FBS0VDLGNBQU0sV0FMUjtBQU1FQyxtQkFBVyxlQU5iO0FBT0VDLGdCQUFRO0FBUFYsT0FEUSxFQVVSO0FBQ0VOLGlCQUFTLFdBRFg7QUFFRUMsZUFBTSxjQUZSO0FBR0VDLG1CQUFXLE9BSGI7QUFJRUMsb0JBQVksT0FKZDtBQUtFQyxjQUFNLFlBTFI7QUFNRUMsbUJBQVcsZUFOYjtBQU9FQyxnQkFBUTtBQVBWLE9BVlEsRUFtQlI7QUFDRU4saUJBQVMsV0FEWDtBQUVFQyxlQUFNLFdBRlI7QUFHRUMsbUJBQVcsT0FIYjtBQUlFQyxvQkFBWSxPQUpkO0FBS0VDLGNBQU0sWUFMUjtBQU1FQyxtQkFBVyxlQU5iO0FBT0VDLGdCQUFRO0FBUFYsT0FuQlEsRUE0QlI7QUFDRU4saUJBQVMsV0FEWDtBQUVFQyxlQUFNLE9BRlI7QUFHRUMsbUJBQVcsT0FIYjtBQUlFQyxvQkFBWSxPQUpkO0FBS0VDLGNBQU0sV0FMUjtBQU1FQyxtQkFBVyxlQU5iO0FBT0VDLGdCQUFRO0FBUFYsT0E1QlEsRUFxQ1I7QUFDRU4saUJBQVMsV0FEWDtBQUVFQyxlQUFNLFlBRlI7QUFHRUMsbUJBQVcsT0FIYjtBQUlFQyxvQkFBWSxPQUpkO0FBS0VDLGNBQU0sWUFMUjtBQU1FQyxtQkFBVyxlQU5iO0FBT0VDLGdCQUFRO0FBUFYsT0FyQ1E7QUFETCxLOzs7O0VBYjBCLGVBQUtDLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBpbXBvcnQgUmFkaW9Db3ZlciBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvL2NvdmVyJ1xyXG4gIGltcG9ydCBSYWRpb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9yYWRpby9saXN0J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnY7lpKflsbHnlLXlj7AnXHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInJhZGlvTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJyYWRpb0xpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICByYWRpb0NvdmVyOiBSYWRpb0NvdmVyLFxyXG4gICAgICByYWRpb0xpc3Q6IFJhZGlvTGlzdFxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHJhZGlvTGlzdDpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmFkaW9JZDogJ1JJMTAwMDAwMScsXHJcbiAgICAgICAgICB0aXRsZTon4oCc566X5LqG5ZCn77yM5pS+5LiL5ZCn77yM5b+Y5LqG5ZCn4oCdJyxcclxuICAgICAgICAgIHBsYXlDb3VudDogJzE0LjXkuIcnLFxyXG4gICAgICAgICAgcGxheUxlbmd0aDogJzPliIY0OeenkicsXHJcbiAgICAgICAgICBkYXRlOiAnMjAxOC0xLTE1JyxcclxuICAgICAgICAgIGF1ZGlvTmFtZTogJ1JJMTAwMDAwMS5tcDMnLFxyXG4gICAgICAgICAgYXV0aG9yOiAn5p2O5aSn5bGxJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmFkaW9JZDogJ1JJMTAwMDAwMicsXHJcbiAgICAgICAgICB0aXRsZTon5LiA6L6I5a2Q6YO955yL5LiN6KeB54ix5oOF5oCO5LmI5YqeJyxcclxuICAgICAgICAgIHBsYXlDb3VudDogJzIwLjnkuIcnLFxyXG4gICAgICAgICAgcGxheUxlbmd0aDogJzLliIY0MuenkicsXHJcbiAgICAgICAgICBkYXRlOiAnMjAxNy0xMi0yMycsXHJcbiAgICAgICAgICBhdWRpb05hbWU6ICdSSTEwMDAwMDIubXAzJyxcclxuICAgICAgICAgIGF1dGhvcjogJ+adjuWkp+WxsSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJhZGlvSWQ6ICdSSTEwMDAwMDMnLFxyXG4gICAgICAgICAgdGl0bGU6J+WGmee7mea4kOa4kOiAgeWOu+eahOiHquW3sScsXHJcbiAgICAgICAgICBwbGF5Q291bnQ6ICczOS415LiHJyxcclxuICAgICAgICAgIHBsYXlMZW5ndGg6ICc15YiGMzLnp5InLFxyXG4gICAgICAgICAgZGF0ZTogJzIwMTctMTEtMTUnLFxyXG4gICAgICAgICAgYXVkaW9OYW1lOiAnUkkxMDAwMDAzLm1wMycsXHJcbiAgICAgICAgICBhdXRob3I6ICfmnY7lpKflsbEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICByYWRpb0lkOiAnUkkxMDAwMDA0JyxcclxuICAgICAgICAgIHRpdGxlOifmiJHkuI3mhL/lsIblsLEnLFxyXG4gICAgICAgICAgcGxheUNvdW50OiAnMzQuNOS4hycsXHJcbiAgICAgICAgICBwbGF5TGVuZ3RoOiAnM+WIhjUw56eSJyxcclxuICAgICAgICAgIGRhdGU6ICcyMDE3LTExLTInLFxyXG4gICAgICAgICAgYXVkaW9OYW1lOiAnUkkxMDAwMDA0Lm1wMycsXHJcbiAgICAgICAgICBhdXRob3I6ICfmnY7lpKflsbEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICByYWRpb0lkOiAnUkkxMDAwMDA1JyxcclxuICAgICAgICAgIHRpdGxlOifigJzkvaDkuIDkuKrkurrov4flvpflpb3lkJfigJ0nLFxyXG4gICAgICAgICAgcGxheUNvdW50OiAnNTAuM+S4hycsXHJcbiAgICAgICAgICBwbGF5TGVuZ3RoOiAnM+WIhjIx56eSJyxcclxuICAgICAgICAgIGRhdGU6ICcyMDE3LTEwLTI1JyxcclxuICAgICAgICAgIGF1ZGlvTmFtZTogJ1JJMTAwMDAwNS5tcDMnLFxyXG4gICAgICAgICAgYXV0aG9yOiAn5p2O5aSn5bGxJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuIl19