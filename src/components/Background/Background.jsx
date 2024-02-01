import React, { useEffect, useRef } from "react";
import "./index.scss"


const Background = React.memo(({ rendeThema }) => {

    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load()
        }
    }, [rendeThema])

    console.log(rendeThema);

    return (
        <div className="Background">
            <video className="Background__video" autoPlay loop muted ref={videoRef}>
                <source src={
                    rendeThema ? '../../src/assets/chuva.mp4'
                        : '../../src/assets/vinil.mp4'
                } type="video/mp4" />
            </video>
        </div>
    )
})

export default Background