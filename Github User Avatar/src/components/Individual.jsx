function Individual(url){
    console.log(url);
    return (
        <div className="w-fit mt-1 mb-1 ml-1">
            <img src={url.url.avatar} alt="" width="300px" height="300px"/>
        </div>
    )
}
export default Individual;