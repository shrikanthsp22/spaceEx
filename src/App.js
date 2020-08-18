import React from "react";
// import "./App.css";
import HomePage from "./HomePage/homePage";
import { MainWrapper, HeaderComponent } from "./main.styles";
import { TEXT_CONSTANTS } from "./constants";
import { Switch, Route } from 'react-router-dom';

function Home(props) {
  return (
    <>
      <HeaderComponent>{TEXT_CONSTANTS.HEADER_NAME}</HeaderComponent>
      <HomePage />
    </>
  )
}

function App() {


  return (

    <MainWrapper>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/filter' component={Home} /> */}
      </Switch>

    </MainWrapper>
  );
}

export default App;
