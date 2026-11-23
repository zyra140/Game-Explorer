export const render = function (games) {
    const parentElement = document.querySelector('.game-grid');

    if (!parentElement) {
        throw new Error("Game list element .game-grid was not found.");
    };

    parentElement.textContent = "";
    
    let HTML =''

    games.forEach((game, i) => {
        HTML +=
        `
            <article class="game-card">
                <div class="game-art">
                    <span class="art-label">${game.developer}</span>
                    <span class="art-number">${i+1}</span>
                    <span class="platform-tag">${game.platform}</span>
                    <button class="heart-button" type="button" aria-label="Add ${game.title} to favorites">♡</button>
                </div>
                <div class="game-info">
                    <div class="game-title-row"><h3>${game.title}</h3><span class="rating"></span></div>
                    <p class="game-meta">${game.genre}</p>
                    <div class="game-footer"><span class="play-link">View game <b>↗</b></span></div>
                </div>
            </article>
        `
    })

    parentElement.insertAdjacentHTML("afterbegin", HTML);
}