import React from 'react';
import './SidePanel.css'

function SidePanel(props) {
    return(
        <>
        <div className = 'panel__container'>
            <div className = 'panel'>
                <h1>
                    {props.title}
                </h1>
            </div>
            <div className = 'info'>
                <p>
                    {props.info}
                </p>
            </div>
        </div>

        </>
    )

}

export default SidePanel;