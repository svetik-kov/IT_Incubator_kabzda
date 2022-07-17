import React, {useState} from 'react';


type OnOffPropsType = {
   /* on: boolean*/
}
export const UnControlledOnOff = (/*props: OnOffPropsType*/) => {
   let [on,setOn]=useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
               padding: '2px',
        backgroundColor:on?'green':'white'

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor:on?'white':'red'
    }
    const indicatorStyle = {
        width: '10px',//ширина
        height: '10px',//высота
        borderRadius: '50%',//радиус
        border: '1px solid black',// граница
        display: 'inline-block',//выстраивание в линию
        marginLeft: '5px',//отступ слева
        padding: '2px',//внутренние отступы
        backgroundColor:on?'green':'red'//цвет

    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

