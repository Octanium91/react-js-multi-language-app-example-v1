import React from 'react';
// you need import 'react'!!!
// for supporting use massive, like in 'Text' propertie

// in App.js 'state.LngDefault' use 'en'
// if you, for example comment propertie 'Text' in 'ru' or 'ua' language
// 'Text' propertie will be loaded from 'en' language
export default {
en: {
    Language: "Language:",
    Text: ["Edit ",<code key="1">src/App.js</code>," and save to reload."],
    LinkLearnReact: "Learn React",},    
ru: {
    Language: "Язык:",
    Text: ["Отредактируйте ",<code key="1">src/App.js</code>," и сохраните для перезагрузки."],
    LinkLearnReact: "Учить React",},
ua: {
    Language: "Мова:",
    Text: ["Відредагуйте ",<code key="1">src/App.js</code>," та збережіть для перезавантаження."],
    LinkLearnReact: "Вчити React",},
};
