import { useEffect, useState } from "react";
import FeaturedData from "./FeaturedData";

const Featured = () => {
    // Correct state variable name
    const [featuredData, setFeaturedData] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => {
                setFeaturedData(data);
            });
    }, []);

    return (
        <div>
            <div className="text-center mt-5">
                <h2 className="text-3xl">Our Latest Mobile</h2>
            </div>
            <div className="grid gap-3 mt-10 my-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
                { 
                    // Correctly reference the state variable
                    featuredData.slice(0, 6).map((data, idx) => (
                        <FeaturedData key={idx} data={data} />
                    ))
                }
            </div>
        </div>
    );
};

export default Featured;
