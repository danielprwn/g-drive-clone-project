import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import { auth, provider } from "./firebase";
import { useState } from 'react';
import GDriveLogo from './graphics/G_DRIVE.png'

function App() {
  const [user, setUser] = useState()
  /*const [user, setUser] = useState({
    displayName: "your name",
    email: "your e-mail",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon-thumb.png"
  })*/

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app_main">
              <Sidebar />
              <FilesView />
            </div>
          </>
        ) : (
            <div className='app_login'>
              <img src={GDriveLogo} alt="Google Drive" />
              <button onClick={handleLogin}>LOG IN!</button>
            </div>
          )
      }
    </div>
  );
}

export default App;
