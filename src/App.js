import React from 'react'
import {BrowserRouter,Link,Route} from 'react-router-dom'

import Home from './components/home/Home'
import Posts from './components/posts/Posts'
import UserList from './components/users/Users'
import UserShow from './components/users/UserShow'
import PostShow from './components/posts/PostShow'

function App(){
    return(
    <BrowserRouter>
        <div>   
            <h1>Hello React</h1>
            <Link to='/'>Home</Link>|
            <Link to='/users'>Users</Link>|
            <Link to='/posts'>Posts</Link>
            

            <Route path='/' component={Home} exact={true}/>
            <Route path='/users' component={UserList} exact={true}/>
             <Route path='/posts' component={Posts} exact={true}/>
            <Route path='/users/:Uid' component={UserShow} />
            <Route path='/posts/:Pid' component={PostShow} />
  
        </div>
    </BrowserRouter>
    )
}

export default App