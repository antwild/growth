import React, { useState } from "react";
import style from "./ConnectorSteps.module.css";

const ConnectorSteps = ({ connector }) => {

    // Using state to animate the length of the data transfer bar between connector steps
    const [ progressBarOne, setProgressBarOne ] = useState({ width: "0%"});
    const [ progressBarTwo, setProgressBarTwo ] = useState({ width: "0%"});
    
    // Increasing the data transfer bar by 1%
    let widthOfBarOne = Number(progressBarOne.width.substring(0, progressBarOne.width.indexOf("%"))) + 1;
    let widthOfBarTwo = Number(progressBarTwo.width.substring(0, progressBarTwo.width.indexOf("%"))) + 1;

    // Rerender with the 1% longer data transfer bar
    // Only begin the transfer animation between steps 2 and 3 when steps 1 and 2 is complete
    setTimeout(function() {
        if(widthOfBarOne <= 100){
            setProgressBarOne({width: `${widthOfBarOne + "%"}`});            
        } else if (widthOfBarTwo <= 100) {
            setProgressBarTwo({width: `${widthOfBarTwo + "%"}`}); 
        };
    }, 15); 

    return (
        <div className={style.stepsContainer}>
            <div className={`${style.stepBorder} ${style.stepIconContain}`} >
                <img className={style.stepIcon} src="/manualTriggerIcon.svg"/>
            </div>
            <div className={`${style.stepBorder} ${style.barBorder}`}>
                <span style={progressBarOne} className={style.bar}></span>
            </div>
            <div className={`${style.stepBorder} ${style.stepIconContain}`} >
                <img className={style.stepIcon} src={connector.logo_0}/>
            </div>
            <div className={`${style.stepBorder} ${style.barBorder}`}>
                <span style={progressBarTwo} className={style.bar}></span>
            </div>
            <div className={`${style.stepBorder} ${style.stepIconContain}`} >
                <img className={style.stepIcon} src={connector.logo_1}/>
            </div>
            <div className={style.stepName}>Manual Trigger</div>
            <div></div>
            <div className={style.stepName}>{connector.name_0}</div>
            <div></div>
            <div className={style.stepName}>{connector.name_1}</div>
        </div>
    )
}

export default ConnectorSteps;