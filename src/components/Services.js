import React, {Component} from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/all";

class Services extends Component
{
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. , vitae! A, facilis?"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. , vitae! A, facilis?"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. , vitae! A, facilis?"
            },
            {
                icon: <FaBeer />,
                title: "Free Beers",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. , vitae! A, facilis?"
            },
        ]
    };

    render()
    {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return  (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default Services;
