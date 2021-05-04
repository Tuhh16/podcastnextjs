import Link from 'next/link';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'; 
import { IoSunny, IoMoon } from "react-icons/io5";

import styles from './styles.module.scss';

import { useTheme } from '../../contexts/ThemeContext';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    const { theme, toogleTheme } = useTheme();

    return (
        <header className={`
                    ${styles.headerContainer}
                    ${theme === "light" ?
                      styles.light
                    : styles.dark      
                    }`
                }>
            <Link href="/">
                <a>
                    <img src="/logo.svg" alt="Podcastr" />
                </a>
            </Link>
            <p>O melhor para você ouvir, sempre</p>
            <span>{currentDate}</span>
            <button className={styles.buttonTheme} 
                onClick={toogleTheme}
            >
                { theme === "light" ? (
                    <IoMoon />
                ) : (
                    <IoSunny />
                )
                }
            
            </button>
        </header>
    );
}