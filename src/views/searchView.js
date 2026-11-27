const searchInput = document.querySelector('.search-input');


export const addHandlerSearch = function (handler) {
    searchInput.addEventListener('input', function() {
        handler(searchInput.value);
    })
}