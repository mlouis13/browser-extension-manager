const URL = "http://10.69.4.8:3000/v1/";

document.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch(URL + "extensions", {
		method: "GET",
		headers: {
			Authorization: "123",
		},
	});
	if (response.status !== 200) {
		return;
	}
	const responseJS = await response.json();
	console.log(responseJS);
});
