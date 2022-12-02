import axios from "axios";

async function GetArt() {
    const id = "?fields=image_id";
    try {
        const resp = await axios({
            url: process.env.REACT_APP_BASE_URL + id,
            method: "get",
        });
        return resp.data.data;
    } catch (error) {
        console.log(error);
    }
}
export default GetArt;