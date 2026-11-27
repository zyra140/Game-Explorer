import { loadGames, state } from "./model";
import * as gamesView from "./views/gamesView.js";
import * as searchView from "./views/searchView.js";

export async function init () {
    try {
        gamesView.renderLoading();

        await loadGames();

        if (state.games.length === 0) {
            gamesView.renderEmpty();
        } else {
            gamesView.render(state.games);
        }   
 
    } catch (err) {
        console.error(err);
        gamesView.renderError("Could not load games. Please try again.")
    }  
}

const controlSearch = function(query) {
    console.log(query);
};

searchView.addHandlerSearch(controlSearch);