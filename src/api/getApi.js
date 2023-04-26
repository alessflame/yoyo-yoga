import axios from "axios"

export const getVideos=async()=>{
    const request= await axios.get("https://ott-fogliata.github.io/vuejs-s2i-repository/yoyo.json");
    return request.data;
}