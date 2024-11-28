// const itemName = document.getElementById("itemName");
// const itemPrice = document.getElementById("itemPrice");
// const Products = [];
let grandTotal = 0;

function litsenToClick(e) {
  e.preventDefault();
  const itemName = document.getElementById("itemName").value;
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);
  if (!itemName || !itemPrice || itemPrice <= 0) {
    alert("PLEASE ENTER VALID ITEMANME AND ITEMPRICE");
    return;
  }

  // console.log("itemPrice", itemPrice);
  // console.log("itemName", itemName);

  const gst = itemPrice * 0.18;
  const subTotal = itemPrice + gst;
  grandTotal += subTotal;

  const tableBody = document.querySelector("tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td class="px-6 py-4 text-black">${itemName}</td>
    <td class="px-6 py-4 text-black">₹${itemPrice.toFixed(2)}</td>
    <td class="px-6 py-4 text-black">₹${subTotal.toFixed(2)}</td>
  `;
  tableBody.appendChild(newRow);

  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";

  // console.log("grandTotal", grandTotal);
  document.getElementById(
    "gTotal"
  ).innerText = `GrandTotal : ₹${grandTotal.toFixed(2)}`;

  return;
}

document.getElementById("addItem").addEventListener("click", litsenToClick);
