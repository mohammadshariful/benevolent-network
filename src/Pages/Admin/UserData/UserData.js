import axios from "axios";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import useVolunteers from "../../../Hooks/useVolunteers";
import "./UserData.css";
const UserData = ({ volunter }) => {
  const { volunteers, setVolunteers } = useVolunteers();
  const { name, email, date, _id, organize } = volunter;
  const handeDelete = async (id) => {
    const url = `https://benevolent2022.herokuapp.com/user/${id}`;
    const confrim = window.confirm("Are you sure want to delete?");

    if (confrim) {
      const { data } = await axios.delete(url);
      if (data.deletedCount > 0) {
        const remaing = volunteers.filter((volunter) => volunter._id !== id);
        setVolunteers(remaing);
      }
    }
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{organize}</td>
      <td>
        <button onClick={() => handeDelete(_id)} className="delete-btn">
          <FaTrashAlt className="delete-icon" />
        </button>
      </td>
    </tr>
  );
};

export default UserData;
