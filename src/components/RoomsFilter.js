import React from "react";
import {useContext} from 'react';
import {RoomContext} from "../context";
import Title from "./Title";

export default function RoomsFilter()
{
    const context = useContext(RoomContext);
    const {handelChange, type, capacity, price, maxPrice, minPrice, minSize, maxSize, breakfast, pets} = context;

    console.log(context);


    return <section className="filter-container">
        <Title title="Search rooms" />
        <form className="filter-form">

        </form>
    </section>
}
