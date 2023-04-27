import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
const Casts = (props) => {
    const [casts, setCasts] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        const getCasts = async () => {
            const response = await tmdbApi.credits(category, props.id);
            setCasts(response.cast.slice(0, 5));
        };
        getCasts();
    }, [category, props.id]);
    return (
        <div className="casts">
            {casts.map((item, i) => (
                <div key={i} className="casts__item">
                    <div
                        className="casts__item__img"
                        style={{
                            backgroundImage: `url(${apiConfig.w500Image(
                                item.profile_path
                            )})`
                        }}
                    ></div>
                    <p className="casts__item__name">{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Casts;
