export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const UPDATE = 'UPDATE'

function handleGetPost(data) {
    return {
        data,
        type: GET_POST
    }
}

function handleAddPost(data) {
    return {
        data,
        type: ADD_POST
    }

}

export function getPosts() {
    return dispatch => {
        return fetch("http://10.0.0.237:3000/posts")
            .then(res => res.json())
            .then(data => dispatch(handleGetPost(data)))
            .catch(err => dispatch(err));
    };
}

export function addPost(postData) {
    return dispatch => {
        return fetch("http://10.0.0.237:3000/posts", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(postData)
        }).then(resp => {
            dispatch(handleAddPost(postData))
        }).catch(err => dispatch(err));
    };
}


