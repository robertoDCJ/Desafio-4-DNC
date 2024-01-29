import React from 'react'
import "./index.scss"

const Header = () => {
    return (
        <div className='header'>
            <div className="header__nav">
                <div className="header__orgdanizacao">Organização</div>
                <div className="header__tarefas">Tarefas</div>
            </div>
        </div>
    )
}

export default Header