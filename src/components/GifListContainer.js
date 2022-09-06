import { useState } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
    const [gifData, setGifData] = useState([])

    return (
        <div>
            <GifSearch setGifData={setGifData}/>
            <GifList gifData={gifData}/>
        </div>
    )
}

export default GifListContainer