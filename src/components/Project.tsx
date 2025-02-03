import React from 'react'
import StripeCard from './StripeCard'

const Project: React.FC = () => {
    return (
        <section className='mt-14 mb-14 px-6 md:px-6 w-full relative'>
            <h1 className="text-6xl font-light mb-16">Project</h1>
            <h1 className="absolute text-8xl font-black text-[rgba(0, 0, 0, 0.08)] opacity-10 top-0 -z-10 lg:block md:hidden hidden">Project</h1>
            <StripeCard/>
        </section>
    )
}

export default Project