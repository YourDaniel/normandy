import React, {useState} from 'react';
import styles from './Collections.scss';
import Layout from "../Layout";
import Card3D from "../Card3D";
import {getLanguageData} from "../../localisation";
import {useSelector} from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import InteractiveCard from "../InteractiveCard";

export default function Collections(props) {
    const [activeTab, setActiveTab] = useState(0);
    const [activeCard, setCard] = useState({
        nation: 'usa',
        index: 0
    });
    const {soldiers} = useSelector(state => state.data)

    
    const {
        collections: {usa, germany, fields}
    } = getLanguageData();

    const tabs = [
        {
            id: 0,
            text: usa,
            type: 'usa'
        },
        {
            id: 1,
            text: germany,
            type: 'germany'
        },
        
    ]
    
    const cardsData = {
        usa: [],
        germany: []
    }
   
    for (let soldierType in soldiers) {
        const soliderData = soldiers[soldierType];
        // For each country
        for (const country in soliderData.countries) {
            // So many times how number of soldiers is
            for (let i = 0; i < soliderData.count_at_group; i++) {
                // For every group
                for (const group in soliderData.groups) {
                    // We create a soldier
                    cardsData[country].push({
                        // Image name by default format:
                        // country name + image name + group name + soldier number + file format
                        fullImageName: `${country}-${soliderData.image_base_name}-${group}-${i + 1}.png`,
                        info: soliderData.actions
                    })
                }
            }
        }
    }
    
    const cardsElems = {}
    
    for (const cardsKey in cardsData) {
        cardsElems[cardsKey] = new Array (cardsData[cardsKey].length).fill({}).map((data, index) => {
            return (
                <div className={styles.card} key={cardsKey + index}>
                    <Card3D data={cardsData[cardsKey][index]} index={index} nation={cardsKey} onClick={setCard}/>
                </div>
            )
        })
    }
    
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        centerPadding: "2rem",
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: false,
        draggable: false,
   
        touchMove: false,
        rows: 2,
    };

    
    return (
        <Layout containered={true} title={getLanguageData().menu.collections} back={'/'} withBackgroundImage={false} shadowed={true}>
            <div className={styles.collections}>
                <div className={styles.collections__content}>
                    <ul className={styles.tabs}>
                        {tabs.map((tab) => {
                            return (
                                <li key={tab.id}
                                    onClick={setActiveTab.bind(this, tab.id)}
                                    className={`${styles.tab} ${tab.id === activeTab ? styles.active : ''}`}>
                                    {tab.text}
                                </li>
                            )
                        })}
    
                    </ul>
                    <Slider className={styles.cards} {...settings} key={'slider_' + activeTab}>
                        {cardsElems[tabs[activeTab].type]}
                    </Slider>
                </div>
                <div>
                    <InteractiveCard
                        nation={tabs[activeTab].type}
                        image={cardsData[tabs[activeTab].type][activeCard.index].fullImageName}
                    />
                </div>
            </div>
        </Layout>
  
    );
}
