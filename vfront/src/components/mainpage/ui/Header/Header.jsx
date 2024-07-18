import styles from './Header.module.css'

import Logo from './ui/Logo/Logo'
import ThemeToggle from './ui/ThemeToggle/ThemeToggle'
import LanguageSelector from './ui/LanguageSelector/LanguageSelector'

const Header = () => {
    return (
        <header className={styles.Header}>
            <Logo />
            <ThemeToggle />
            <LanguageSelector />
        </header>
   )
}

export default Header