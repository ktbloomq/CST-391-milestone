import axios from "axios";

let url = "http://localhost";
if(process.env.REACT_APP_API_SOURCE) {
    url = process.env.REACT_APP_API_SOURCE;
}
// console.log(url);

export default axios.create({
    baseURL: url+":5000"
});