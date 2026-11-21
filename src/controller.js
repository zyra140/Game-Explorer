import { loadGames, state } from "./model";
import { render } from "./views/gamesView";

export async function init () {
    try {
        await loadGames();
        console.log(state.games);
        render(state.games);
    } catch (err) {
        console.error(err);
    }  
}