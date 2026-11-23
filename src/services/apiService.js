import { API_URL } from "../config";

export const getGames = async function() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`CUSTOM MESSEGE!!!!!!!!!!!: Request failed ${response.status}`)
    }
    const games = await response.json();
    return games;
}