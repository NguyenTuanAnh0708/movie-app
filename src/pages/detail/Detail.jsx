import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import "./detail.scss";
import { AppContext } from "../../context/AppContext";
import Casts from "./Casts";
import MovieList from "../../components/movie-list/MovieLIst";
import VideoList from "./VideoList";

const Detail = () => {
    const { setHidenLoading } = useContext(AppContext);
    const { category, id } = useParams();
    const [item, setItem] = useState(null);
    useEffect(() => {
        setHidenLoading(false);
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            setHidenLoading(true);
            setItem(response);
        };
        getDetail();
    }, [category, id]);
    console.log(category, id);
    return (
        <>
            {item && (
                <>
                    <div
                        className="banner"
                        style={{
                            backgroundImage: `url(${apiConfig.originalImage(
                                item.backdrop_path || item.poster_path
                            )})`
                        }}
                    ></div>
                    <div className="mb-3 movie-content container">
                        <div className="movie-content__poster">
                            <div
                                className="movie-content__poster__img"
                                style={{
                                    backgroundImage: `url(${apiConfig.originalImage(
                                        item.poster_path || item.backdrop_path
                                    )})`
                                }}
                            ></div>
                        </div>
                        <div className="movie-content__info">
                            <h1 className="title">{item.title || item.name}</h1>
                            <div className="genres">
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre, i) => (
                                        <span key={i} className="genres__item">
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <p className="overview">{item.overview}</p>
                            <div className="cast">
                                <div className="section__header">
                                    <h2>Casts list</h2>
                                </div>
                                <Casts id={id} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="section mb-3">
                            <VideoList id={item.id} />
                        </div>
                        <div className="section mb-3">
                            <div className="section__header mb-2">
                                <h2>Similar</h2>
                            </div>
                            <MovieList
                                category={category}
                                type="similar"
                                id={item.id}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default Detail;
