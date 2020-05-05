const postInitialState=[]

const postsReducer=(state=postInitialState,action)=>{
    switch(action.type){
        case 'SET_POSTS':{
            return [...action.payload]
        }

        case 'SET_POST_USER':{
            return {...action.payload}
        }
        default:{
            return [...state]
        }
    }
}

export default postsReducer


