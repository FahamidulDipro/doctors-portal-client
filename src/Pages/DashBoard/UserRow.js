import React from "react";

const UserRow = ({ user, index }) => {
  const { email } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        <button
          className="btn btn-xs bg-blue-500 text-white"
          onClick={makeAdmin}
        >
          Make Admin
        </button>
      </td>
      <td>
        <button className="btn btn-xs bg-red-500 text-white">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
