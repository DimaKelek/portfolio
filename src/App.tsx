import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Footer} from "./components/Footer/Footer";
import {ContactForm} from "./components/ContactForm/ContactForm";
import {Projects} from "./components/Projects/Projects";

function App() {
    const anchors = document.querySelectorAll('a[href^="#"]')
    //@ts-ignore
    for(let anchor of anchors) {
        //@ts-ignore
        anchor.addEventListener("click", function(e) {
            e.preventDefault()
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Projects />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;