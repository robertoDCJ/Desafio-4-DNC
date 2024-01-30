import "./index.scss"

const Background = () => {
    return (
        <div className="Background">
            <video autoPlay loop muted>
                <source src="../../src/assets/chuva.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Background