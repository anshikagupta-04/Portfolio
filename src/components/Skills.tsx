import React from 'react';
import IonIcon from '@reacticons/ionicons';
import './style.css'
import mongodb from '../assets/MongoDB.svg';
import express from '../assets/expressjs-icon.svg';

const About: React.FC = () => {
  return (
    <section className="relative mt-12 mb-12 px-6 md:px16">
      <h4 className="text-6xl font-light mb-8">Tech I'm familiar with</h4>
      <h1 className="absolute text-8xl font-black text-[rgba(0, 0, 0, 0.08)] opacity-10 top-0 -z-10 lg:block md:hidden hidden">TECH STACK</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
        <div className="flex items-center space-x-2">
          <IonIcon name="logo-html5" className="text-lg text-orange-400" />
          <h3 className="text-2xl font-light">HTML</h3>
        </div>
        <div className="flex items-center space-x-2">
          <IonIcon name="logo-css3" className="text-lg text-blue-500" />
          <h3 className="text-2xl font-light">CSS</h3>
        </div>
        <div className="flex items-center space-x-2">
          <IonIcon name="logo-javascript" className="text-lg text-yellow-500" />
          <h3 className="text-2xl font-light">JavaScript</h3>
        </div>
        <div className="flex items-center space-x-2">
          <IonIcon name="logo-react" className="text-lg text-blue-400" />
          <h3 className="text-2xl font-light">React</h3>
        </div>
        <div className="flex items-center space-x-2">
          <IonIcon name="logo-nodejs" className="text-lg text-green-500" />
          <h3 className="text-2xl font-light">Node.js</h3>
        </div>
        <div className="flex items-center space-x-2">
          <IonIcon name="logo-python" className="text-lg text-blue-400" />
          <h3 className="text-2xl font-light">Python</h3>
        </div>
        <div className="flex items-center space-x-2">
          <img src={mongodb} className='w-6' />
          <h3 className="text-2xl font-light">MongoDB</h3>
        </div>
        <div className="flex items-center space-x-2">
          <img src={express} className='w-5' />
          <h3 className="text-2xl font-light">Express.js</h3>
        </div>
        <div className="flex items-center space-x-2">
          <IonIcon name="git-branch-outline" className="text-lg text-gray-700" />
          <h3 className="text-2xl font-light">Doobie</h3>
        </div>
        <div className="flex items-center space-x-2">
          <IonIcon name="logo-github" className="text-lg text-black" />
          <h3 className="text-2xl font-light">Github</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
