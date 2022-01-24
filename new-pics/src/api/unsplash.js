import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID zmQ6TI729EmvauF9VrLnDkFhSMPTKYgL0N0ySCCSkrc",
    }
})