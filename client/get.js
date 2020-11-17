const ul = document.querySelector("ul");

fetch
(
	"http://localhost/php-fetch-api/api/get.php",
	{
		method: "GET",
		headers: {
			"Accept": "application/json"
		},
		mode: "same-origin",
		credentials: "same-origin"
	}
).then((res) => res.json())
.then((data) => display(data))
.catch((err) => console.error(err));

function display(data)
{
	for(let key in data)
	{
		let li = document.createElement("li");
		li.innerText = `${key}: ${data[key]}`;
		ul.appendChild(li);
	}
}
