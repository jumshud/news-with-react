import React, {Component} from 'react';
import TopNews from "./news/TopNews";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <TopNews/>
            </div>
        )
    }
}

export default Home;