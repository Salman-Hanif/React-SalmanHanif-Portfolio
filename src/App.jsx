import React from "react";
import Services from "./components/Services";
import Preloader from "./components/Preloader";
import "./App.css";
import Footer from "./components/Footer";
import Container from "./components/Container";
import OpenWork from "./Router/OpenWork";
import { OpenWorkStore } from "./ContextStore/OpenWorkStore";
import Work from "./components/Work";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useRef } from "react";
import Header from "./components/Header";
import SubmitForm from "./components/SubmitForm";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

// Create a context for animation control
export const AnimationContext = React.createContext();

function App() {
  const [webName, setWebName] = useState("");
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  const animationTriggers = useRef({});

  const getwebname = (name) => {
    setWebName(name);
  };

  const handlePreloaderComplete = () => {
    setIsPreloaderComplete(true);
    // Trigger all animations after preloader completes
    Object.values(animationTriggers.current).forEach(trigger => {
      if (trigger) trigger();
    });
  };

  const registerAnimationTrigger = (name, trigger) => {
    animationTriggers.current[name] = trigger;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Container>
          <AnimationContext.Provider value={{ 
            isPreloaderComplete, 
            registerAnimationTrigger 
          }}>
            <Header />
            <Preloader onComplete={handlePreloaderComplete} />
            <Hero />
            <TechStack/>
            <Work />
            <Services />
            <SubmitForm />
            <Footer />
          </AnimationContext.Provider>
        </Container>
      ),
    },
    {
      path: "/work",
      element: <OpenWork />,
    },
  ]);

  return (
    <>
      <OpenWorkStore.Provider value={{ getwebname, webName }}>
        <RouterProvider router={router} />
      </OpenWorkStore.Provider>
    </>
  );
}

export default App;