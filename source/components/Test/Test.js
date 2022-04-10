import React, {useState} from 'react';
import styles from './Test.scss';
import Layout from "../Layout";
import Button from "../Button";

export default function Test(props) {
    const [post_input_value, change_post_input_value] = useState('')
    
    async function onPostSend() {
        const data = {
            level: 1
        };
    
        let response = await fetch('/api/' + post_input_value, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
    
        let result = await response.json();
        alert(result.message);
    }
    
    return (
        <Layout containered={true} title={'TEST PAGE'} back={'/'} withBackgroundImage={false} shadowed={true}>
            <div className={styles.test}>
                <h2>POST</h2>
                <input type={'text'} name={'post_address'} value={post_input_value} onChange={(e) => change_post_input_value(e.target.value)}/>
                <p>Result: <b>/api/{post_input_value}</b></p>
                <p>Value: <b>{`{ level: 1 }`}</b></p>
                <p>
                    <Button onClick={onPostSend}>SEND</Button>
                </p>
                <hr/>
                <br/>
                <br/>dsa
                <br/>
                
                <h2>GET</h2>
                <hr/>
            </div>
        </Layout>
       
    );
}
