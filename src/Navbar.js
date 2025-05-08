import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#080080",
          overflow: "hidden",
          position: "relative",
          width: "100%",
          display: "flex",
          maxHeight: "116px",
        }}
      >
        <Toolbar>
          <div style={{ display: "flex", flex: "1" }}>
            <Link
              to="/"
              style={{
                display: "flex",
                flex: "1",
                float: "left",
                display: "block",
                color: "#f2f2f2",
                textAlign: "center",
                padding: "14px 20px",
                textDecoration: "none",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <img
                src={logo}
                alt="App Logo"
                style={{
                  cursor: "pointer",
                  width: "181px",
                  height: "100px",
                }}
              />
            </Link>

            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "auto",
                flex: "1",
              }}
            >
              <div style={{ display: "flex", gap: "40px" }}>
                <Link to="/" style={navStyle}>
                  Dashboard
                </Link>
                <Link to="/reports" style={navStyle}>
                  Reports
                </Link>
                <Link to="/logs" style={navStyle}>
                  Logs
                </Link>
                <Link to="/installation" style={navStyle}>
                  Installation
                </Link>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const navStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;
