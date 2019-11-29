import * as constants from './ActionTypes';

const postReducer = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_POST:
            return [...state, action.data];
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
