import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT } from '../types/counter'

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
const counter = (state = {num: 0}, action) => {
	console.log('customItemReducer state = ', state, ' action = ', action);
	switch (action.type) {
			// 修改习惯项完成状态Action
		case 'INCREMENT':
			state.num += 1
			return Object.assign({},state);
		default:
			return state;
	}
};

export default counter;