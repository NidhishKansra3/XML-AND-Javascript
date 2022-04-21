const { getAll } = require("./controller/Country");

const renderTable = (data) => {
	const tableBody = document.getElementById("table-data");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;

	const rows = source.reduce(
		(acc, { id, Country, Currency, Currency_Code }) =>
			acc +
			`<tr id="table-row-${id}"><td>${id}</td><td>${Country}</td><td>${Currency}</td><td>${Currency_Code}</td></tr>`,
		``
	);

	tableBody.innerHTML = rows;
};

getAll().then(({ data }) =>  {
  renderTable(data)
});

window.onSubmit = (event) => {
	event.preventDefault();

	const id = event.target.id.value;
	const Country = event.target.Country.value;
	const Currency = event.target.Currency.value;
	const Currency_Code = event.target.Currency_Code.value;

	getAll({ id, Country, Currency, Currency_Code }).then(({ data }) =>
		renderTable(data)
	);
};

window.onReset = () => {
	getAll().then(({ data }) => renderTable(data));
};
