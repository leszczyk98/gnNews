import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    countries: {
      us: 'United States',
      pl: 'Poland',
      ar: 'Argentina',
      au: 'Australia',
      at: 'Austria',
      be: 'Belgium',
      br: 'Brazil',
      bg: 'Bulgaria',
      ca: 'Canada',
      ch: 'Switzerland',
      cn: 'China',
      co: 'Colombia',
      cu: 'Cuba',
      cz: 'Czech Republic',
      de: 'Germany',
      eg: 'Egypt',
      fr: 'France',
      gb: 'United Kingdom',
    },
    modal: {
      no_image: 'Missing image',
      description: 'Description:',
      author: 'Author:',
      date: 'Date:',
      unknown: 'Unknown',
      missing: 'Missing',
    },
    other: {
      click: 'Click',
      articles: '{{ count }} articles',
      articles_one: '{{ count }} article',
      home_page: 'Home page, please select a country',
    },
  },
  pl: {
    countries: {
      us: 'Stany Zjednoczone',
      pl: 'Polska',
      ar: 'Argentyna',
      au: 'Australia',
      at: 'Austria',
      be: 'Belgia',
      br: 'Brazylia',
      bg: 'Bułgaria',
      ca: 'Kanada',
      ch: 'Switzerland',
      cn: 'Chiny',
      co: 'Kolumbia',
      cu: 'Kuba',
      cz: 'Czechy',
      de: 'Niemcy',
      eg: 'Egipt',
      fr: 'Francja',
      gb: 'Wielka Brytania',
    },
    modal: {
      no_image: 'Brak zdjęcia',
      description: 'Opis:',
      author: 'Autor:',
      date: 'Data:',
      unknown: 'Nieznany',
      missing: 'Brak',
    },
    other: {
      click: 'Klik',
      articles: '{{ count }} artykułów',
      articles_one: '{{ count }} artykuł',
      home_page: 'Strona główna, proszę wybrać państwo',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
