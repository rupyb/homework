import React from 'react';


const Users = ({ getUsers, handleUserClick }) => {
    console.log('users', getUsers);

//   if(getUsers) {
        return (getUsers.map(user => <div key={user.id} onClick={(e) => handleUserClick(e, user.id)}><a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{user.name}</h5>
            </div>
            <p className="mb-1">{user.phone}</p>
            <p className="mb-1">{user.website}</p>
            <hr/>
        </a></div>))
//   } else {
//       return <h1>Null</h1>
//   }


    

    // return this.state.students.map(student => <StudentArrowFunction key={student.id} student={student} />);

}

export default Users;