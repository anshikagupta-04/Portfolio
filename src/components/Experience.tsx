import React from 'react'
import './style.css'

const Experience: React.FC = () => {
  return (
    <section className="mt-14 mb-14 px-6 md:px-6 w-full relative">
            <h1 className="text-6xl font-light mb-16">Experience</h1>
                <h1 className="absolute text-8xl font-black text-[rgba(0, 0, 0, 0.08)] opacity-10 top-0 -z-10 lg:block md:hidden hidden">Profile</h1>
                <div className="row d-flex">
                    <div className="col-md-10">
                        <h4 className="dmb-4 mt-2 profile-text">I'm a Job Profile from Location. Bees have 100 percent
                            employment, but we do jobs like taking the crud out.</h4>

                        <div className="mt-3">
                            <div className="py-4">
                                <div className="desc">
                                    <h4>UX & Interaction Designer</h4>
                                    <p>The Bee Company</p>
                                </div>
                                <div>
                                    <p>2020 - 2020</p>
                                </div>
                            </div>

                            <div className="py-4">
                                <div className="desc">
                                    <h4>jobPosition</h4>
                                    <p>company</p>
                                </div>
                                <div>
                                    <p>startYear - endYear</p>
                                </div>
                            </div>

                            <div className="py-4">
                                <div className="desc">
                                    <h4>jobPosition</h4>
                                    <p>company</p>
                                </div>
                                <div>
                                    <p>startYear - endYear</p>
                                </div>
                            </div>
                        </div>



                        <h1 className="text-6xl font-light mb-16">Education</h1>
                            <h1 className="absolute text-8xl font-black text-[rgba(0, 0, 0, 0.08)] opacity-10 bottom-80 -z-10 lg:block md:hidden hidden">Academics</h1>
                            <div className="py-4">
                                <div className="desc">
                                    <h4>Master Degree in Computer Science</h4>
                                    <p>Harvard University</p>
                                </div>
                                <div>
                                    <p>2013 - 2014</p>
                                </div>
                            </div>

                            <div className="py-4">
                                <div className="desc">
                                    <h4>degree</h4>
                                    <p>schoolName</p>
                                </div>
                                <div>
                                    <p>startYear - endYear</p>
                                </div>
                            </div>

                            <div className="py-4">
                                <div className="desc">
                                    <h4>degree</h4>
                                    <p>schoolName</p>
                                </div>
                                <div>
                                    <p>startYear - endYear</p>
                                </div>
                            </div>
                    </div>
                </div>
        </section>
  )
}

export default Experience