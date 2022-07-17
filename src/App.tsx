import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnnOff/OnOff";
import UnControlledAccordion from "./Components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/Rating/UnControlledRating";

function App() {
   let [ratingValue,setRatingValue]=useState<RatingValueType>(0)


    return (
        <div className="App">

            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />


            <PageTitle title={'This is APP components'}/>
            <PageTitle title={'My friends'}/>
            Article 1

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
           {/* <Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UnControlledAccordion titleValue={"Menu"}/>
         {/*   <UnControlledAccordion titleValue={"Users"}/>*/}
            Article 2
            <UnControlledRating/>


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    return (
        <div><h1>{props.title}</h1></div>
    )

}


export default App;
