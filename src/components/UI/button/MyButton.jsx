import React from "react";
import classes from './MyButton.module.css';


const MyButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>  {/* все пропсы которые мы предадим в компонент myButton будут отправляться в эту кнопку, например disabled (в App.js)*/}
            {children}
        </button>
    )
};

export default MyButton;