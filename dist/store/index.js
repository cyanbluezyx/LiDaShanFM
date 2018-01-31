'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = require('./../npm/redux/lib/index.js');

var _reducers = require('./reducers/index.js');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configStore() {
  var store = (0, _redux.createStore)(_reducers2.default);
  return store;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZ1N0b3JlIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd3QkEsVzs7QUFIeEI7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLFdBQVQsR0FBd0I7QUFDckMsTUFBTUMsUUFBUSwyQ0FBZDtBQUNBLFNBQU9BLEtBQVA7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlnU3RvcmUgKCkge1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIpXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuIl19