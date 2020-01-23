import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () =>
{
    return <Hero className="error">
        <Banner title="404" subtitle="Page not Found">
            <Link to="/" className="btn-primary">
                Return To Home
            </Link>
        </Banner>
    </Hero>
};

export default Error;
