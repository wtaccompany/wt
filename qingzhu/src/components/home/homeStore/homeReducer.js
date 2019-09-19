const defaultState = {
    /*    topicList:[
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
        ],
        listItem:[
            {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_3?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
            {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_4?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
            {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_5?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
            {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_6?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
            {listImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_7?v=1568268246_1568713680',title:'天草陶石咖啡杯套装',msg:'使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐'},
        ],
        scanList:[
            {scanImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_3?v=1568268246_1568713680',title:'自然生活，精选用料'},
            {scanImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_4?v=1568268246_1568713680',title:'自然生活，精选用料'},
            {scanImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_5?v=1568268246_1568713680',title:'自然生活，精选用料'},
            {scanImg:'//asset.ibanquan.com/s/30611/727/index_global1_pic_6?v=1568268246_1568713680',title:'自然生活，精选用料'},
        ],
        adList:[
            {title:'9 款高颜值饭盒推荐'},
            {title:'9 款高颜值饭盒推荐'},
            {title:'9 款高颜值饭盒推荐'},
            {title:'9 款高颜值饭盒推荐'},
            {title:'9 款高颜值饭盒推荐'},
            {title:'9 款高颜值饭盒推荐'},
        ],*/
    topicList: [],
    listItem: [],
    scanList: [],
    adList: []
}

export default (state = defaultState, action) => {
    // console.log(action);
    if (action.type === 'init_home_list') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.topicList = action.data.topicList;
        newState.listItem = action.data.listItem;
        newState.scanList = action.data.scanList;
        newState.adList = action.data.adList;
        return newState;
    }
    return state;
}
