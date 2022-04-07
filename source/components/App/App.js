import React from 'react';
import styles from './App.scss';
import { createBrowserHistory } from "history";
import {Router, Route, Switch} from "react-router-dom";
const history = createBrowserHistory();
import Menu from "../Menu";
import Settings from "../Settings";
import Rules from "../Rules";
import Collections from "../Collections";
import ScrollToTop from "react-router-scroll-top";
import {useSelector} from "react-redux";
import {LanguageProvider, LanguagesData} from '../../localisation';
import AudioController from "../AudioController";
import Start from "../Start";
import Personalization from "../Personalization";

export default function App(props) {
    const {activeLanguage} = useSelector(state => state.settings.languages)
  
    
    function pageResize() {
        let defaultWidth = 1920,
            defaultHeight = 1080,
            defaultRatio = defaultWidth/defaultHeight,
            normalSize = 10,
            bodyElem = document.querySelector('html');
        
        window.addEventListener('resize', function () {
            const windowWidth = window.outerWidth;
            const windowHeight = window.innerHeight;
            const realRatio = windowWidth / windowHeight;
            
            let tmpHeight = 0,
                tmpWidth = 0;
            
            if (defaultRatio < realRatio) {
                tmpHeight = windowHeight;
                tmpWidth = tmpHeight * defaultRatio;
            } else {
                tmpHeight = tmpWidth / defaultRatio;
                tmpWidth = windowWidth;
            }
            
            let percentWidth = tmpWidth/defaultWidth;
            let percentHeight = tmpHeight/defaultHeight;
            
        
            if(percentWidth > 1){
                percentWidth = 1;
            }
            bodyElem.style.fontSize = normalSize*percentWidth + 'px';
            
        })
        
        window.dispatchEvent(new Event('resize'));
    }
    pageResize()
    
    return (
        <div className={styles.app}>
            <LanguageProvider value={LanguagesData[activeLanguage]}>
                <Router history={history}>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path='/start'>
                                <Start/>
                            </Route>
                            <Route exact path='/'>
                                <Menu/>
                            </Route>
                            <Route exact path='/personalization'>
                                <Personalization/>
                            </Route>
                            <Route exact path='/settings'>
                                <Settings/>
                            </Route>
                            <Route exact path='/rules'>
                                <Rules/>
                            </Route>
                            <Route exact path='/collections'>
                                <Collections/>
                            </Route>
                        </Switch>
                    </ScrollToTop>
                </Router>
            </LanguageProvider>
            <AudioController/>
        </div>
    );
}
