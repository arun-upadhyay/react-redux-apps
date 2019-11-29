const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.data];
        case 'DELETE_POST':
            return state.filter((post) => {
                return post.id !== action.id
            });
        case 'EDIT_POST':
            return state.map((post) => {
                return post.id === action.id ? {...post, editing: !post.editing} : post
            })
        case 'UPDATE':
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
