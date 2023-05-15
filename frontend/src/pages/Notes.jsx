import React, { useEffect, useState } from "react";
import "./Notes.css";
import { createRoute, updateRoute } from "../utils/API";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notes = ({ home }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({
    title: "",
    body: "",
  });
  const handleChange = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleData = async (e) => {
    e.preventDefault();
    if (note.title === "") {
      toast.error("You cannot leave any field empty");
    } else if (note.body === "") {
      toast.error("You cannot leave any field empty");
    } else {
      const res = await axios.post(createRoute, note);
      if (res) {
        toast.success("Note created sucessfully", {
          position: "bottom-right",
        });
      }
      navigate("/dashboard");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (note.title === "") {
      toast.error("You cannot leave any field empty");
    } else if (note.body === "") {
      toast.error("You cannot leave any field empty");
    } else {
      const res = await axios.put(`${updateRoute}/${id}`, note);
      if (res) {
        toast.success("Note updated sucessfully", {
          position: "bottom-right",
        });
      }
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <div className="noteContainer">
        <input
          type="text"
          name="title"
          id=""
          className="titleInput"
          placeholder="Enter your title"
          onChange={handleChange}
          required
        />
        <textarea
          name="body"
          id=""
          cols="30"
          rows="10"
          className="bodyInput"
          onChange={handleChange}
          required
          placeholder="Enter your notes"
        ></textarea>
        {home ? (
          <>
            <button className="btn" onClick={handleData}>
              Create
            </button>
            <Link to="/dashboard">
              <button className="btn mng">Manage notes</button>
            </Link>
          </>
        ) : (
          <>
            <button className="btn" onClick={handleUpdate}>
              Update
            </button>

            <Link to="/dashboard">
              <button className="btn mng">Manage notes</button>
            </Link>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Notes;
