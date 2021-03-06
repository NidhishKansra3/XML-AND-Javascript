(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../data/Country_currency":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"Country":"Armenia","Currency":"Dram","Currency_Code":"AMD"},
	{"id":2,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":3,"Country":"Nigeria","Currency":"Naira","Currency_Code":"NGN"},
	{"id":4,"Country":"Iran","Currency":"Rial","Currency_Code":"IRR"},
	{"id":5,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":6,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":7,"Country":"Tanzania","Currency":"Shilling","Currency_Code":"TZS"},
	{"id":8,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":9,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":10,"Country":"Honduras","Currency":"Lempira","Currency_Code":"HNL"},
	{"id":11,"Country":"Chile","Currency":"Peso","Currency_Code":"CLP"},
	{"id":12,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":13,"Country":"Mongolia","Currency":"Tugrik","Currency_Code":"MNT"},
	{"id":14,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":15,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":16,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":17,"Country":"Peru","Currency":"Sol","Currency_Code":"PEN"},
	{"id":18,"Country":"Sweden","Currency":"Krona","Currency_Code":"SEK"},
	{"id":19,"Country":"Denmark","Currency":"Krone","Currency_Code":"DKK"},
	{"id":20,"Country":"Sweden","Currency":"Krona","Currency_Code":"SEK"},
	{"id":21,"Country":"Ireland","Currency":"Euro","Currency_Code":"EUR"},
	{"id":22,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":23,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":24,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":25,"Country":"Thailand","Currency":"Baht","Currency_Code":"THB"},
	{"id":26,"Country":"Ecuador","Currency":"Dollar","Currency_Code":"USD"},
	{"id":27,"Country":"Honduras","Currency":"Lempira","Currency_Code":"HNL"},
	{"id":28,"Country":"Yemen","Currency":"Rial","Currency_Code":"YER"},
	{"id":29,"Country":"Israel","Currency":"Shekel","Currency_Code":"ILS"},
	{"id":30,"Country":"Czech Republic","Currency":"Koruna","Currency_Code":"CZK"},
	{"id":31,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":32,"Country":"Ukraine","Currency":"Hryvnia","Currency_Code":"UAH"},
	{"id":33,"Country":"Sweden","Currency":"Krona","Currency_Code":"SEK"},
	{"id":34,"Country":"Colombia","Currency":"Peso","Currency_Code":"COP"},
	{"id":35,"Country":"Republic of the Congo","Currency":"Franc","Currency_Code":"XAF"},
	{"id":36,"Country":"Colombia","Currency":"Peso","Currency_Code":"COP"},
	{"id":37,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":38,"Country":"Tunisia","Currency":"Dinar","Currency_Code":"TND"},
	{"id":39,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":40,"Country":"Ukraine","Currency":"Hryvnia","Currency_Code":"UAH"},
	{"id":41,"Country":"Pakistan","Currency":"Rupee","Currency_Code":"PKR"},
	{"id":42,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":43,"Country":"Cameroon","Currency":"Franc","Currency_Code":"XAF"},
	{"id":44,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":45,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":46,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":47,"Country":"Somalia","Currency":"Shilling","Currency_Code":"SOS"},
	{"id":48,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":49,"Country":"Ukraine","Currency":"Hryvnia","Currency_Code":"UAH"},
	{"id":50,"Country":"Thailand","Currency":"Baht","Currency_Code":"THB"},
	{"id":51,"Country":"Portugal","Currency":"Euro","Currency_Code":"EUR"},
	{"id":52,"Country":"Sweden","Currency":"Krona","Currency_Code":"SEK"},
	{"id":53,"Country":"Peru","Currency":"Sol","Currency_Code":"PEN"},
	{"id":54,"Country":"Azerbaijan","Currency":"Manat","Currency_Code":"AZN"},
	{"id":55,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":56,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":57,"Country":"Norway","Currency":"Krone","Currency_Code":"NOK"},
	{"id":58,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":59,"Country":"Portugal","Currency":"Euro","Currency_Code":"EUR"},
	{"id":60,"Country":"Laos","Currency":"Kip","Currency_Code":"LAK"},
	{"id":61,"Country":"Morocco","Currency":"Dirham","Currency_Code":"MAD"},
	{"id":62,"Country":"Mexico","Currency":"Peso","Currency_Code":"MXN"},
	{"id":63,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":64,"Country":"Haiti","Currency":"Gourde","Currency_Code":"HTG"},
	{"id":65,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":66,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":67,"Country":"Panama","Currency":"Balboa","Currency_Code":"PAB"},
	{"id":68,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":69,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":70,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":71,"Country":"Malaysia","Currency":"Ringgit","Currency_Code":"MYR"},
	{"id":72,"Country":"Malaysia","Currency":"Ringgit","Currency_Code":"MYR"},
	{"id":73,"Country":"Portugal","Currency":"Euro","Currency_Code":"EUR"},
	{"id":74,"Country":"Democratic Republic of the Congo","Currency":"Franc","Currency_Code":"CDF"},
	{"id":75,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":76,"Country":"Lebanon","Currency":"Pound","Currency_Code":"LBP"},
	{"id":77,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":78,"Country":"Thailand","Currency":"Baht","Currency_Code":"THB"},
	{"id":79,"Country":"Madagascar","Currency":"Ariary","Currency_Code":"MGA"},
	{"id":80,"Country":"Bangladesh","Currency":"Taka","Currency_Code":"BDT"},
	{"id":81,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":82,"Country":"Peru","Currency":"Sol","Currency_Code":"PEN"},
	{"id":83,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":84,"Country":"Guatemala","Currency":"Quetzal","Currency_Code":"GTQ"},
	{"id":85,"Country":"United Kingdom","Currency":"Pound","Currency_Code":"GBP"},
	{"id":86,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":87,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":88,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":89,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":90,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":91,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":92,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":93,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":94,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":95,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":96,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":97,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":98,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":99,"Country":"Japan","Currency":"Yen","Currency_Code":"JPY"},
	{"id":100,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":101,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":102,"Country":"Croatia","Currency":"Kuna","Currency_Code":"HRK"},
	{"id":103,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":104,"Country":"Argentina","Currency":"Peso","Currency_Code":"ARS"},
	{"id":105,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":106,"Country":"Peru","Currency":"Sol","Currency_Code":"PEN"},
	{"id":107,"Country":"Sweden","Currency":"Krona","Currency_Code":"SEK"},
	{"id":108,"Country":"Tajikistan","Currency":"Somoni","Currency_Code":"TJS"},
	{"id":109,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":110,"Country":"France","Currency":"Euro","Currency_Code":"EUR"},
	{"id":111,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":112,"Country":"Madagascar","Currency":"Ariary","Currency_Code":"MGA"},
	{"id":113,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":114,"Country":"Mexico","Currency":"Peso","Currency_Code":"MXN"},
	{"id":115,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":116,"Country":"Zimbabwe","Currency":"Dollar","Currency_Code":"ZWL"},
	{"id":117,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":118,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":119,"Country":"Egypt","Currency":"Pound","Currency_Code":"EGP"},
	{"id":120,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":121,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":122,"Country":"Ukraine","Currency":"Hryvnia","Currency_Code":"UAH"},
	{"id":123,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":124,"Country":"Albania","Currency":"Lek","Currency_Code":"ALL"},
	{"id":125,"Country":"Argentina","Currency":"Peso","Currency_Code":"ARS"},
	{"id":126,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":127,"Country":"Sweden","Currency":"Krona","Currency_Code":"SEK"},
	{"id":128,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":129,"Country":"Ukraine","Currency":"Hryvnia","Currency_Code":"UAH"},
	{"id":130,"Country":"Japan","Currency":"Yen","Currency_Code":"JPY"},
	{"id":131,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":132,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":133,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":134,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":135,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":136,"Country":"Canada","Currency":"Dollar","Currency_Code":"CAD"},
	{"id":137,"Country":"Czech Republic","Currency":"Koruna","Currency_Code":"CZK"},
	{"id":138,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":139,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":140,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":141,"Country":"Greece","Currency":"Euro","Currency_Code":"EUR"},
	{"id":142,"Country":"Botswana","Currency":"Pula","Currency_Code":"BWP"},
	{"id":143,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":144,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":145,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":146,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":147,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":148,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":149,"Country":"Ukraine","Currency":"Hryvnia","Currency_Code":"UAH"},
	{"id":150,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":151,"Country":"Afghanistan","Currency":"Afghani","Currency_Code":"AFN"},
	{"id":152,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":153,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":154,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":155,"Country":"Poland","Currency":"Zloty","Currency_Code":"PLN"},
	{"id":156,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":157,"Country":"Philippines","Currency":"Peso","Currency_Code":"PHP"},
	{"id":158,"Country":"Sweden","Currency":"Krona","Currency_Code":"SEK"},
	{"id":159,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":160,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":161,"Country":"Liberia","Currency":"Dollar","Currency_Code":"LRD"},
	{"id":162,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":163,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":164,"Country":"France","Currency":"Euro","Currency_Code":"EUR"},
	{"id":165,"Country":"Czech Republic","Currency":"Koruna","Currency_Code":"CZK"},
	{"id":166,"Country":"Israel","Currency":"Shekel","Currency_Code":"ILS"},
	{"id":167,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":168,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":169,"Country":"Czech Republic","Currency":"Koruna","Currency_Code":"CZK"},
	{"id":170,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":171,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":172,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":173,"Country":"Indonesia","Currency":"Rupiah","Currency_Code":"IDR"},
	{"id":174,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":175,"Country":"Argentina","Currency":"Peso","Currency_Code":"ARS"},
	{"id":176,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":177,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":178,"Country":"France","Currency":"Euro","Currency_Code":"EUR"},
	{"id":179,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":180,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":181,"Country":"Iran","Currency":"Rial","Currency_Code":"IRR"},
	{"id":182,"Country":"Cyprus","Currency":"Euro","Currency_Code":"EUR"},
	{"id":183,"Country":"Niger","Currency":"Franc","Currency_Code":"XOF"},
	{"id":184,"Country":"United States","Currency":"Dollar","Currency_Code":"USD"},
	{"id":185,"Country":"Afghanistan","Currency":"Afghani","Currency_Code":"AFN"},
	{"id":186,"Country":"Japan","Currency":"Yen","Currency_Code":"JPY"},
	{"id":187,"Country":"Canada","Currency":"Dollar","Currency_Code":"CAD"},
	{"id":188,"Country":"Croatia","Currency":"Kuna","Currency_Code":"HRK"},
	{"id":189,"Country":"Mexico","Currency":"Peso","Currency_Code":"MXN"},
	{"id":190,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":191,"Country":"United States","Currency":"Dollar","Currency_Code":"USD"},
	{"id":192,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":193,"Country":"Brazil","Currency":"Real","Currency_Code":"BRL"},
	{"id":194,"Country":"Czech Republic","Currency":"Koruna","Currency_Code":"CZK"},
	{"id":195,"Country":"Russia","Currency":"Ruble","Currency_Code":"RUB"},
	{"id":196,"Country":"Saudi Arabia","Currency":"Rial","Currency_Code":"SAR"},
	{"id":197,"Country":"Guatemala","Currency":"Quetzal","Currency_Code":"GTQ"},
	{"id":198,"Country":"Syria","Currency":"Pound","Currency_Code":"SYP"},
	{"id":199,"Country":"China","Currency":"Yuan Renminbi","Currency_Code":"CNY"},
	{"id":200,"Country":"Sweden","Currency":"Krona","Currency_Code":"SEK"}]
},{}],3:[function(require,module,exports){
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

},{"./controller/Country":1}]},{},[3]);
