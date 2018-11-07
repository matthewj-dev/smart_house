import React, { Component } from "react";
import Accordion from "../components/Accordion/Accordion";
import AdminDialog from "../components/AdminDialog/AdminDialog";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <AdminDialog />
        <Accordion />
      </div>
    );
  }
}

export default AdminPage;
