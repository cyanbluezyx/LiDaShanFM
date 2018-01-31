'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _counter = require('./../types/counter.js');

// export default handleActions({
// 	[INCREMENT] (state) {
// 		return {
// 			...state,
// 			num: state.num + 1
// 		}
// 	},
// 	[DECREMENT] (state) {
// 		return {
// 			...state,
// 			num: state.num - 1
// 		}
// 	}
// },{
// 	num: 0
// })
var counter = function counter() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { num: 0 };
	var action = arguments[1];

	console.log('customItemReducer state = ', state, ' action = ', action);
	switch (action.type) {
		// 修改习惯项完成状态Action
		case 'INCREMENT':
			state.num += 1;
			return Object.assign({}, state);
		default:
			return state;
	}
};

exports.default = counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiY291bnRlciIsInN0YXRlIiwibnVtIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLEdBQThCO0FBQUEsS0FBN0JDLEtBQTZCLHVFQUFyQixFQUFDQyxLQUFLLENBQU4sRUFBcUI7QUFBQSxLQUFYQyxNQUFXOztBQUM3Q0MsU0FBUUMsR0FBUixDQUFZLDRCQUFaLEVBQTBDSixLQUExQyxFQUFpRCxZQUFqRCxFQUErREUsTUFBL0Q7QUFDQSxTQUFRQSxPQUFPRyxJQUFmO0FBQ0U7QUFDRCxPQUFLLFdBQUw7QUFDQ0wsU0FBTUMsR0FBTixJQUFhLENBQWI7QUFDQSxVQUFPSyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFpQlAsS0FBakIsQ0FBUDtBQUNEO0FBQ0MsVUFBT0EsS0FBUDtBQU5GO0FBUUEsQ0FWRDs7a0JBWWVELE8iLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xyXG5pbXBvcnQgeyBJTkNSRU1FTlQsIERFQ1JFTUVOVCB9IGZyb20gJy4uL3R5cGVzL2NvdW50ZXInXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuLy8gXHRbSU5DUkVNRU5UXSAoc3RhdGUpIHtcclxuLy8gXHRcdHJldHVybiB7XHJcbi8vIFx0XHRcdC4uLnN0YXRlLFxyXG4vLyBcdFx0XHRudW06IHN0YXRlLm51bSArIDFcclxuLy8gXHRcdH1cclxuLy8gXHR9LFxyXG4vLyBcdFtERUNSRU1FTlRdIChzdGF0ZSkge1xyXG4vLyBcdFx0cmV0dXJuIHtcclxuLy8gXHRcdFx0Li4uc3RhdGUsXHJcbi8vIFx0XHRcdG51bTogc3RhdGUubnVtIC0gMVxyXG4vLyBcdFx0fVxyXG4vLyBcdH1cclxuLy8gfSx7XHJcbi8vIFx0bnVtOiAwXHJcbi8vIH0pXHJcbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGUgPSB7bnVtOiAwfSwgYWN0aW9uKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ2N1c3RvbUl0ZW1SZWR1Y2VyIHN0YXRlID0gJywgc3RhdGUsICcgYWN0aW9uID0gJywgYWN0aW9uKTtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRcdC8vIOS/ruaUueS5oOaDr+mhueWujOaIkOeKtuaAgUFjdGlvblxyXG5cdFx0Y2FzZSAnSU5DUkVNRU5UJzpcclxuXHRcdFx0c3RhdGUubnVtICs9IDFcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sc3RhdGUpO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXI7Il19