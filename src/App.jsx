import Services from "./components/Services";
import Preloader from "./components/Preloader";
import "./App.css";
import Footer from "./components/Footer";
import Container from "./components/Container";
import OpenWork from "./Router/OpenWork";
import { OpenWorkStore } from "./ContextStore/OpenWorkStore";
import Work from "./components/Work";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import SubmitForm from "./components/SubmitForm";
import Hero from "./components/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  // function pause() {

  useGSAP(() => {
    const mainTL = gsap.timeline();

    mainTL.from("#logo", {
      opacity: 0,
      delay: 1,
      y: 50,
      duration: 0.5,
    });

    mainTL.from(
      "#navBar",
      {
        opacity: 0,
        duration: 0.3,
        y: 40,
      },
      "links"
    );
    mainTL.from(
      ".navLinks",
      {
        opacity: 0,
        duration: 0.3,
        y: 40,
        stagger: 0.1,
      },
      "links"
    );

    mainTL.to(
      "#heroImg",
      {
        opacity: 1,
        duration: 0.3,
        x: 0,
      },
      "hero1"
    );

    mainTL.from(
      "#heroH1",
      {
        opacity: 0,
        duration: 0.4,
        y: 40,
      },
      "hero1"
    );

    mainTL.from(
      "#heroH2",
      {
        opacity: 0,
        duration: 0.4,
        y: -40,
      },
      "hero1"
    );

    mainTL.from(
      "#heroP",
      {
        opacity: 0,
        duration: 0.4,
      },
      "hero1"
    );

    mainTL.to(".icons", {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.1,
    });
    mainTL.from("#heroButtons a", {
      opacity: 0,
      y: -30,
      duration: 0.3,
      stagger: 0.1,
    });
  });
  // }
  const [webName, setWebName] = useState("");

  const getwebname = (name) => {
    setWebName(name);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Container>
          <Header />
          <Preloader />
          <Hero />
          <Work />
          <Services />
          <SubmitForm />
          <Footer />
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
