import React, {Component} from 'react';
import {AdWrap} from './../homeStyle';
import ad1 from './../../../static/wb1.jpg';
import ad2 from './../../../static/wb2.jpg';
import {connect} from 'react-redux';
class Ad extends Component{
    render(){
        return(
            <div>
                <AdWrap>
                    <img src={ad1} alt=""/>
                    <img src={ad2} alt=""/>
                    <ul>
                        {
                            this.props.adList.map((item,index)=>{
                                return(
                            <li key={index}>{item.title}</li>
                            )
                        })
                        }
                    </ul>
                </AdWrap>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    adList:state.home.adList
})
export default connect(mapStateToProps,null)(Ad);