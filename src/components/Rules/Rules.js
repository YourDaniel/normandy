import React, {useState} from 'react';
import styles from './Rules.scss';
import Layout from "../Layout";
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import PdfFile from '../../files/rules.pdf';
import Button from "../Button";
import arrow from './assets/active.svg';
import {getLanguageData} from "../../localisation";

export default function Rules(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(2);
    
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }
    const {
        menu:
            {rules: rulesTitle},
        rules: { open, authors, adaptation, page, of},
    } = getLanguageData();
    
    return (
        <Layout containered={true} title={rulesTitle} back={'/'}>
            <div className={styles.rules}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.text}>
                            <p>{authors}: <br/><b>David Thompson & Trevor Benjamin</b></p>
                            <p>{adaptation}:  <br/><b>Egor Dyachenko</b></p>
                        </div>
                        <Button type={'primary'} to={'assets/rules.pdf'} target={"_blank"}>{open}</Button>
                    </div>
                    <div className={styles.right}>
                        <button className={`${styles.button} ${styles.left} ${pageNumber <= 2 ? styles.disabled : ''}`} onClick={() => {
                            if (pageNumber > 2) {
                                setPageNumber(pageNumber - 2)
                            }
                        }}>
                            <img src={arrow} alt=""/>
                        </button>
                        <div className={styles.viewer}>
                            <Document
                                file={PdfFile}
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={<div>Please wait</div>}
                            >
                               <div className={styles.pages}>
                                   <Page width={1260} className={styles.page} pageNumber={pageNumber}/>
                                   <Page width={1260} className={styles.page} pageNumber={pageNumber + 1}/>
                               </div>
                            </Document>
                            <p  className={styles.description}>{page} {pageNumber} {of} {numPages - 2}</p>
                        </div>
                        <button className={`${styles.button} ${styles.right} ${pageNumber >= numPages - 2 ? styles.disabled : ''}`} onClick={() => {
                            if (pageNumber < numPages - 2) {
                                setPageNumber(pageNumber + 2)
                            }
                        }}>
                            <img src={arrow} alt=""/>
                        </button>
                    </div>
                </div>
          
            </div>

        </Layout>
    
    );
}
