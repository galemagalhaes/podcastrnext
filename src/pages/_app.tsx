import '../styles/globals.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player';
import {PlayerContextProvider} from '../context/playerContext'

import styles from '../styles/app.module.scss';


function MyApp({ Component, pageProps }) {
    return (
    <PlayerContextProvider>
    <div className = {styles.wrapper}>
      <main>
        <Header/>
        <Component{...pageProps}/>      
      </main>
      <Player/>      
    </div>
    </PlayerContextProvider>
  )   
}

export default MyApp
