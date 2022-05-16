import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data:users,isLoading} = useQuery('users',()=>fetch('http://localhost:5000/users',{
        method:"GET",
        headers:{
           authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th>Serial No</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   
   {
       users.map((user,index)=><UserRow key={user._id} user={user} index={index}></UserRow>)
   }
    


    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;