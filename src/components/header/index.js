import React from 'react';
import {Link} from 'react-router-dom';
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
                <Link to="/" className={styles.Header__item}>
                    <HomeOutlinedIcon/>
                </Link>
                <div className={styles.Header__item}><SendOutlinedIcon/></div>
                <div className={styles.Header__item}><ExploreOutlinedIcon/></div>
                <div className={styles.Header__item}><FavoriteBorderIcon/></div>
                <Link to="/profile" className={styles.Header__item}></Link>
            </div>
        </div>
    )
}

export default Header;