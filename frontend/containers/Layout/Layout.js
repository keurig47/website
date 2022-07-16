import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import styles from "../../styles/Layout.module.css";

const Layout = ({ children }) => (
  <>
    <AppBar>
      <Toolbar>
        <Typography>David Keimig</Typography>
      </Toolbar>
    </AppBar>
    <main className={styles.main}>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
