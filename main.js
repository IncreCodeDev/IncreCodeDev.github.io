var Money = 10;
function Tick() {
	Money++;
}
setInterval(Tick, 100);
document.getElementById("money").innerHTML = Money;
