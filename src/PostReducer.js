import * as constants from './ActionTypes';

const initialState = {
    posts: [],
    currentPage: 0,
    numberOfPages: 3
};
const returnData = (posts, currentPage, totalPage) => {
    return {
        posts: posts,
        currentPage: currentPage,
        numberOfPages: totalPage
    };
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_POST:
            return returnData(action.data, state.currentPage, state.numberOfPages)
        case constants.ADD_POST:
            return returnData([...state.posts, action.data], state.currentPage, state.numberOfPages)
        case constants.DELETE_POST:
            let filterData = state.posts.filter((post) => {
                return post._id !== action._id
            });
            return returnData(filterData, state.currentPage, state.numberOfPages)
        case constants.UPDATE:
            let updateData = state.posts.map((post) => {
                if (post._id === action.data._id) {
                    return {
                        _id: action.data._id,
                        title: action.data.title,
                        description: action.data.description
                    }
                } else return post;
            });
            return returnData(updateData, state.currentPage, state.numberOfPages)
        case constants.PAGING:
            if (action.data.currentPage > state.posts.length) {
                action.data.currentPage = state.posts.length - action.data.totalPage;
            }
            return returnData(state.posts, action.data.currentPage, action.data.totalPage);
        default:
            return state;
    }
}
export default postReducer;
