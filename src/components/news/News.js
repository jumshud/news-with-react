import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import moment from 'moment';

const News = (props) => {
    const {title, description, url, image, publishedAt} = props.news;

    const toggleFavorite = (news) => {
        props.toggleFavorite(news);
    };

    const favIcon = props.isFavorite ? faHeart : farHeart;
    const iconTitle = props.isFavorite ? 'remove from favorites' : 'Add to favorites';
    return (
        <div className="card">
            {image && <img className="card-img-top" src={image} alt={title} />}
            <div className="card-body">
                <h5 className="card-title">
                    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                </h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                    <small className="text-muted">Published at {moment(publishedAt).fromNow()}</small>
                </p>
            </div>
            <div className="card-footer bg-transparent border-success">
                <button disabled={props.removeNews === undefined}
                        className="btn btn-light"
                        onClick={props.removeNews}>
                    <FontAwesomeIcon icon={faTrashAlt} /></button>
                <button className="btn btn-light float-right" title={iconTitle} onClick={() => toggleFavorite(props.news)}>
                    <FontAwesomeIcon icon={favIcon} />
                </button>
            </div>
        </div>
    )
};

News.propTypes = {
    news: PropTypes.object.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    removeNews: PropTypes.any.isRequired
};

export default News;