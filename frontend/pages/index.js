import Link from 'next/link';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const transition = { duration: 3, yoyo: Infinity, ease: "easeInOut" };

export default function Home() {
  return (
    <Box className={styles.banner}>
      <video className={styles.video} autoPlay muted loop>
        <source src="https://storage.googleapis.com/coverr-main/mp4%2FOne-Swan.mp4" type="video/mp4" />
      </video>
      <h2 className={styles.videoHeader}>David Keimig</h2>
      <h2 id="h2">David Keimig</h2>
      <h1 className={styles.title}>
        Welcome to <Link href="/aboutme">My Site</Link>
      </h1>
    </Box>
  )
}
