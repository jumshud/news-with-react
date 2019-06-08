import { baseAction } from './base';
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "./actionTypes";

/**
 * Add news to favorite list
 *
 * @param news
 * @return {Function}
 */
function addToFavorites(news) {
    return dispatch => {
        dispatch(baseAction.success(news, ADD_TO_FAVORITES));
    };
}
/**
 * Add news to favorite list
 *
 * @param news
 * @return {Function}
 */
function removeFromFavorites(news) {
    return dispatch => {
        dispatch(baseAction.success(news, REMOVE_FROM_FAVORITES));
    };
}

export const favorites = {
    addToFavorites,
    removeFromFavorites
};
