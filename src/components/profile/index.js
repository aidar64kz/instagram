import React from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={styles.Profile}>
            
            <div className={styles.Profile__wrapper}>
            <div className={styles.Profile__logo}></div>
            <div className={styles.Profile__userName}>Aidar Aukenov</div>
            <button className={styles.Profile__button}>Edit profile</button>
            </div>
        </div>
    )
}

export default Profile;
