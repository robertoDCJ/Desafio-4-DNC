import { useCallback, useState } from "react"
import "./index.scss"

const Tema = ({changeTheme}) => {
    

    return (
        <div className="Tema" onClick={changeTheme}>
            Alterar Tema
        </div>
    )
}

export default Tema