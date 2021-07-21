import axios from "axios";

const search = () => axios.get("/api/secret");

export default search;

//using axios could use fetch see examples