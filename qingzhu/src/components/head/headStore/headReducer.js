const defaultState = {
    flag: false
}

export default (state = defaultState, action) => {
    // console.log(action);
    /*if (action.type === 'handle_focus') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.flag = true;
        return newState;
    } else if (action.type === 'handle_blur') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.flag = false;
        return newState;
    }*/
    //（优化）把if语句改为switch语句
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'handle_focus' :
            newState.flag = true;
            return newState;
        case 'handle_blur':
            newState.flag = false;
            return newState;
    }
    return state;
}
