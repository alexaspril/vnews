import styles from './ThemeToggle.module.css'
import { useTheme } from '../../../../../../context/ThemeContext'

import Dark from './assets/Dark.svg?react'
import Light from './assets/Light.svg?react'
import System from './assets/System.svg?react'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    const handleThemeChange = (e) => {
        toggleTheme(e.target.value);
    };

    return (
        <div className={styles.ThemeToggle}>
            
            <button
                className={`${styles.Buttons} ${theme === 'light' ? styles.Active : ''}`}
                onClick={() => toggleTheme('light')}
            >
                <Light className={`${theme === 'light' ? styles.ActiveSvgStroke : styles.InActiveSvgStroke}`}/>
            </button>
            <button
                className={`${styles.Buttons} ${theme === 'dark' ? styles.Active : ''}`}
                onClick={() => toggleTheme('dark')}
            >
                <Dark className={`${theme === 'dark' ? styles.ActiveSvg : styles.InActiveSvg}`}/>
            </button>
            <button
            className={`${styles.Buttons} ${theme === 'system' ? styles.Active : ''}`}
            onClick={() => toggleTheme('system')}
            >
                <System className={`${theme === 'system' ? styles.ActiveSvg : styles.InActiveSvg}`}/>
            </button>

        </div>
   )
}

export default ThemeToggle