import React from 'react'
import './index.scss'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import ToDoList from '../../components/ToDoList/ToDoList'
import Background from '../../components/Background/Background'
import Tema from '../../components/Tema/Tema'

const Home = () => {
    return (
        <div className='home'>
            <Background />
            <Header />
            <Title />
            <div className='home__todo'>
                <ToDoList />
            </div>
            <Tema />
        </div>
    )
}

export default Home