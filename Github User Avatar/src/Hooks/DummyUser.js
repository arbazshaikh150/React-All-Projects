import axios from 'axios';
import {useState , useEffect} from 'react'
function DummyUser(){
    const [user , setUser] = useState([
        {
            avatar : "",
        }
    ]);
    async function downloadUser(){
        const response = await axios({
            method : 'get',
            url : 'https://api.github.com/users'
        })

        const result = response.data.map((e) => {
            return {
                avatar : e.avatar_url
            }
        })
        // console.log(result);
        setUser(result);

    }
    //  Only on first Render
    useEffect(() => {
        downloadUser();
    } , []);
    return {
        user ,
        setUser
    }
}
export default DummyUser;