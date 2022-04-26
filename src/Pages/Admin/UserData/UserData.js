import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./UserData.css";
const UserData = () => {
  return (
    <tr>
      <td>name</td>
      <td>name</td>
      <td>name</td>
      <td>name</td>
      <td>
        <button className="delete-btn">
          <FaTrashAlt className="delete-icon" />
        </button>
      </td>
    </tr>
  );
};

export default UserData;
