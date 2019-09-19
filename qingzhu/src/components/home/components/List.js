import React, {Component} from 'react';
import {ListWrap,ListItem} from './../homeStyle';
import {connect} from 'react-redux';
class List extends Component{
/*    constructor(){
        super();
        this.state={
            listItem:[
                {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_3?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
                {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_4?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
                {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_5?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
                {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_6?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
                {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_7?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
            ]
        }
    }*/
    render(){
        return(
            <div>
                <ListWrap>
                    {
                        this.props.listItem.map((item,index)=>{
                            return(
                                <ListItem key={index}>
                                    <img src={item.listImg} alt=""/>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.msg}</p>
                                    </div>
                                </ListItem>
                            )
                        })
                    }
                </ListWrap>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    listItem:state.home.listItem
})
export default connect(mapStateToProps, null)(List);