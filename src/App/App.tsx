import React from 'react';
import './App.css';
import {Header} from "../components/Header/Header";
import {Main} from "../components/Main/Main";
import {Skills} from "../components/Skills/Skills";
import {Footer} from "../components/Footer/Footer";
import {ContactForm} from "../components/ContactForm/ContactForm";
import {Projects} from "../components/Projects/Projects";
import {MiniNav} from "../components/Header/Nav/MiniNav/MiniNav";

function App() {
    return (
        <div className="App">
            <Header />
            <MiniNav/>
            <Main />
            <Skills />
            <Projects />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;