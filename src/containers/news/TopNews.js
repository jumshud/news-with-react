import React, {Component} from 'react';
import NewsList from "./NewsList";

class TopNews extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Top news</h1>
                <NewsList category={null} />
            </React.Fragment>
        )
    }
}

export default TopNews;