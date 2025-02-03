import React from 'react';
import './style.css'
import girl from '../assets/girl.gif';
// import Project from './Project';


const Landing: React.FC = () => {
    return (
        <section className="w-full">
            <div className="row vertical-center w-full flex justify-between flex-wrap p-3">
                <div className="col-lg-8 text-left pb-5">
                    <h1 className="display-1 text-7xl">Anshika Gupta</h1>
                    <p className="lead pl-2 text-2xl">Web Developer</p>
                </div>
                <div className="col-lg-4 text-center my-auto pb-5 rounded-circle"><img className="img-fluid rounded-circle w-[500px] rounded-full" src={girl}></img></div>
            </div>
        </section>
    );
};

export default Landing;
