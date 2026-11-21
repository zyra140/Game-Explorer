import { getGames } from "./services/apiService";

export const state = {
    games: [],
}

export async function loadGames() {
    try {
        state.games = await getGames();
    } catch (err) {
        console.error(err)
    }
}