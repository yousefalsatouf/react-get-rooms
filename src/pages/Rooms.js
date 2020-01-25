import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomContainers from "../components/RoomContainers";
import {Link} from "react-router-dom";
import Room from "../components/Room";

const Rooms = () =>
{
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">
                        Return To Home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainers  />
        </>
    )
};

export default Rooms;
