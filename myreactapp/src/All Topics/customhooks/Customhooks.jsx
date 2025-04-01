import axios from "axios";
import { useEffect, useState } from "react";

export let useAPI = (api_url) => {
    let [apiData, setAPIData] = useState(null);

    async function getAPIData(url) {
        let response = await axios.get(url);
        setAPIData(response.data); //storing api data in state
    }

    useEffect(()=> {
        getAPIData(api_url);//func will be called only one time(mounting phase)
    },[]);

    return apiData; // returning state cariable with api data
};