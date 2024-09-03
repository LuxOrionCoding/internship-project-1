var animatedHoverBtn = document.querySelectorAll(
    "*[data-hover-animation='wave']"
);

animatedHoverBtn.forEach((btn) => {
    const ctaBtnText = btn.querySelector(".btn-text");
    const ctaBtnTextWrapper = btn.querySelector(".text-wrapper");
    const ctaBtnTextWrapperUpper = btn.querySelector(".text-wrapper .upper");
    const ctaBtnTextWrapperLower = btn.querySelector(".text-wrapper .lower");

    // Set the height of the text wrapper based on the text height
    ctaBtnTextWrapper.style.height = `${ctaBtnText.clientHeight + 1}px`;

    // Split the button text into an array of characters
    const ctaBtnTextArray = ctaBtnText.textContent.split("");

    // Function to create a <p> element with specified content and transition
    function createLetterElement(letter, index) {
        const element = document.createElement("p");
        element.innerHTML = letter === " " ? "&nbsp;" : letter;
        const delay = index * 15; // Transition delay based on index
        element.style.transition = `all 400ms ${delay}ms cubic-bezier(0.47, 0.06, 0, 0.97)`;
        return element;
    }

    // Append each letter as <p> elements to the respective wrappers
    ctaBtnTextArray.forEach((letter, index) => {
        const upperElement = createLetterElement(letter, index);
        const lowerElement = createLetterElement(letter, index);
        ctaBtnTextWrapperUpper.appendChild(upperElement);
        ctaBtnTextWrapperLower.appendChild(lowerElement);
    });
});
