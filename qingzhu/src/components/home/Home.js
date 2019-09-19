import React, {Component} from 'react';
import {HomeWrap, HomeLeft, HomeRight} from "./homeStyle";
import {connect} from 'react-redux';
// import banner from './../../static/banner.png';  //引入本地图片路径需要这样引入
import Topic from './components/Topic';
import List from './components/List';
import Scan from './components/Scan';
import Ad from './components/Ad';
import Foot from './../foot/components/Foot';
import axios from 'axios';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeWrap>
                    <HomeLeft>
                        {/*<img src={banner} alt=""/>*/}
                        {/*开发时使用的图片路径都是网络路径，所以使用网络路径正常加载出来*/}
                        <img src="//asset.ibanquan.com/s/30611/727/index_slide_3?v=1568268246_1568713680" alt=""/>
                        <Topic/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Scan/>
                        <Ad/>
                    </HomeRight>
                </HomeWrap>
                <Foot />
            </div>
        )
    }

    componentDidMount() {
        axios.get('./data/getHomeList.json').then((res) => {
            // console.log(res);
            const data = res.data.data;
            // console.log(data);
            const action = {
                type: 'init_home_list',
                data
            };
            this.props.initHomeList(action);
        })
    }
}

const mapDispatchToProps = (dispatch) => ({
    initHomeList(action) {
        dispatch(action);
    }
})

export default connect(null, mapDispatchToProps)(Home);