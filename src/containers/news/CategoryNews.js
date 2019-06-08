import React, {Component} from 'react';
import NewsList from "./NewsList";

class CategoryNews extends Component {

    render() {
        const category = this.props.match.params.name;

        return (
            <React.Fragment>
                <h1 className="text-capitalize">{category}</h1>
                <NewsList category={category} />
            </React.Fragment>
        )
    }
}

export default CategoryNews;