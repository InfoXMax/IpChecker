const checkIpButton = document.getElementById("check-ip-button");
const ipAddress = document.getElementById("ip-address");

checkIpButton.addEventListener("click", () => {
  fetch("https://api.ipify.org/?format=json")
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      ipAddress.innerHTML = ip;
    });
});

  