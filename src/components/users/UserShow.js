import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {findUser,filterPosts} from '../../selectors/userSelector'

function UserShow(props){

    return(
            <div>
                {props.user?(
                    <div>
                     <h1>User Name - {props.user.name}</h1>
                    <h2> Post Written by User</h2>

                  <ul>
                      {props.posts.map(post=>{
                          return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                      })}
                  </ul>
                    </div>
                ):(
                    <div>
                        <p>loading...</p>
                    </div>
                )}
            </div>
        )  
    }

const mapStateToProps=(state,props)=>{
    const id=props.match.params.Uid
    return{
        user:findUser(state.users,id),
        posts:filterPosts(state.posts,id)
    }
}
export default connect(mapStateToProps)(UserShow)
