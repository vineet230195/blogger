import axios from 'axios'


const setComments=(comments)=>{
    return {
        type:'SET_COMMENTS',
        payload:comments
    }
}

export const startGetComments=()=>{
    return(dispatch)=>{
        axios.get(`http://jsonplaceholder.typicode.com/comments`)
        .then(response =>{
            const comments=response.data
            dispatch(setComments(comments))
        })
    }
}