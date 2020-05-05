import {createStore,combineReducers,applyMiddleware} from 'redux'
import usersReducer from '../reducer/usersReducer'
import postsReducer from '../reducer/postsReducer'
import commentsReducer from '../reducer/commentsReducer'
import thunk from 'redux-thunk'
const configureStore=()=>{
    const store=createStore(combineReducers({
        users:usersReducer,
        posts:postsReducer,
        comments:commentsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore