let members = JSON.parse(localStorage.getItem("family")) || [];

let container = document.getElementById("familyList");

members.forEach(m => {
  let div = document.createElement("div");
  div.innerHTML = `<b>${m.name}</b> (${m.relation}) - ${m.year}`;
  container.appendChild(div);
});
