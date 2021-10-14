// This script should just have a module that's used once to setup the weather searching
// api elements.
// Should get data from weather api, and return the data.
// Should apply form validation to form elements

const SearchDiv = (() => {
	function getDiv() {
		// one main div to return
		const mainDiv = document.createElement('div');
		const form = document.createElement('form');
		const searchInput = document.createElement('input');
		searchInput.type = "search";
		const submitButton = document.createElement('button');
		submitButton.textContent = "Submit"
		submitButton.type = "submit";
		
		// Temperature RB setup
		const parametersLabel = document.createElement('p');
		parametersLabel.textContent = "Select the temperature unit you prefer: ";
		const fLabel = document.createElement('label');
		fLabel.textContent = "F";
		const fahrenheitRB = document.createElement('input');
		fahrenheitRB.setAttribute('type', 'radio');
		fahrenheitRB.setAttribute('name', 'choice');
		// Setting fahrenheit to default selection
		fahrenheitRB.checked = true;
		fLabel.appendChild(fahrenheitRB);

		const cLabel = document.createElement('label');
		cLabel.textContent = "C";
		const celsiusRB = document.createElement('input');
		celsiusRB.setAttribute('type', 'radio');
		celsiusRB.setAttribute('name', 'choice');
		cLabel.appendChild(celsiusRB);

		// Add all elements to main div and return
		form.append(searchInput, submitButton, parametersLabel, fLabel, cLabel);
		mainDiv.appendChild(form);
		return mainDiv;
	}
	return { getDiv };
})();

export { SearchDiv };