import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../src/Components/Helpers/Helpers";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  const boredUrl = `https://www.boredapi.com/api/activity/`;

  const [activity, setActivity] = useState({});
  const [displayActivity, setDisplayActivity] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    handleFunctions();
  }, []);

  const handleFunctions = () => {
    handleCall();
    onClicks();
  };

  //boredApi Call
  const handleCall = () => {
    axios
      .get(boredUrl)
      .then((res) => setActivity(res.data))
      .catch((err) => console.log(err));
  };

  // to display Activity Onclick
  const onClicks = () => {
    setDisplayActivity(!displayActivity);
  };

  return (
    <AppContext.Provider
      value={{
        activity,
        displayActivity,
        setDisplayActivity,
        isAuth,
        setIsAuth,
        handleFunctions,
        theme,
        setTheme,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage activity={activity} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
