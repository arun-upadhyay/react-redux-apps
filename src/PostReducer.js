import * as constants from './ActionTypes';

const initialState = {
    posts: []
};
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_POST:
            return {...state, posts: action.data};
        case constants.ADD_POST:
            console.log(state.posts);
            console.log(action.data);
            return {...state, posts: [...state.posts, action.data]};
        case constants.DELETE_POST:
            return state.filter((post) => {
                return post.id !== action.id
            });
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
