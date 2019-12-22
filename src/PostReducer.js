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
        case constants.EDIT_POST:
            return state.map((post) => {
                return post.id === action.id ? {...post, editing: !post.editing} : post
            })
        case constants.UPDATE:
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing
                    }
                } else return post;
            })
        default:
            return state;
    }
}
export default postReducer;
