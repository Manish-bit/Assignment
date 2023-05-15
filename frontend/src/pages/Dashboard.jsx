import React, { useEffect, useState } from "react";
import axios from "axios";
import { deleteNoteRoute, getNoteRoute } from "../utils/API";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(getNoteRoute);
      setData(res.data);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(`${deleteNoteRoute}/${id}`);
    if (res) {
      toast.error("Note deleted sucessfully please refresh the page", {
        position: "bottom-right",
      });
    }
  };
  console.log(data);
  return (
    <div className="dashboard">
      <div className="dashboardContainer">
        {data.map((arr, index) => {
          return (
            <>
              <div className="notesContainer" key={index}>
                <h3>{arr.title}</h3>
                <p>{arr.body}</p>
                <Link to={`/${arr._id}`}>
                  <button className="btn update">Update</button>
                </Link>
                <button
                  onClick={() => handleDelete(arr._id)}
                  className="btn delete"
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
        <Link to="/">
          <button className="btnCreate">Create new note</button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
