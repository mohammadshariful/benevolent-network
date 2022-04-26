import React from "react";
import { Table } from "react-bootstrap";
import UserData from "../UserData/UserData";
import "./VolunteerList.css";
const users = [1, 2, 3, 4, 5];
const VolunteerList = () => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Registating date</th>
            <th>Volunteer list</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserData />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VolunteerList;
