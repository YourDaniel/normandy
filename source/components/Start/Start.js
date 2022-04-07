import React from 'react';
import styles from './Start.scss';
import Layout from "../Layout";
import Button from "../Button";

export default function Start(props) {
    return (
        <Layout containered={false} title={false} back={false} withBackgroundImage={false}>
            <div className={styles.start}>
                <div className={styles.button}>
                    <Button to={'/menu'} id={'start-button'}>Начать</Button>
                </div>
            </div>
        </Layout>
        
    );
}
