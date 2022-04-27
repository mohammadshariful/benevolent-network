import React from "react";
import { Table } from "react-bootstrap";
import useVolunteers from "../../../Hooks/useVolunteers";
import UserData from "../UserData/UserData";
import "./VolunteerList.css";

const VolunteerList = () => {
  const { volunteers } = useVolunteers();

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
          {volunteers.map((volunter) => (
            <UserData key={volunter._id} volunter={volunter} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VolunteerList;
