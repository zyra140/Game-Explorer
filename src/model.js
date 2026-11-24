import { getGames } from "./services/apiService";

export const state = {
    games: [],
}

/**
 * Fetches games and stores them in the application state.
 * @returns {Promise<void>} Resolves when the state has been updated.
 * @throws {Error} If fetching games fails.
 */
export async function loadGames() {
    state.games = await getGames();
}