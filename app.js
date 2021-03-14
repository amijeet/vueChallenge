// console.log("Hello, anyone thereeeee?");
var baseURL = "https://api.coinranking.com/v2/coins";
var proxyURL = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankingef8a0ae3f2efa8c89fac639a0ca76ab41226589e8fe94828";
var pageSize = 50;
var i,
	pagenumber = 0;

function getsm() {
	pageSize = 10;
	pagenumber = 0;
	callAPI();
}
function getmd() {
	pageSize = 25;
	pagenumber = 0;
	callAPI();
}
function getlg() {
	pageSize = 50;
	pagenumber = 0;
	callAPI();
}
function previous() {
	if (pagenumber > 0) {
		pagenumber -= 1;
		callAPI();
	}
}
function next() {
	if (pagenumber < 50 / pageSize - 1) {
		pagenumber += 1;
		callAPI();
	}
}

function callAPI() {
	var baseURL = "https://api.coinranking.com/v2/coins";
	var proxyURL = "https://cors-anywhere.herokuapp.com/";
	var apiKey = "coinrankingef8a0ae3f2efa8c89fac639a0ca76ab41226589e8fe94828";
	fetch(`${proxyURL}${baseURL}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"X-My-Custom-Header": `${apiKey}`,
			"Access-Control-Allow-Origin": "*",
		},
	})
		.then((response) => {
			if (response.ok) {
				response.json().then((json) => {
					// console.log(json.data.coins);

					let coinsData = json.data.coins;

					if (coinsData.length > 0) {
						var cryptoCoins = "";
					}
					for (
						i = pageSize * pagenumber;
						i < (pagenumber + 1) * pageSize;
						i++
					) {
						var coin = coinsData[i];
						cryptoCoins += "<tr>";
						cryptoCoins += `<td> <img src="${coin.iconUrl}" width="20px"> </td>`;
						cryptoCoins += `<td> ${coin.name} </td>`;
						cryptoCoins += `<td> ${coin.symbol} </td>`;
						cryptoCoins += `<td> $ ${Math.round(coin.price)} </td>`;
						cryptoCoins += `<td> ${coin.change} </td>`;
						("</tr>");
					}
					// coinsData.forEach((coin) => {
					// 	cryptoCoins += "<tr>";
					// 	cryptoCoins += `<td> <img src="${coin.iconUrl}" width="20px"> </td>`;
					// 	cryptoCoins += `<td> ${coin.name} </td>`;
					// 	cryptoCoins += `<td> ${coin.symbol} </td>`;
					// 	cryptoCoins += `<td> $ ${Math.round(coin.price)} </td>`;
					// 	cryptoCoins += `<td> ${coin.change} </td>`;
					// 	("</tr>");
					// });
					document.getElementById("data").innerHTML = cryptoCoins;
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
}
