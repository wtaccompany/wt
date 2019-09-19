import React from 'react';
import {connect} from 'react-redux';//4.哪个组件要和store进行连接就要引入connect的方法
import {HeadWrap, Logo, Nav, Nava, SearchInfo, SerchInput, Search} from "./headStyle";
import headReducer from "./headStore/headReducer";  //样式全部封成组件引入使用
import * as headActions from './headStore/headActionCreates';  //* as通配方法   取别名
import {Link} from "react-router-dom";  //引入路由
const showInfo = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <span>精品锅具</span>
                <span>厨房用品</span>
                <span>酒杯茶具</span>
            </SearchInfo>
        )
    } else {
        return null;
    }
}

//把有状态组件改成无状态组件
function Head(props) {
    //（优化）使用解构赋值
    const {flag,handleFocus,handleBlur} =props;
    /* state = {
         flag: false
     };

     handleFocus() {
         this.setState({
             flag: true
         })
     }

     handleBlur() {
         this.setState({
             flag: false
         })
     }
 */

    //需要把state数据改成从store拿到的公有数据，映射成props,使用方法时也要使用this.props,
    //传递参数时使用箭头函数或者bind(this)的方法
    return (
        <div>
            <HeadWrap>
                <Logo/>
                <Nav>
                    <Link to='/'><Nava>首页</Nava></Link>
                    <Link to='/detail'><Nava>详情页面</Nava></Link>
                </Nav>
                {showInfo(flag)}
                <SerchInput>  {/*className={this.state.flag ? 'flag' : ''} onFocus={this.handleFocus.bind(this)}  onBlur={this.handleBlur.bind(this)}*/}
                    <Search
                        className={flag ? 'flag' : ''}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <span className='glyphicon glyphicon-search'></span>
                </SerchInput>
            </HeadWrap>
        </div>
    )
}

//6.拿到store中公有的数据   求证数据是否映射入组件
/*const mapStateToProps=(state)=>{
    console.log(state.head);
    return {}
}*/
//state代表所有状态数据，head在住reducer中把headReducer赋值给了head
const mapStateToProps = (state) => ({  //映射公有数据，state从store取到的公有数据
    flag: state.head.flag
});
//（优化1）当action（事件类型）比较多的时候，应该提取出来
//放在一个文件下，然后引入
//派发方法
const mapDispatchToProps = (dispatch) => ({  //所有派发事件写在该方法下
    handleFocus() {
        /* const action = {
             type: 'handle_focus'
         };
         dispatch(action);*/   //通过形参的方式把action派发给reducer
        dispatch(headActions.inputFocus())
    },
    handleBlur() {
        /*const action = {
            type: 'handle_blur'
        };
        dispatch(action);*/
        dispatch(headActions.inputBlur());
    },
});

/*
*（优化2）引入react-redux之后把state映射成props，所以有些组件中没有state状态
* 可以把状态组件改成无状态组件
*/
//5.使用connect连接store数据映射到组件中
export default connect(mapStateToProps, mapDispatchToProps)(Head);