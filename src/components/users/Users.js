import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function UserList(props){
        return(
            <div>
               <h1>Listing users - {props.users.length}</h1>
                <ul>{
                        props.users.map(user=>{
                        return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    })
                    }
                </ul>
            </div>
        )
    }

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps)(UserList)