import React from "react";
import {useContext} from 'react';
import {RoomContext} from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
};

export default function RoomsFilter({rooms })
{
    const context = useContext(RoomContext);
    const {handelChange, type, capacity, price, maxPrice, minPrice, minSize, maxSize, breakfast, pets} = context;

    //console.log(context);
    let types = getUnique(rooms, "type");

    types = ['all', ...types];
    types = types.map((item, index) => {
       return <option key={index} value={item}>{item}</option>
    });

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });
    return <section className="filter-container">
        <Title title="Search rooms" />
        <form className="filter-form">
            <div className="form-group">
                <label htmlFor="type">Room type</label>
                <select
                    name="type"
                    id="type"
                    value={type}
                    className="form-control"
                    onChange={handelChange}
                >
                    {types}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select
                    name="capacity"
                    id="capacity"
                    value={capacity}
                    className="form-control"
                    onChange={handelChange}
                >
                    {people}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="price">Room price ${price}</label>
                <input type="range"
                       name="price"
                       min={minPrice}
                       max={maxPrice}
                       id="price"
                       value={price}
                       onChange={handelChange}
                       className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="size">Room size</label>
                <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handelChange} className="size-input"/>
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handelChange} className="size-input"/>
                </div>
            </div>
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handelChange}/>
                    <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handelChange}/>
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
        </form>
    </section>
}

