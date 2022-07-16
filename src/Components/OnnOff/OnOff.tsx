import React from 'react';


type OnOffPropsType = {
    on: boolean
}
export const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
               padding: '2px',
        backgroundColor:'green'

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor:'red'
    }
    const indicatorStyle = {
        width: '10px',//ширина
        height: '10px',//высота
        borderRadius: '50%',//радиус
        border: '1px solid black',// граница
        display: 'inline-block',//выстраивание в линию
        marginLeft: '5px',//отступ слева
        padding: '2px',//внутренние отступы
        backgroundColor:'green'//цвет

    }

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

