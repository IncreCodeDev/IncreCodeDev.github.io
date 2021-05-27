var Money = 0;
function Tick() {
	Money++;
	document.getElementById("money").innerHTML = Money;
}
setInterval(Tick, 100);
