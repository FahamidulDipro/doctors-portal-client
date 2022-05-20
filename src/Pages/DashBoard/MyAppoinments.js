import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppoinments = () => {
  const navigate = useNavigate();
  const [appoinments, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/bookings?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setAppoinments(data));
    }
  }, [user]);
  return (
    <div>
      <h1>My Appoinments: {appoinments.length}</h1>
      {/* {console.log(appoinments)} */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appoinments.map((appoinment, index) => (
              <tr key={appoinment._id}>
                <th>{index + 1}</th>
                <td>{appoinment.patientName}</td>
                <td>{appoinment.date}</td>
                <td>{appoinment.slot}</td>
                <td>{appoinment.treatment}</td>
                {/* {
                  console.log(appoinment)
                } */}
                <td>{(appoinment?.price&& !appoinment?.paid) &&<Link to={`/dashboard/payment/${appoinment._id}`}><button className="btn btn-xl btn-success">Pay</button></Link>}{(appoinment?.price&& appoinment?.paid) &&<span className="font-bold text-success">Paid</span>}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinments;
