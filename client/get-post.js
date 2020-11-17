const ul_before = document.querySelector("#data-before");
const ul_after = document.querySelector("#data-after");
const age = document.querySelector("#age");
const button = document.querySelector("button");

window.addEventListener("load", () => fetch_get());

button.addEventListener
(
	"click",
	(e) =>
	{
		e.preventDefault();

		if(age.value != "")
			fetch_post(age.value);
	}
);


function fetch_get()
{
	fetch
	(
		"../api/get.php",
		{
			method: "GET",
			headers: {
				"Accept": "application/json"
			},
			mode: "same-origin",
    		credentials: "same-origin"
		}
	).then((res) => res.json())
	.then((data) => display(data, ul_before))
	.catch((err) => console.error(err));
}

function fetch_post(value)
{
	fetch
	(
		"../api/post.php",
		{
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			mode: "same-origin",
    		credentials: "same-origin",
			body: JSON.stringify({ age: value })
		}
	).then((res) => res.json())
	.then((data) => display(data, ul_after))
	.catch((err) => console.error(err));
}

function display(data, ul)
{
	for(let key in data)
	{
		let li = document.createElement("li");
		li.innerText = `${key}: ${data[key]}`;
		ul.appendChild(li);
	}
}
