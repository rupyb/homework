import React from 'react';


const Posts = ({ getPosts, handlePostClick }) => {
    console.log('users', getPosts);

//   if(getUsers) {
        return (getPosts.map(post => <div key={post.id} onClick={(e) => handlePostClick(e, post.id)}><a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 ">
            <small className="text-muted">{post.id}</small>
                <h5 className="mb-1">{post.title}</h5>
            </div>
            <p className="mb-1">{post.body}</p>
            <hr/>
        </a></div>))
//   } else {
//       return <h1>Null</h1>
//   }


    

    // return this.state.students.map(student => <StudentArrowFunction key={student.id} student={student} />);

}

export default Posts;