import React from 'react'
import IonIcon from '@reacticons/ionicons';
import './style.css'

const Contact: React.FC = () => {
    return (
        <section className='mt-16 mb-14 px-6 md:px-6 w-full relative'>
            <h1 className="text-6xl font-light mb-16">Let's Talk</h1>
            <h1 className="absolute text-8xl font-black text-[rgba(0, 0, 0, 0.08)] opacity-10 bottom-35 -z-10 lg:block md:hidden hidden">Contact</h1>
            <div className="text-left">
                <div className="pt-5">
                    <h2 className="mb-5 text-xl">Want to connect or want to have a chat?</h2>
                    <ul className="social-links list-unstyled mt-4 text-xl">
                        <li><a href="mailto:anshikaguptaai22@gmail.con">
                            <IonIcon name="mail-outline" />
                        </a></li>
                        <li><a href="https://github.com/anshikagupta-04">
                            <IonIcon name="logo-github" />

                        </a></li>
                        <li><a href="https://www.linkedin.com/in/anshika-gupta-710192282">
                            <IonIcon name="logo-linkedin" />
                        </a></li>
                        <li><a href="https://twitter.com/_anshika04_">
                            <IonIcon name="logo-twitter" />
                        </a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact