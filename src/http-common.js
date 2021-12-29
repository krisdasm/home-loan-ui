import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3000/loan/",
    headers: {
        "Content-type": "application/json"
    }
});