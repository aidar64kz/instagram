import React, {useState, useRef} from 'react';
import styles from './Slider.module.scss';
import cn from 'classnames';

const Slider = () => {
    const slider = useRef(null)
    const [items, setItems] = useState([1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12])

    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);

    const itemHandler = () => {
        alert('user n1')
    }

    let position = 0;
    const prevHandler = () =>{
        if (position === 0) {
            setPrev(true)
        } else {
            setPrev(false)
            position += 300;
            slider.current.childNodes.forEach((element)=>{
            element.style = `transform: translateX(${position}px)`
        })
        }
    }
    const nextHandler = () =>{
        if (position === -(items.length - 6)+100) {
            setNext(true)
            setPrev(false)
        } else {
            setPrev(false)
            position -= 300;
            slider.current.childNodes.forEach((element)=>{
            element.style = `transform: translateX(${position}px)`
        })
        }
        
    }

    return (
        <div className={styles.Slider}>
            <div className={styles.Slider__track} ref={slider}>
                {items.map(()=>{
                    return(
                    <div className={styles.Slider__item} onClick={itemHandler}> </div>
                )})}
            </div>
            <button className={cn(styles.Slider__button, styles.Slider__button_prev)} onClick={prevHandler}>{`<`}</button>
            <button className={cn(styles.Slider__button, styles.Slider__button_next)} onClick={nextHandler}>{`>`}</button>
        </div>
    )
}

export default Slider;
