import React from 'react'
import Hero from "./HeroComponent/Hero"
import HomeCasesList from './HomeCasesList/HomeCasesList'
import Statistcs from './StatisticsComponent/Statistcs'

function Home() {
    return (
        <div>
            <Hero/>
            <Statistcs/>
            <HomeCasesList/>
        </div>
    )
}

export default Home
