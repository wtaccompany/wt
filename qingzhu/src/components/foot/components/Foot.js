import React, {Component} from 'react';
import {FootWrap,FootLeft, FootCenter, FootRight} from "./../footStyle";
import ad1 from './../../../static/wb1.jpg';
import ad2 from './../../../static/wb2.jpg';
import {connect} from 'react-redux';
import axios from 'axios';

class Foot extends Component {
    render() {
        return (
            <div>
                <FootWrap>
                       {
                           this.props.footLeft.map((item,index)=>{
                               return(
                                   <FootLeft key={index}>
                                       <img src={item.leftImg} alt=""/>
                                       <p>{item.title}</p>
                                   </FootLeft>
                               )
                           })
                       }
                       <FootCenter>
                           <img src={ad1} alt=""/>
                           <img src={ad2} alt=""/>
                       </FootCenter>
                       <FootRight>

                           <dl>
                               {
                                   this.props.footAbout.map((item,index)=>{
                                       return  <dt key={index}>{item.about}</dt>
                                   })
                               }
                           </dl>

                           <dl>
                               {
                                   this.props.footPlay.map((item,index)=>{
                                       return  <dt key={index}>{item.play}</dt>
                                   })
                               }
                           </dl>

                           <dl>
                               {
                                   this.props.footFocus.map((item,index)=>{
                                       return  <dt key={index}>{item.focus}</dt>
                                   })
                               }
                           </dl>
                       </FootRight>
                </FootWrap>
            </div>
        )
    }

    componentDidMount() {
        axios.get('./data/getFootList.json').then((res) => {
            // console.log(res);
            const data = res.data.data;
            // console.log(data);
            const action = {
                type: 'init_foot_list',
                data
            };
            this.props.initFootList(action);
        })
    }
}

/*const mapStateToProps=(state)=>{
    console.log(state);
    return {}
}*/

const mapStateToProps = (state) => ({
    footLeft: state.foot.footLeft,
    footAbout: state.foot.footAbout,
    footPlay: state.foot.footPlay,
    footFocus: state.foot.footFocus,
})

const mapDispatchToProps = (dispatch) => ({
    initFootList(action) {
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Foot);