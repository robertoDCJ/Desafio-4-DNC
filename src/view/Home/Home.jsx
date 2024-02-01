import React, { useCallback, useState } from 'react'
import './index.scss'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import ToDoList from '../../components/ToDoList/ToDoList'
import Background from '../../components/Background/Background'
import Tema from '../../components/Tema/Tema'

const Home = () => {

    const [tema, setTema] = useState(true)

    const changeTheme = useCallback(
        () => {
            setTema(!tema)
        }, [tema]
    )

    console.log(tema);

    return (
        <div className='home'>
            <Background rendeThema={tema} />
            <Header />
            <Title />
            <div className='home__todo'>
                <ToDoList />
            </div>
            <Tema changeTheme={changeTheme} />
        </div>
    )
}

export default Home