import React from "react"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImg: '',
    })

    const [memeData, setMemeData] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))
    }, [])

    function getNewMeme(){
        const randomNumber = Math.floor(Math.random() * memeData.length)
        const url = memeData[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImg: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="container">
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getNewMeme}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} alt={meme.name}/>
                <h2 className="top-text">{meme.topText}</h2>
                <h2 className="bottom-text">{meme.bottomText}</h2>
            </div>
        </div>
    )
}