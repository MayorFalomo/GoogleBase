import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Index from "../Index";
import Footer from "../Footer/Footer";
import Mainbody from "../Mainbody/Mainbody";
import Navbar from "../Navbar/Navbar";

const Homepage = ({ activity }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Mainbody activity={activity} />
      <Index />
      <Footer />
    </div>
  );
};

export default Homepage;
