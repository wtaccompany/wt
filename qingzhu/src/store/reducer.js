import {combineReducers} from 'redux';  //使用combineReducers把各个组件的reducer进行拆分
import headReducer from './../components/head/headStore/headReducer';
import homeReducer from './../components/home/homeStore/homeReducer';
import footReducer from './../components/foot/footStore/footReducer';
// head对应组件Head中68行state.head,使用combineReducers在住reducer中把各个组件的reducer进行拆分
//主的reducer不进行数据处理，把数据处理交给各个组件的reducer
export default combineReducers({
    head:headReducer,
    home:homeReducer,
    foot:footReducer
})