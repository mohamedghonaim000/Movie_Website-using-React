
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locals/en.json'
import ar from './locals/ar.json'

(localStorage.getItem('lang'))?null:localStorage.setItem('lang','en')
const lang = localStorage.getItem('lang')
document.documentElement.dir = lang === "en" ? "ltr" : "rtl";


i18next.use(initReactI18next).init({
    resources:{
        en:{translation:en},
        ar:{translation:ar}
    },
    lng:localStorage.getItem('lang'),
    fallbackLng:'en',

})

export default i18next