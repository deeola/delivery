import React from 'react';
import { useTranslation } from 'react-i18next';
import './Heading.css';


const arFont={
    fontFamily: 'Cairo'
}

export const H5 = ({text, centered}) => {
    

    const {i18n} = useTranslation()
  return (
    <h5 className= {`heading-five ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arFont : {}} >{text}</h5>
  )
}


export const H2 = ({text, centered, download}) => {
    const {i18n} = useTranslation()
    return (
        <h2 className={`heading-two ${centered ? 'centered' : ''} ${download ? 'download' : ''}`}  style={i18n.language === 'ar' ? arFont : {}}>{text}</h2>
    )
}

export const HeadingText = ({text, centered}) => {
    const {i18n} = useTranslation()
    return (
        <p className={`heading-text ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arFont : {}}>{text}</p>
    )
}


export const Text = ({text, centered}) => {
    const {i18n} = useTranslation()
    return (
        <p className={`text ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arFont : {}}>{text}</p>
    )
}


export const TextHeading = ({text, centered}) => {
    const {i18n} = useTranslation()
    return (
        <h4 className={`text-heading ${centered ? 'centered' : ''}`} style={i18n.language === 'ar' ? arFont : {}}>{text}</h4>
    )
}
