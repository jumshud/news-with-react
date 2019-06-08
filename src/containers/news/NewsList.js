import React, {Component} from 'react';
import NewsService from '../../services/NewsService'
import News from "../../components/news/News";
import {connect} from "react-redux";
import {favorites} from "../../actions/favorites";
import PropTypes from "prop-types";

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: []
        };

        this.getTopNews = this.getTopNews.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.removeNews = this.removeNews.bind(this);
    }

    componentWillMount() {
        this.getTopNews();
    }

    componentDidUpdate(prevProps) {
        const category = this.props.category;
        if (category !== prevProps.category) {
            this.getTopNews();
        }
    }

    async getTopNews() {
        const {category} = this.props;
        let news = await NewsService.getTopNews(1, category);
        news = news.articles.map(news => {
            const {title, description, url, urlToImage, publishedAt} = news;
            return {title, description, url, image: urlToImage, publishedAt}
        });
        this.setState({
            ...this.state,
            newsList: news
        });
    }

    toggleFavorite(news) {
        const isFavorite = NewsService.isFavorite(this.props.favorites, news.url);
        if (isFavorite) {
            this.props.removeFromFavorites(news)
        } else {
            this.props.addToFavorites(news)
        }
    }

    removeNews(index){
        let news = this.state.newsList;
        news.splice(index, 1);
        this.setState({...this.state, newsList: news});
    }

    render() {
        const {favorites} = this.props;

        return (
            <div className="card-columns">
                {this.state.newsList.map( (news, i) =>
                        <News key={i}
                              toggleFavorite={this.toggleFavorite}
                              removeNews={this.removeNews}
                              isFavorite={NewsService.isFavorite(favorites, news.url)} news={news} />
                    )}
            </div>
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
        addToFavorites: (news) => dispatch(favorites.addToFavorites(news)),
        removeFromFavorites: (news) => dispatch(favorites.removeFromFavorites(news))
    };
};

News.propTypes = {
    category: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);