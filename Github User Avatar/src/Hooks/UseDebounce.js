function useDebounce(callback , delay = 1000){
    let timerid;
    // Joh bhi function par arguments aayega yeh usse argument props mai daal dega!!
    return (...args) => {
        clearTimeout(timerid);
        // New timer start
        timerid =  setTimeout(() => {
            clearInterval(timerid);
            // wapas call kar denge
            callback(...args);
        } , delay);
    }

    //  Last mai jaake pura print hoga !!! 
}

export default useDebounce;
