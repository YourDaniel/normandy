import React from 'react';
import styles from './Game.scss';
import Layout from "../Layout";
import Field from "../Field";

export default function Game(props) {
    return (
        <Layout containered={false} title={false} back={false} withBackgroundImage={false} shadowed={false}>
            <div className={styles.game}>
                <div className={styles.battleground}>
                    <Field/>
                </div>
                
            </div>
        </Layout>
    );
}
