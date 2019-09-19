const defaultState = {
    footLeft: [],
    footAbout: [],
    footPlay: [],
    footFocus: []
}

export default (state = defaultState, action) => {
    console.log(action)
    if (action.type === 'init_foot_list') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.footLeft = action.data.footLeft;
        newState.footAbout = action.data.footAbout;
        newState.footPlay = action.data.footPlay;
        newState.footFocus = action.data.footFocus;
        return newState;
    }
    return state;
}