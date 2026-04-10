function calculate() {
  let travel = document.getElementById("travel").value;
  let electricity = document.getElementById("electricity").value;

  let footprint = (travel * 0.21) + (electricity * 0.5);

  document.getElementById("result").innerText =
    "Your Carbon Footprint: " + footprint.toFixed(2) + " kg CO2";
}