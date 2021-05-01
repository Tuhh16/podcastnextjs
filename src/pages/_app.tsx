import '../style/global.scss';

import { Header } from '../components/Header/index';
import { Player } from '../components/Player/index';

import styles from '../style/app.module.scss';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { PlayerContextProvider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeContextProvider>
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    </ThemeContextProvider>
  )

}

export default MyApp
