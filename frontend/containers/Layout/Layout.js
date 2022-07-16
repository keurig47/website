import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

const styles = {
  main: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
};

const Layout = ({ children }) => (
  <>
    <NavBar />
    <Box as="main" sx={styles.main}>
      {children}
    </Box>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
