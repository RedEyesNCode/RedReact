import React, { Component } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const token = useSelector(state => state.token);
    return (
        <footer className="main-footer">
          {token}
        </footer>
    )
}
export default Dashboard