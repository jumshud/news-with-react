import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "../actions/actionTypes";
import { updateObject } from "../utilities/object";
import LocalStorage from "../utilities/LocalStorage";

let favorites = LocalStorage.getItem('favorites');
let initialState = {
    favorites: favorites || [],
};

const favoritesReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES: {
            let favNews = LocalStorage.getItem('favorites') || [];
            favNews.push(action.payload);
            LocalStorage.setItem('favorites', favNews);
            return updateObject(state, {
                favorites: favNews
            });
        }
        case REMOVE_FROM_FAVORITES: {
            let favNews = LocalStorage.getItem('favorites');
            if (favNews) {
                favNews = favNews.filter((el) =>  {
                    return el.url !== action.payload.url
                });
                LocalStorage.setItem('favorites', favNews);
            }

            return updateObject(state, {
                favorites: favNews
            });
        }
        default:
            return state;
    }
};

export default favoritesReducer;
