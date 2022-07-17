import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnnOff/OnOff";
import UnControlledAccordion from "./Components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/Rating/UnControlledRating";

function App() {
    console.log('APP')
    return (
        <div className="App">

            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />


            <PageTitle title={'This is APP components'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <UnControlledRating/>
           {/* <Rating value={3}/>*/}
           {/* <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledAccordion titleValue={"Users"}/>
            Article 2
            <UnControlledRating/>
          {/*  <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

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
