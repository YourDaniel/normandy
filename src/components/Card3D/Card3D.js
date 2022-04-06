import React, { Component } from 'react';
import styles from './Card3D.scss';
import ReactCardFlip from 'react-card-flip';

export default class Card3D extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    render() {
        const {isFlipped} = this.state;
        const {data: {fullImageName, info}, nation, index} = this.props;
        
        return (
            <div className={styles.card}>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div className={styles.card__front} >
                        <img src={`assets/${nation}/${fullImageName}`} alt=""/>
                    </div>
                    
                    <div>
                        <img src={`assets/${nation}/${nation}-back.png`} alt=""/>
                    </div>
                </ReactCardFlip>
                <div className={styles.card__info} onClick={this.props.onClick.bind(this, {nation, index})}>
                    <button className={styles.button}>
                        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>arrow-pointer-glyph</title><path d="M-5.14,14.67,238.59,506.35a10.15,10.15,0,0,0,9.1,5.65,9.9,9.9,0,0,0,1.72-.15,10.17,10.17,0,0,0,8.37-8.78l25.85-213.65,226.09-37.89a10.16,10.16,0,0,0,2.56-19.24L8.2.93A10.16,10.16,0,0,0-5.14,14.67Z" /></svg>
                    </button>
                    <button className={styles.button} onClick={this.handleClick}>
                        <svg className={`${styles.svg} ${isFlipped ? styles.isFlipped : null}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.667 469.333H213.333c-94.842 0-170.667-75.825-170.667-170.667S118.491 128 213.333 128h225.83l-48.915 48.915c-8.331 8.331-8.331 21.839 0 30.17s21.839 8.331 30.17 0l85.333-85.333.011-.012c.492-.493.959-1.012 1.402-1.551.203-.247.379-.507.568-.76.227-.304.463-.601.674-.917.203-.303.379-.618.565-.93.171-.286.35-.565.508-.86.17-.318.314-.645.467-.969.145-.307.298-.609.428-.923.13-.315.235-.636.35-.956.121-.337.25-.67.355-1.015.097-.32.168-.645.249-.968.089-.351.187-.698.258-1.056.074-.375.118-.753.172-1.13.044-.311.104-.618.135-.933.138-1.4.138-2.811 0-4.211-.031-.315-.09-.621-.135-.932-.054-.378-.098-.756-.173-1.13-.071-.358-.169-.704-.258-1.055-.081-.324-.152-.649-.249-.969-.104-.344-.233-.677-.354-1.013-.115-.32-.22-.642-.35-.957-.13-.314-.283-.616-.428-.922-.153-.325-.297-.652-.467-.97-.157-.294-.337-.573-.507-.859-.186-.312-.362-.627-.565-.931-.211-.315-.446-.612-.673-.915-.19-.254-.367-.515-.57-.762a21.46 21.46 0 0 0-1.402-1.551l-.011-.012-85.333-85.335c-8.331-8.331-21.839-8.331-30.17 0-8.331 8.331-8.331 21.839 0 30.17l48.915 48.915h-225.83C94.927 85.333 0 180.261 0 298.667S94.927 512 213.333 512h277.333c11.782 0 21.333-9.551 21.333-21.333s-9.55-21.334-21.332-21.334z"/></svg>
                    </button>
                </div>
     
            </div>
        )
    }
}