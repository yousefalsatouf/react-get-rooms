import React, {Component} from "react";
import defaultImg from "../images/room-6.jpeg";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../context";
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component
{
    constructor(props)
    {
        super(props);
        //console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg
        }
    }
    static contextType = RoomContext;

    render()
    {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room)
        {
            return <div className="error">
                        <h3>No such room could be found</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...defaultImgs] = images;

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultImg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImgs.map((item, index) => {
                           return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: {size} SQFT</h6>
                            <h6>
                                Max capacity: {" "}
                                {capacity >1? `${capacity} People` : `${capacity} Person`}
                            </h6>
                            <h6>{pets? "Pets allowed" : "no Pets allowed"}</h6>
                            <h6>{breakfast && "Free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default SingleRoom;
