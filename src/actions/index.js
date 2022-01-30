import JsonPlaceholders from '../APIs/JsonPlaceholders';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const res = await JsonPlaceholders.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: res.data
        })
    }
}






