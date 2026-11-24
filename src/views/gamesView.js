export const render = function (games) {
    const parentElement = document.querySelector('.game-grid');

    if (!parentElement) {
        throw new Error("Game list element .game-grid was not found.");
    };

    const fragment = document.createDocumentFragment();

    games.forEach((game, i) => {
        const card = document.createElement("article");
        card.className = "game-card";

        const gameArt = document.createElement("div");
        gameArt.className = "game-art";

        const image = document.createElement("img");
        image.className = "game-art-image";
        image.src = game.thumbnail;
        image.alt = "";
        image.loading = "lazy"; 

        const developer = document.createElement("span");
        developer.className = "art-label";
        developer.textContent = game.developer;

        const number = document.createElement("span");
        number.className = "art-number";
        number.textContent = String(i + 1);

        const platformTag = document.createElement("span");
        platformTag.className = "platform-tag"
        platformTag.textContent = game.platform;

        const favoriteButton = document.createElement("button");
        favoriteButton.className = "heart-button"
        favoriteButton.type = "button"
        favoriteButton.setAttribute(
            "aria-label",
            `Add ${game.title} to favorites`
        );
        favoriteButton.textContent = "♡";
        
        gameArt.append(image, developer, number, platformTag, favoriteButton);

        const gameInfo = document.createElement("div");
        gameInfo.className = "game-info"

        const titleRow = document.createElement("div");
        titleRow.className = "game-title-row";

        const title = document.createElement("h3");
        title.textContent = game.title;
        titleRow.append(title);

        const meta = document.createElement("p");
        meta.className = "game-meta";
        meta.textContent = game.genre;

        const footer = document.createElement("div");
        footer.className = "game-footer";

        const viewLabel = document.createElement("span");
        viewLabel.className = "play-link";
        viewLabel.textContent = "View game";

        const arrow = document.createElement("b");
        arrow.textContent = "↗";

        viewLabel.append(arrow);
        footer.append(viewLabel);

        gameInfo.append(titleRow, meta, footer);
        card.append(gameArt, gameInfo);
        fragment.append(card);
    });

    parentElement.replaceChildren(fragment);
}