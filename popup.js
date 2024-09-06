// Setup Visual Elements

window.matchMedia('(prefers-color-scheme: dark').addEventListener('change', e => {
    if (e.matches) {
        setDarkMode();
    } else {
        setLightMode();
    }
})

function setDarkMode() {

}

function setLightMode() {
    
}

class Bookmark {
    constructor(name, tabs) {
        this.name = name;
        this.tabs = tabs;
    }
}

let createBookmarkForm = document.getElementById("create-bookmark-form");
let savedBookmarksSection = document.getElementById("saved-bookmarks-section");


createBookmarkForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createBookMark();
});

async function createBookMark() {
    let createBookmarkInput = document.getElementById("create-bookmark-input");
    
    const tabs = await chrome.tabs.query({currentWindow: true});
    let bookmark = new Bookmark(createBookmarkInput.value, tabs);
    console.log(bookmark);

    let savedBookmarks = readAllBookmarks();
    if (savedBookmarks != null) {

    } else {
        savedBookmarks = {
            "1": bookmark
        }
    }
    console.log(savedBookmarks);
    // localStorage.setItem("window-bookmarks-saved", JSON.stringify(savedBookmarks));

}

function readAllBookmarks() {
    return JSON.parse(localStorage.getItem("window-bookmarks-saved"));
}

function updateBookMark(id) {
    
}

function deleteBookMark(id) {

}