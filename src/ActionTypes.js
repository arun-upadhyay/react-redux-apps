export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE = 'UPDATE'
export const PAGING = 'PAGING'
const URI = "https://arun-express-api.herokuapp.com/posts"

function handleGetPost(data) {
    return {
        data,
        type: GET_POST
    }
}

function handleAddPost(data) {
    return {
        data: data.record,
        type: ADD_POST
    }
}

function handleDeletePost(data) {

    return {
        _id: data._id,
        type: DELETE_POST
    }
}

function handleUpdatePost(data, postData) {
    return {
        data: postData,
        type: UPDATE
    }
}

export function getPosts() {
    return dispatch => {
        return fetch(URI)
            .then(res => res.json())
            .then(data => dispatch(handleGetPost(data)))
            .catch(err => dispatch(err));
    };
}

export function addPost(postData) {
    return dispatch => {
        return fetch(URI, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(postData)
        }).then(res => res.json())
            .then(data => {
                dispatch(handleAddPost(data, postData))
            }).catch(err => dispatch(err));
    };
}

export function deletePost(id) {
    return dispatch => {
        return fetch(URI, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({_id: id})
        }).then(res => res.json())
            .then(data => {
                dispatch(handleDeletePost(data))
            }).catch(err => dispatch(err));
    };
}

export function updatePost(postData) {
    return dispatch => {
        return fetch(URI, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(postData)
        }).then(res => res.json())
            .then(data => {
                dispatch(handleUpdatePost(data, postData))
            }).catch(err => dispatch(err));
    };
}

function handlePaging(data) {
    return {
        data: data,
        type: PAGING
    }
}

export function handleNextPage(totalPage, currentPage) {
    currentPage = currentPage + 5;

    return dispatch => {
        return dispatch(handlePaging({currentPage: currentPage, totalPage: totalPage}));
    };
}

export function handlePreviousPage(totalPage, currentPage) {
    currentPage = currentPage - 5;
    if (currentPage < 0) {
        currentPage = 0;
    }
    return dispatch => {
        return dispatch(handlePaging({currentPage: currentPage, totalPage: totalPage}));
    }
}
