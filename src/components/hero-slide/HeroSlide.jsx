import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import "./hero-slide.scss";
import Button, { OutlineButton } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const HeroSlide = (props) => {
    const [movieItems, setMovieItems] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(
                    movieType.popular,
                    { params }
                );
                setMovieItems(response.results.slice(1, 4));
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        getMovies();
    }, []);
    console.log(movieItems);
    return (
        <div className="hero-slide">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
            >
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem
                                item={item}
                                className={`${isActive ? "active" : ""}`}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
const HeroSlideItem = (props) => {
    let navigate = useNavigate();
    const item = props.item;
    const background = apiConfig.originalImage(
        item.backdrop_path ? item.backdrop_path : item.poster_path
    );
    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => navigate("/movie/" + item.id)}>
                            Watch now
                        </Button>
                        <OutlineButton>Watch trailer</OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
