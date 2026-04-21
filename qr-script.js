function docReady(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 1);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

docReady(function() {
	var resultContainer = document.getElementById('qr-reader-result');
	var lastResult = 0;
	var countResult = 0;
	var html5QrcodeScanner = new Html5QrcodeScanner(
		"qr-reader", { fps: 10, qrbox: 250 });

	function onScanSuccess(decodedText, decodedResult) {
		if (decodedText !== lastResult) {
			++countResult;
			lastResult = decodedText;
			console.log(`Scan Result = ${decodedText}`, decodedResult);

			resultContainer.innerHTML += `<div>[${countResult}] - ${decodedText}</div>`;

			html5QrcodeScanner.clear();
		}
	}

	function onScanError(qrCodeError) { }

	html5QrcodeScanner.render(onScanSuccess, onScanError);
});
