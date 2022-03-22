import React from 'react';


export default function LanguagesList({languages}) {
  //console.log(JSON.stringify(languages));
  return (
  <div >
    {languages ? Object.values(languages).map(langVal => <li key={langVal}> {langVal} </li>) : "No languages"}
  </div>
  );
}
// Object keys , entries code for practice :
//{languages ? Object.keys(languages).map(langKey => <li key={langKey}> {languages[langKey]} </li>) : "No languages"}
//{languages ? Object.entries(languages).map(([langKey, langVal]) => <li key={langKey}> {langKey} - {langVal} </li>) : "No languages"}