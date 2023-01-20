// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
// ├┴┐│ │ │  │ │ ││││└─┐
// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
// Function to print Button Cards.

const generateFirstButtonsContainer = () => {
  for (const button of CONFIG.firstButtonsContainer) {
    let item = `
        <a
          href="${button.link}"
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          class="text_correction card button button__${button.id}"
        >
		${button.name}
        </a>
    `;
    const position = "beforeend";

    buttons_1.insertAdjacentHTML(position, item);
  }
};

generateFirstButtonsContainer();
