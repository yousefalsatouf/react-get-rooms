import React, {Component} from "react";
//import items from './data';
import Client from './contectful';


const RoomContext = React.createContext();

class RoomProvider extends Component
{
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 0,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    getData = async () => {
        try
        {
            let response = await Client.getEntries({content_type: 'beachResortRoom', order: 'sys.createdAt'});

            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room =>room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));

            console.log(maxSize);
            console.log(maxPrice);

            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                maxPrice: maxPrice,
                maxSize: maxSize
            });

        }catch (e) {
            console.log(e)
        }
    };

    componentDidMount()
    {
        this.getData()
    }


    formatData(items)
    {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};

            return room;
        });

        return tempItems;
    }

    getRoom = (slug) => {
        let tempRoom = [...this.state.rooms];
        const room = tempRoom.find(room => room.slug === slug);

        return room;
    };
    handelChange = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = e.target.name;

        this.setState({
            [name] : value
        },
            this.filterRooms);
    };

    filterRooms = () => {
        let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;

        let tempRooms = [...rooms];

        capacity = parseInt(capacity);

        price = parseInt(price);

        if (type !== 'all')
        {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        if (capacity !== 1)
        {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        if (breakfast)
        {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }

        if (pets)
        {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        tempRooms = tempRooms.filter(room => room.price <= price);
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        this.setState({sortedRooms: tempRooms});
    };

    render ()
    {
        return  (
                <RoomContext.Provider
                    value={{
                        ...this.state,
                        getRoom: this.getRoom,
                        handelChange: this.handelChange
                    }}

                >
                    {this.props.children}
                </RoomContext.Provider>
        );
    }

}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component)
{
    return function ConsumerWrapper(props)
    {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value}/>}
            </RoomConsumer>
        );
    }
}

export { RoomProvider, RoomConsumer, RoomContext };
