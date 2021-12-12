import React from "react";
import { navigate } from "gatsby-link";
import Header from "../components/header"

const Test = () => (
    <div>
        <Header title="Header of Test"></Header>
        <h1>This is a test page</h1>
        <h1>This is a test page</h1>
        <button onClick={()=>navigate("/")}>Back to Home</button>
    </div>
)

export default Test;