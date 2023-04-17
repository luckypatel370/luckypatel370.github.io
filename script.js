const fontListElement = document.getElementById("font-list");
const inputBoxElement = document.getElementById("input-box");
const submitButtonElement = document.getElementById("submit-button");

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

function initialize() {
    loadFonts();

    const fontList = document.querySelectorAll(".font-preview");

    fontList.forEach((font) => {
        font.addEventListener("click", () => {
            fontList.forEach((font) => font.classList.remove("selected"));
            font.classList.add("selected");
            setSelectedFont(font.dataset.fontName);
        });
    });

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.style.opacity = 1;
    darkModeToggle.style.pointerEvents = "auto";
}



submitButtonElement.addEventListener("click", () => {
    const inputText = inputBoxElement.value.trim();

    if (inputText) {
        fontListElement.innerHTML = "";

        const fontFamilies = ["Shrikhand", "Bungee Shade", "Monoton", "Russo One", "Trade Winds", "Unica One", "Zilla Slab Highlight", "Arial", "Times New Roman", "Verdana", "Courier New", "Impact", "Comic Sans MS", "Lucida Console", "Tahoma", "Palatino Linotype", "Georgia", "Helvetica", "Open Sans", "Roboto", "Montserrat", "Lato", "Bangers", "Chewy", "Faster One", "Frijole", "Knewave", "Luckiest Guy", "Permanent Marker", "Righteous", "Shadows Into Light", "Sigmar One",];

        const fontStyles = [];
        //

        for (let i = 0; i < fontFamilies.length; i++) {
            const style = {
                // size: `${16 + i * 2}px`,
                //  weight:  "normal",
                //  decoration: "none"
            };
            fontStyles.push(style);
        }

        fontFamilies.forEach((font, index) => {
            const fontItemElement = document.createElement("div");
            fontItemElement.classList.add("font-item");
            fontItemElement.setAttribute("data-font", font);

            const fontLinkElement = document.createElement("a");
            fontLinkElement.href = "#";
            fontLinkElement.style.fontFamily = font;
            fontLinkElement.style.fontSize = fontStyles[index].size;
            fontLinkElement.style.fontWeight = fontStyles[index].weight;
            fontLinkElement.style.textDecoration = fontStyles[index].decoration;
            fontLinkElement.textContent = inputText;

            fontItemElement.appendChild(fontLinkElement);
            fontListElement.appendChild(fontItemElement);
        });
    }
});
// Get the custom cursor element
const customCursor = document.getElementById("custom-cursor");

// Add a mousemove event listener to the document
// Add a mousemove event listener to the body
const body = document.querySelector("body");
body.addEventListener("mousemove", (event) => {
  // Set the position of the custom cursor to the mouse position
  customCursor.style.top = event.clientY + "px";
  customCursor.style.left = event.clientX + "px";
});

// Add a mouseover event listener to all elements with the "hoverable" class
const hoverableElements = document.querySelectorAll(".hoverable");
hoverableElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    // Add the "animate" class to the custom cursor when hovering over an element
    customCursor.classList.add("animate");
  });
  element.addEventListener("mouseout", () => {
    // Remove the "animate" class from the custom cursor when leaving an element
    customCursor.classList.remove("animate");
  });
});


// Add the "hoverable" class to the input-box element
inputBoxElement.classList.add("hoverable");

// Add the "hoverable" class to all text elements




// Add the "hoverable" class to the input-box element
inputBoxElement.classList.add("hoverable");

// Add the "hoverable" class to all text elements
const textElements = document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6");
textElements.forEach((element) => {
  element.classList.add("hoverable");
});