import React from 'react';
import "./Button.css";

export const Button = (props) => {
    return <button className={props.className} onClick={props.handleClick}>{props.text}</button>;
};