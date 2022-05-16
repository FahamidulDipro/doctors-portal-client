import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success(`hooray! ${email} is now an admin!`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role ? (
          <button className="btn btn-xs bg-orange-500 text-white btn-disabled">
            Admin
          </button>
        ) : (
          <button
            className="btn btn-xs bg-blue-500 text-white"
            onClick={makeAdmin}
          >
            Make Admin
          </button>
        )}
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
