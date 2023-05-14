import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";


function App() {
  const [isLogined, setIsLogined] = useState(true);

  return (
    <>
      {isLogined ? <MainPageContainer /> : <LoginContainer />}
    </>
  );
}

export default App;
