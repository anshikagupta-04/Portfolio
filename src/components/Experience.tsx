import React from 'react'
import './style.css'

const Experience: React.FC = () => {
    return (
        <section className="mt-16 mb-14 px-6 md:px-6 w-full relative">
            <h1 className="text-6xl font-light mb-16">Experience</h1>
            <h1 className="absolute text-8xl font-black text-[rgba(0, 0, 0, 0.08)] opacity-10 top-0 -z-10 lg:block md:hidden hidden">Profile</h1>
            <div className="row d-flex">
                <div className="col-md-10">
                    <div className="mt-3 text-lg">
                        <div className="py-4">
                            <div className="desc">
                                <h4 className='text-xl'>Frontend Developer Intern</h4>
                                <p className='text-black mb-2 text-lg'>To-Let Globe</p>
                                <p>• Collaborated on developing and enhancing user interfaces for web applications.</p>
                                    <p>• Gained hands-on experience with React, Tailwind CSS.</p>
                                   <p> • Received recognition as Intern of the Week for outstanding performance and contributions.</p>
                            </div>
                            <div>
                                <p className='mt-2'>Sep 24 - Nov 24</p>
                            </div>
                        </div>

                        <div className="py-4">
                            <div className="desc">
                                <h4 className='text-xl mb-2'>Pratishruti'24 Website</h4>
                                <p>• This is my college's annual fest official website.</p>
                                <p>• Worked on designing and developing the website. It is developed using React.</p>
                            </div>
                        </div>
                    </div>



                    <h1 className="text-6xl font-light mb-16 mt-16">Education</h1>
                    <h1 className="absolute text-8xl font-black text-[rgba(0, 0, 0, 0.08)] opacity-10 bottom-80 -z-10 lg:block md:hidden hidden">Academics</h1>
                    <div className="py-4">
                        <div className="desc">
                            <h4>B.Tech (ongoing)</h4>
                            <p>Shri Ramdeobaba College of Engineering and Management, Nagpur</p>
                        </div>
                        <div>
                            <p>2013 - 2014</p>
                        </div>
                    </div>

                    <div className="py-4">
                        <div className="desc">
                            <h4>HSC (12th)</h4>
                            <p>Shri Shivaji Science College, Nagpur</p>
                        </div>
                        <div>
                            <p>2021 - 2022</p>
                        </div>
                    </div>

                    <div className="py-4">
                        <div className="desc">
                            <h4>SSC (10th)</h4>
                            <p>J. N. TATA Parsi Girls' High School, Nagpur</p>
                        </div>
                        <div>
                            <p>2019 - 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience