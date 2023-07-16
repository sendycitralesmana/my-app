import React, {Component} from "react";
import YouTubeComp from "../../components/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr />
                <YouTubeComp 
                    time="1.23" 
                    title="Tutorial React JS - Bagian 1"
                    desc="1x ditonton. 1 hari yang lalu" />
                <YouTubeComp 
                    time="2.34" 
                    title="Tutorial React JS - Bagian 2"
                    desc="2x ditonton. 2 hari yang lalu" />
                <YouTubeComp 
                    time="3.45" 
                    title="Tutorial React JS - Bagian 3"
                    desc="3x ditonton. 3 hari yang lalu" />
                <YouTubeComp 
                    time="4.56" 
                    title="Tutorial React JS - Bagian 4"
                    desc="4x ditonton. 4 hari yang lalu" />
                <YouTubeComp /> */}
                <p>Counter</p>
                <hr />
                <Product />
            </div>
        )
    }
}

export default Home;