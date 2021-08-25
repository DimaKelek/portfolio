import React from 'react';
import './App.css';
import {Header} from "../Components/Header/Header";
import {Main} from "../Components/Main/Main";
import {Skills} from "../Components/Skills/Skills";
import {Footer} from "../Components/Footer/Footer";
import {ContactForm} from "../Components/ContactForm/ContactForm";
import {Projects} from "../Components/Projects/Projects";
import {MiniNav} from "../Components/Header/Nav/MiniNav/MiniNav";

export const App = () => {
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