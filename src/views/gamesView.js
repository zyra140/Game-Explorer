export const render = function (games) {
    const parentElement = document.querySelector('.game-grid');
    parentElement.textContent = "";
    let HTML =''

    games.forEach((game, i) => {
        HTML +=
        `
            <article class="game-card">
                <div class="game-art art-warframe">
                    <span class="art-label">${game.developer}</span>
                    <span class="art-number">${i+1}</span>
                    <span class="platform-tag">${game.platform}</span>
                    <button class="heart-button" type="button" aria-label="Add Warframe to favorites">♡</button>
                </div>
                <div class="game-info">
                    <div class="game-title-row"><h3>${game.title}</h3><span class="rating">★ 4.8</span></div>
                        <p class="game-meta">${game.genre}<span>·</span> MMO</p>
                    <div class="game-footer"><span class="genre-tag">SCI-FI</span><span class="play-link">View game <b>↗</b></span></div>
                </div>
            </article>
        `
    })

    parentElement.insertAdjacentHTML("afterbegin", HTML);
}