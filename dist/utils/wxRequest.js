'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var wxRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _tip2.default.loading();
                        data = params.query || {};
                        _context.next = 4;
                        return _wepy2.default.request({
                            url: url,
                            method: params.method || 'GET',
                            data: data,
                            header: { 'Content-Type': 'application/json' }
                        });

                    case 4:
                        res = _context.sent;

                        _tip2.default.loaded();
                        return _context.abrupt('return', res);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

var wxRequestNotLoading = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var data, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = params.query || {};
                        _context2.next = 3;
                        return _wepy2.default.request({
                            url: url,
                            method: params.method || 'GET',
                            data: data,
                            header: { 'Content-Type': 'application/json' }
                        });

                    case 3:
                        res = _context2.sent;
                        return _context2.abrupt('return', res);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function wxRequestNotLoading() {
        return _ref2.apply(this, arguments);
    };
}();

module.exports = {
    wxRequest: wxRequest,
    wxRequestNotLoading: wxRequestNotLoading
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJsb2FkaW5nIiwiZGF0YSIsInF1ZXJ5IiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsInJlcyIsImxvYWRlZCIsInd4UmVxdWVzdE5vdExvYWRpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUE7QUFBQSx1RUFBWTtBQUFBLFlBQU1DLE1BQU4sdUVBQWUsRUFBZjtBQUFBLFlBQW1CQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxzQ0FBSUMsT0FBSjtBQUNJQyw0QkFGVSxHQUVISCxPQUFPSSxLQUFQLElBQWdCLEVBRmI7QUFBQTtBQUFBLCtCQUdFLGVBQUtDLE9BQUwsQ0FBYTtBQUN6QkosaUNBQUtBLEdBRG9CO0FBRXpCSyxvQ0FBUU4sT0FBT00sTUFBUCxJQUFpQixLQUZBO0FBR3pCSCxrQ0FBTUEsSUFIbUI7QUFJekJJLG9DQUFRLEVBQUUsZ0JBQWdCLGtCQUFsQjtBQUppQix5QkFBYixDQUhGOztBQUFBO0FBR1ZDLDJCQUhVOztBQVNkLHNDQUFJQyxNQUFKO0FBVGMseURBVVBELEdBVk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWFBLElBQU1FO0FBQUEsd0VBQXNCO0FBQUEsWUFBTVYsTUFBTix1RUFBZSxFQUFmO0FBQUEsWUFBbUJDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkUsNEJBRG9CLEdBQ2JILE9BQU9JLEtBQVAsSUFBZ0IsRUFESDtBQUFBO0FBQUEsK0JBRVIsZUFBS0MsT0FBTCxDQUFhO0FBQ3pCSixpQ0FBS0EsR0FEb0I7QUFFekJLLG9DQUFRTixPQUFPTSxNQUFQLElBQWlCLEtBRkE7QUFHekJILGtDQUFNQSxJQUhtQjtBQUl6Qkksb0NBQVEsRUFBRSxnQkFBZ0Isa0JBQWxCO0FBSmlCLHlCQUFiLENBRlE7O0FBQUE7QUFFcEJDLDJCQUZvQjtBQUFBLDBEQVFqQkEsR0FSaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFXQUcsT0FBT0MsT0FBUCxHQUFpQjtBQUNiYix3QkFEYTtBQUViVztBQUZhLENBQWpCIiwiZmlsZSI6Ind4UmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgdGlwIGZyb20gJy4vdGlwJ1xyXG5cclxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMocGFyYW1zID0ge30sIHVybCkgPT4ge1xyXG4gICAgdGlwLmxvYWRpbmcoKTtcclxuICAgIGxldCBkYXRhID0gcGFyYW1zLnF1ZXJ5IHx8IHt9O1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kIHx8ICdHRVQnLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIH0pO1xyXG4gICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbmNvbnN0IHd4UmVxdWVzdE5vdExvYWRpbmcgPSBhc3luYyhwYXJhbXMgPSB7fSwgdXJsKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHBhcmFtcy5xdWVyeSB8fCB7fTtcclxuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCB8fCAnR0VUJyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHd4UmVxdWVzdCxcclxuICAgIHd4UmVxdWVzdE5vdExvYWRpbmdcclxufVxyXG4iXX0=