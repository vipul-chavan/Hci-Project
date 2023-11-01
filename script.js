let counter = document.querySelector("span");
let count = 1;
setInterval(() => {
  count++;
  if (count > 3) location.replace("index.html");
}, 1000);
