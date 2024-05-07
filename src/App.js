import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";


const Applayout = () => {
    return (
        <div>
            <Heading />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)

