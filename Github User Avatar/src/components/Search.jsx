function Search(){
    // Handle all the events and debouncing thus state Variable is needed

    return (
        <div className="w-fit mx-auto mt-10">
            <input type="text" name="username" id="username" placeholder="Enter Github UserName" className="p-2 rounded-lg font-semibold border" />
        </div>
    )
}
export default Search;