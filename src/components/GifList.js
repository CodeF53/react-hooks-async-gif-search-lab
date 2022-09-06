function GifList({gifData}) {
    const gifs = gifData.map((gifObject)=>{
        return (
            <li key={gifObject["id"]}>
                <img src={gifObject["images"]["original"]["url"]} alt={gifObject["title"]} ></img>
            </li>   
        )
    })
    return (
        <ul>
            {gifs}
        </ul>
    )
}
export default GifList