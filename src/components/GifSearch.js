import { useState } from "react"

function GifSearch({setGifData}) {
    const [searchQuery, setSearchQuery] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        // request some new gifs
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=Yfec5LNIrDzwIqntcldrcfIWPWG6ZC6H&rating=g`)
        .then(r=>r.json()).then((data)=>{
            setGifData(data["data"]) // update data
            setSearchQuery("") // clear search field
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery}></input>
            <button onClick={handleSubmit}>Find Gifs</button>
        </form>
    )
}

export default GifSearch