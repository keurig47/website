import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
};

export default function Home() {
  return (
    <Box sx={styles.container}>
      <Hero />
    </Box>
  );
}
