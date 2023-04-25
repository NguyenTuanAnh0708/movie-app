import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SwiperSlide, Swiper } from "swiper/react";

import { Link } from "react-router-dom";
import Button from "../button/Button";
import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./movie-list.scss";
import MovieCard from "../../assets/movie-card/MovieCard";
const MovieLIst = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            if (props.type !== "similar") {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {
                            params
                        });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {
                            params
                        });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            console.log(response);
            setItems(response.results);
        };
        getList();
    }, []);
    console.log(items);
    return (
        <div className="movie-list">
            <Swiper slidesPerView="auto" spaceBetween={30} grabCursor={true}>
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                        <MovieCard item={item} category={props.category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

MovieLIst.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default MovieLIst;
