import React from 'react';
import IonIcon from '@reacticons/ionicons';
import './style.css'

const About: React.FC = () => {
    return (
        <section className="mt-16 mb-14 px-6 md:px-6 w-full">
            <h4 className="text-6xl font-light mb-16">A little about me,</h4>
            <div className="flex flex-col lg:flex-row w-full justify-between">
                <div className="lg:w-[45%]">
                    <div className="relative">
                        <h1 className="absolute text-8xl font-black text-[rgba(0, 0, 0, 0.08)] opacity-10 top-[-135px] left-0 -z-10 lg:block md:hidden hidden ">ABOUT</h1>
                        <h2 className="text-3xl font-semibold mb-4">Hello!</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            I am currently a third year B.Tech Computer Science student in Nagpur. I am a passionate Web Developer. I also have interest in Machine Learning.
                        </p>
                        <ul className="flex gap-4 mt-4">
                            <li>
                                <a href="mailto:anshikaguptaai22@gmail.con" className="text-blue-500 hover:text-blue-700">
                                    <IonIcon name="mail-outline" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/anshikagupta-04" className="text-blue-500 hover:text-blue-700">
                                    <IonIcon name="logo-github" className="w-6 h-6" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/anshika-gupta-710192282" className="text-blue-500 hover:text-blue-700">
                                    <IonIcon name="logo-linkedin" className="w-6 h-6" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/_anshika04_" className="text-blue-500 hover:text-blue-700">
                                    <IonIcon name="logo-twitter" className="w-6 h-6" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-[45%]">
                    <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-medium text-lg">Frontend</h4>
                            <div className="w-[80%] bg-gray-200 rounded-full h-3">
                                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium text-lg">Backend</h4>
                            <div className="w-[80%] bg-gray-200 rounded-full h-3">
                                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
