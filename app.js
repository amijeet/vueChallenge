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
				console.log(json.data.coins);

				let coinsData = json.data.coins;

				if (coinsData.length > 0) {
					var cryptoCoins = "";
				}

				coinsData.forEach((coin) => {
					cryptoCoins += "<tr>";
					cryptoCoins += `<td> ${coin.uuid} </td>`;
					cryptoCoins += `<td> ${coin.price} </td>`;
					cryptoCoins += `<td> ${coin.rank} </td>`;
					cryptoCoins += `<td> ${coin.tier} </td>`;
					cryptoCoins += `<td> ${coin.name} </td>`;
					cryptoCoins += `<td> ${coin.symbol} </td>`;
					("</tr>");
				});
				document.getElementById("data").innerHTML = cryptoCoins;
			});
		}
	})
	.catch((error) => {
		console.log(error);
	});
