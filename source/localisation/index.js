import React, {useContext} from 'react';

import en from './en';
import ru from './ru';
import pl from './pl';
import de from './de';

const LanguagesData = {
    en,
    ru,
    pl,
    de
}
const LanguageContext = React.createContext(ru);
const {
    Provider: LanguageProvider,
    Consumer: LanguageConsumer
} = LanguageContext;

const getLanguageData = function () {
    return useContext(LanguageContext)
}

export {
    LanguageContext,
    LanguageProvider,
    LanguageConsumer,
    LanguagesData,
    getLanguageData
}
