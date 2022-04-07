import React, { Component } from 'react';
import styles from './_TemplateClass.scss';

export default class _TemplateClass extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles._TemplateClass}></div>
        );
    }
}