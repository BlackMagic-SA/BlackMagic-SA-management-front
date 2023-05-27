import { useState } from "react";
import LoginContainer from "./components/Login/LoginContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";


function App() {
  const [isLogined, setIsLogined] = useState(false);

  return (
    <>
      {isLogined ? <MainPageContainer setIsLogined={setIsLogined} /> : <LoginContainer setIsLogined={setIsLogined} />}
    </>
  );
}

export default App;
