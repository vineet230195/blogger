import React from 'react'
import {connect} from 'react-redux'
import { findPost, findUserPost, findPostComment } from '../../selectors/userSelector'
import {Link} from 'react-router-dom'

function PostShow(props){
    console.log(props,"postshow props")
    return(
        <div>
                {props.user?(
                    <div>
                         <h1>User Name - {props.user.name}</h1>
                    </div>
                ):(
                    <div>
                        <p>loading...</p>
                    </div>
                )}

                {props.post?(
                    <div>
                    <h2>Title -{props.post.title}</h2>
                    <h2>Body -{props.post.body}</h2>
                    </div>
                ):(
                    <div>
                        <p>loading...</p>
                    </div>
                )}
                    <h2>Comments</h2>
                {props.comments?(
                    <div>
                        <ul>
                        {props.comments.map(comment=>{
                            return <li key={comment.id}>{comment.body}</li>
                        })}
                        </ul>
                    </div>
                ):(
                    <div>
                        <p>loading...</p>
                    </div>
                )}

                {props.user? <Link to={`/users/${props.user.id}`}>More Posts of Author:{props.user.name}</Link>:''}
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.Pid
    
    return{
       post:findPost(state.posts,id),
       user:findUserPost(state.posts,state.users,id),
       comments:findPostComment(state.comments,id)
    }
}
export default connect(mapStateToProps)(PostShow)