import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box className={styles.banner}>
      <Hero />
      <h1 className={styles.title}>
        Welcome to
        <Link href="/aboutme">My Site</Link>
      </h1>
    </Box>
  );
}
