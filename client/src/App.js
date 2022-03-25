import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "./Routing/Route";
import { ContextProvider } from "./components/context";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import Navbar from "./components/Feauters/NavBar/Navbar";
import SubHeader from "./components/Feauters/SubHeader/SubHeader";
import Footer from "./components/Feauters/Footer/Footer";

function App() {
  const [user, setUser] = useState();
  const [isUpdated , setIsUpdated] = useState(true);

  const updateData = ()=>{
    setIsUpdated(prev => !prev);

  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const _user = jwt.verify(token, "eliasadmaso");
      setUser(_user);
    }
  }, []);

  return (
    <ContextProvider value={{ user,updateData,isUpdated}}>
      <Router basename={process.env.NODE_ENV === 'production' ? '/shoes-store-app/' : '/'}>
        <Navbar/>
        <SubHeader/>
        <Route />
        <Footer/>
      </Router>
    </ContextProvider>
  );
}

export default App;
