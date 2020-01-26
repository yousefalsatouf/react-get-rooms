import React from "react";
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from "../context";
import Loading from "./Loading";

function RoomContainers({context})
{
    const {loading, sortedRooms, rooms} = context;
    if (loading)
    {
        return <Loading />;
    }
    console.log(sortedRooms);
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )

}

export default withRoomConsumer(RoomContainers);
/*
export default function RoomContainers()
{
    return (
        <RoomConsumer>
            {value => {
                const {loading, sortedRooms, rooms} = value;

                if (loading)
                {
                    return <Loading />;
                }

                return (
                    <div>
                        Hello from Container
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                    </div>
                )
            }}
        </RoomConsumer>
    )
}

 */
