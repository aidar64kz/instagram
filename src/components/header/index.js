import React from 'react';
import styles from './Header.module.scss';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.Header__logo}>Instagram</div>
            <input className={styles.Header__search} type="text" placeholder="Search"/>
            <div className={styles.Header__wrapper}>
                <div className={styles.Header__item}>
                    <HomeOutlinedIcon/>
                </div>
                <div className={styles.Header__item}><SendOutlinedIcon/></div>
                <div className={styles.Header__item}><ExploreOutlinedIcon/></div>
                <div className={styles.Header__item}><FavoriteBorderIcon/></div>
                <div className={styles.Header__item}></div>
            </div>
        </div>
    )
}

export default Header;