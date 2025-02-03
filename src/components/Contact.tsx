import React from 'react'
import IonIcon from '@reacticons/ionicons';


const Contact: React.FC = () => {
    return (
        <section>
            <h1 className="display-4 mt-5">Let's Talk</h1>
            <h1 className="bold-text bg-text">Contact</h1>
            <div className="text-left">
                <div className="pt-5">
                    <h2 className="mb-5">Have a great product and need a job profile or just want to have a chat?
                        <br />
                        My inbox is always open!</h2>
                    <ul className="social-links list-unstyled mt-4">
                        <li><a href="#">
                            <IonIcon name="mail-outline" />
                        </a></li>
                        <li><a href="#">
                            <IonIcon name="logo-github" />

                        </a></li>
                        <li><a href="#">
                            <IonIcon name="logo-linkedin" />
                        </a></li>
                        <li><a href="#">
                            <IonIcon name="logo-twitter" />
                        </a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact