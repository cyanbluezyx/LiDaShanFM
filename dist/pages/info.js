'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../utils/constant.js');

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_wepy$page) {
    _inherits(Info, _wepy$page);

    function Info() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Info);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Info.__proto__ || Object.getPrototypeOf(Info)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我'
        }, _this.data = {
            avatarUrl: '',
            nickName: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Info, [{
        key: 'onShow',
        value: function onShow() {
            _tip2.default.loading();
            var userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO);
            this.avatarUrl = userInfo.avatarUrl;
            this.nickName = userInfo.nickName;
            this.showLoading = false;
        }
    }]);

    return Info;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Info , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5mbyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJsb2FkaW5nIiwidXNlckluZm8iLCJnZXRTdG9yYWdlU3luYyIsInNob3dMb2FkaW5nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7QUFHQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFFbkJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSEMsdUJBQVcsRUFEUjtBQUVIQyxzQkFBVTtBQUZQLFM7Ozs7O2lDQU1FO0FBQ0wsMEJBQUlDLE9BQUo7QUFDQSxnQkFBSUMsV0FBVyxlQUFLQyxjQUFMLHFCQUFmO0FBQ0EsaUJBQUtKLFNBQUwsR0FBaUJHLFNBQVNILFNBQTFCO0FBQ0EsaUJBQUtDLFFBQUwsR0FBZ0JFLFNBQVNGLFFBQXpCO0FBQ0EsaUJBQUtJLFdBQUwsR0FBbUIsS0FBbkI7QUFDSDs7OztFQWxCK0IsZUFBS0MsSTs7a0JBQWxCVixJIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBpbXBvcnQge1xyXG4gICAgICBVU0VSX0lORk9cclxuICB9ZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnXHJcbiAgaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG5cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiRJyxcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGF2YXRhclVybDogJycsXHJcbiAgICAgICAgbmlja05hbWU6ICcnXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICB0aXAubG9hZGluZygpXHJcbiAgICAgICAgbGV0IHVzZXJJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX0lORk8pXHJcbiAgICAgICAgdGhpcy5hdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmxcclxuICAgICAgICB0aGlzLm5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWUgIFxyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==