function updateCounter(idCounter, idCost, idTotal, increment) {
	var counter = document.getElementById(idCounter);
	var amount = 0;
	if (!isNaN(counter.value) && counter.value >= 0) {
		amount = Number(counter.value) + increment;
		if (amount < 0) {
			amount = 0;
		}
	} else {
		amount = 0;
	}
	counter.value = amount;
	costPerPiece = Number(document.getElementById(idCost).innerText);
	document.getElementById(idTotal).innerText = (amount * costPerPiece).toFixed(2);
	updatePrices();
}

  