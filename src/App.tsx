import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion";
import {Rating} from "./Components/Rating";

function App() {
    console.log('APP')
    return (
        <div className="App">
            {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}

            <PageTitle title={'This is APP components'} />
            <PageTitle title={'My friends'} />
            Article 1
            <Rating value={3}/>
            <Accordion/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    );
}

function PageTitle (props:any) {

    return (
        <div> <h1>{props.title}</h1></div>
    )

}


export default App;
