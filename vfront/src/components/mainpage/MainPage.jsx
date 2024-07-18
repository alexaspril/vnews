import styles from './MainPage.module.css'

import Header from './ui/Header/Header'
import Content from './ui/Content/Content'

const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <Header />
            <div className={styles.MainPageContent}>
                <Content />
            </div>
            

        </div>
   )
}

export default MainPage