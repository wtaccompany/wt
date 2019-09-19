import React, {Component} from 'react';
import {TopicWrap,TopicItem} from './../homeStyle';
import {connect} from 'react-redux';
class Topic extends Component{
/*    constructor(){
        super();
        this.state={
            topicList:[
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_3?v=1568268246_1568713680',title:'青竹'},
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_4?v=1568268246_1568713680',title:'品质'},
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_5?v=1568268246_1568713680',title:'生活'},
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_6?v=1568268246_1568713680',title:'卓越'},
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_7?v=1568268246_1568713680',title:'良品'},
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_3?v=1568268246_1568713680',title:'青竹'},
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_4?v=1568268246_1568713680',title:'品质'},
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_5?v=1568268246_1568713680',title:'生活'},
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_6?v=1568268246_1568713680',title:'卓越'},
                {topImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_7?v=1568268246_1568713680',title:'良品'},
            ]
        }
    }*/
    render(){
        return(
            <div>
                <TopicWrap>
                    {
                        this.props.topicList.map((item,index)=>{
                            return(
                                <TopicItem key={index}>
                                    <img src={item.topImg} alt=""/>
                                    <span>{item.title}</span>
                                </TopicItem>
                            )
                        })
                    }
                </TopicWrap>
            </div>
        )
    }
}

/*const mapStateToProps=(state)=>{
    console.log(state);
    return{}
}*/
const mapStateToProps=(state)=>({
    topicList:state.home.topicList
})

export default connect(mapStateToProps, null)(Topic);