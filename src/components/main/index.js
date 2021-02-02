import React, {useState} from 'react';
import styles from './Main.module.scss';
import Card from '../card';
import Slider from '../slider';

const Main = () => {

    const [cards, setCards] = useState([1,2,3])
    return (
        <div className={styles.Main}>
            <div className={styles.Main__wrapper}>
            <Slider/>
            <div className={styles.Main__cardWrapper}>
            <Card />
            {cards.map((element, index) => {
                return (
                    <Card/>)
            })}
            </div>
            </div>
            <div className={styles.Main__recommendations}>
            <div className={styles.Main__header}>
            <div className={styles.Main__userLogo}></div>
            
                <div className={styles.Main__userData}>
                <div className={styles.Main__userName}>Aidar Aukenov</div>
                <div className={styles.Main__userLocation}>Estonia, Tallinn</div>
                
                </div>
                <div className={styles.Main__switch}>
                    Switch account
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main;
