import React from 'react';
import './Heading.css';


export const H5 = ({text, centered}) => {
  return (
    <h5 className= {`heading-five ${centered ? 'centered' : ''}`} >{text}</h5>
  )
}


export const H2 = ({text, centered, download}) => {
    return (
        <h2 className={`heading-two ${centered ? 'centered' : ''} ${download ? 'download' : ''}`} >{text}</h2>
    )
}

export const HeadingText = ({text, centered}) => {
    return (
        <p className={`heading-text ${centered ? 'centered' : ''}`}>{text}</p>
    )
}


export const Text = ({text, centered}) => {
    return (
        <p className={`text ${centered ? 'centered' : ''}`}>{text}</p>
    )
}


export const TextHeading = ({text, centered}) => {
    return (
        <h4 className={`text-heading ${centered ? 'centered' : ''}`}>{text}</h4>
    )
}
