import { useCallback, useState } from "react"
import "./index.scss"

const Tema = () => {
    const [tema, setTema] = useState(true)

    const changeTheme = useCallback(
        () => {
            setTema(!tema)
        }, [tema]
    )

    console.log(tema);

    return (
        <div className="Tema" onClick={changeTheme}>
            Alterar Tema
        </div>
    )
}

export default Tema