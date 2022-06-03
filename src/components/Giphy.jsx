import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "./Loader";

const Giphy = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let apiKey = "ObLVj9r34BasgNPhM4cLOAIKEKu1CAyD";
useEffect(() => {
    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const results = await axios(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=3&rating=G`);
        console.log(results);
        setData(results.data.data);
        } catch (error) {
            setIsError(true);
            setTimeout(() => setIsError(false), 5000);
        }
        setIsLoading(false);
    };
    fetchData()
}, []);

    const renderGifs = () => {
        if (isLoading) {
            return <Loader />;
        }
        return data.map(item => {
            return (
                <div className="gif" key={item.id}>
                    <img src={item.images.fixed_height.url} alt="Gif"/>
                </div>
            );
        });
    };
    const renderError = () => {
        if (isError) {
            return ( <div className="alert.alert-danger alert-dismissable fade show" role="alert">Whoops our bad ...</div>);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsError(false);
        setIsLoading(true);

        try { 
            const res = await axios(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=100&q=${search}`);
            setData(res.data.data);
        } catch (err) {
            console.log(err);
            setIsError(true);
            setTimeout(() => setIsError(false), 5000);
        }
        setIsLoading(false);
    };
    
    return (
    <div className="m-2">
        {renderError()}
        <form className="form-inline justify-content-center m-2">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleSubmit} type="submit">Search</button>
        </form>
        <div className="container gifs">{renderGifs()}</div>
    </div>
    );
};

export default Giphy;