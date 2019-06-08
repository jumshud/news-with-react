import React, {Component} from 'react';
import News from "../../components/news/News";
import { connect } from 'react-redux';
import {favorites} from "../../actions/favorites";

class FavoriteNews extends Component {
    constructor(props) {
        super(props);

        this.removeFromFavorites = this.removeFromFavorites.bind(this);
    }

    removeFromFavorites(news) {
        this.props.removeFromFavorites(news);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Favorites</h1>
                <div className="card-columns">
                    {this.props.favorites.map( (news, i) =>
                        <News key={i}
                              toggleFavorite={this.removeFromFavorites}
                              removeNews={undefined}
                              isFavorite={true} news={news} />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites || [],
    };
};

const mapDispatchToProps = (dispatch)=> {
    return {
        removeFromFavorites: (news) => dispatch(favorites.removeFromFavorites(news))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteNews);