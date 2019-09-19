import React, {Component} from 'react';
import {ScanWrap,ScanItem} from './../homeStyle';
import {connect} from 'react-redux';
class Scan extends Component{
    render(){
        return(
            <div>
                <ScanWrap>
                    {
                        this.props.scanList.map((item,index)=>{
                            return(
                                <ScanItem key={index}>
                                    <img src={item.scanImg} alt=""/>
                                    <p>{item.title}</p>
                                </ScanItem>
                            )
                        })
                    }
                </ScanWrap>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    scanList:state.home.scanList
})
export default connect(mapStateToProps,null)(Scan);