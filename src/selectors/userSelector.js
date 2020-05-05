

export const findUser=(users,id)=>{
    return users.find(user=>user.id==id)
}

export const filterPosts=(posts,id)=>{
    return posts.filter(post=>post.userId==id)
}


export const findPost=(posts,id)=>{
    return posts.find(post=> post.id==id)
}


export const findUserPost=(posts,users,id)=>{
        const userInfo=posts.find(post=>post.id==id)
        if(userInfo){
            return users.find(user=> user.id==userInfo.userId)
        }
     
}


export const findPostComment=(comments,id)=>{
    return comments.filter(comment => comment.postId==id)
}