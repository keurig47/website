import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import styles from '../../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>
            David Keimig
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        { children }
      </main>
    </>
  )
}

export default Layout;
