import * as constants from './ActionTypes';

const initialState = {
    posts: []
};
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_POST:
            return {...state, posts: action.data};
        case constants.ADD_POST:
            return {...state, posts: [...state.posts, action.data]};
        case constants.DELETE_POST:
            let filterData = state.posts.filter((post) => {
                return post._id !== action._id
            });
            return {posts: filterData};
        case constants.UPDATE:

            console.log(state.posts);

            let updateData = state.posts.map((post) => {
                if (post._id === action.data._id) {
                    return {
                        _id: action.data._id,
                        title: action.data.title,
                        description: action.data.description
                    }
                } else return post;
            });
            return {posts: updateData};
        default:
            return state;
    }
}
export default postReducer;
