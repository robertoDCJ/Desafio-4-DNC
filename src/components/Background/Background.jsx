import "./index.scss"

const Background = () => {
    return (
        <div className="Background">
            <video className="Background__video" autoPlay loop muted>
                <source src="../../src/assets/vinil.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Background