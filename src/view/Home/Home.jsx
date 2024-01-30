import React from 'react'
import './index.scss'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import ToDoList from '../../components/ToDoList/ToDoList'
import Background from '../../components/Background/Background'

const Home = () => {
    return (
        <div className='home'>
            <Background />
            <Header />
            <Title />
            <div className='home__todo'>
                <ToDoList />
            </div>
        </div>
    )
}

export default Home