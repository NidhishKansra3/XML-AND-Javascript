const Countries = require("../data/Country_currency");

const getAll = (data = {}) =>
	new Promise((resolve) => {
		let result = Array.from(Countries);
		if (data.id) {
			result = result.filter((x) => x.id === parseInt(data.id));
		}
		if (data.Country) {
			result = result.filter((x) => x.Country.toLowerCase().includes(data.Country));
		}
		if (data.Currency) {
			result = result.filter((x) => x.Currency.toLowerCase().includes(data.Currency));
		}
		if (data.Currency_Code) {
			result = result.filter((x) => x.Currency_Code === data.Currency_Code);
		}
		resolve({ code: 200, data: result });
	});

const getById = (id) =>
	new Promise((resolve) => {
		const Country = Country.find((Country) => Country.id === id);

		if (Country) {
			resolve({ code: 200, data: Country });
		} else {
			resolve({
				code: 404,
				data: { message: `No Country found for id ${id}` },
			});
		}
	});

module.exports = {
	getAll,
	getById,
};
