// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Generate Layout.

const generateLayout = () => {
	let firstButtonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>
  `;

	const position = 'beforeend';

			linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
			linksBlock.classList.add('removeGap');

};

generateLayout();
