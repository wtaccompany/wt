import {createStore} from 'redux';  //引入创建仓库的方法
/*
* 由于store不会处理数据，需要引入reducer来处理数据
* 创建的reducer相当于售货员查看的清单
* */
import reducer from './reducer';

const store = createStore(reducer);    //创建仓库   store相当于售货员
export default store;   //公开仓库

//store创建完成之后，就不用再操作store下的内容了，操作的内容全部放在reducer下
//store是一个中间桥梁，组件是通过store去修改reducer下的内容，reducer下边的内容
//进行变动时也是通过store传递给组件的
