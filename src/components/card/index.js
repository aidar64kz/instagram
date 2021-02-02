import React from 'react';
import styles from './Card.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const Card = () => {
    return (
        <div className={styles.Card}>
            <div className={styles.Card__header}>
                <div className={styles.Card__userLogo}></div>
            
                <div className={styles.Card__userData}>
                <div className={styles.Card__userName}>Aidar Aukenov</div>
                <div className={styles.Card__userLocation}>Estonia, Tallinn</div>
                
                </div>
                <div className={styles.Card__burger}>
                    ...
                </div>
            </div>

            <div className={styles.Card__content}></div>
            <div className={styles.Card__communication}>
            <span><FavoriteBorderIcon/></span>
            <span><ChatBubbleOutlineOutlinedIcon/></span>
            <span><SendOutlinedIcon/></span>
            </div>
            <div className={styles.Card__footer}>
                <input className={styles.Card__inputComment} type="text" placeholder="Write a comment"/>
                <div className={styles.Card__button}>Post</div>
            </div>
        </div>
    )
}

export default Card;
