import React from 'react';
import './App.css';
import {Header} from "../Components/S2-Header/Header";
import {Main} from "../Components/S3-Main/Main";
import {Skills} from "../Components/S4-Skills/Skills";
import {Footer} from "../Components/S7-Footer/Footer";
import {ContactForm} from "../Components/S6-ContactForm/ContactForm";
import {Projects} from "../Components/S5-Projects/Projects";
import {MiniNav} from "../Components/S2-Header/Nav/MiniNav/MiniNav";

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