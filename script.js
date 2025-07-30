// Inputs
const chairQty = document.getElementById("chairQty");
const chairCover = document.getElementById("chairCover");
const table4Qty = document.getElementById("table4Qty");
const table4Cover = document.getElementById("table4Cover");
const table6Qty = document.getElementById("table6Qty");
const table6Cover = document.getElementById("table6Cover");
const kiddieSetQty = document.getElementById("kiddieSetQty");
const tentQty = document.getElementById("tentQty");
const totalDisplay = document.getElementById("total");

// Prices
const PRICES = {
  chair: 15,
  chairCover: 5,
  table4: 120,
  table4Cover: 20,
  table6: 150,
  table6Cover: 20,
  kiddieSet: 200,
  tent: 500
};

function calculateTotal() {
  const chairs = parseInt(chairQty.value) || 0;
  const tables4 = parseInt(table4Qty.value) || 0;
  const tables6 = parseInt(table6Qty.value) || 0;
  const kiddies = parseInt(kiddieSetQty.value) || 0;
  const tents = parseInt(tentQty.value) || 0;

  let total = 0;

  total += chairs * PRICES.chair;
  if (chairCover.checked) total += chairs * PRICES.chairCover;

  total += tables4 * PRICES.table4;
  if (table4Cover.checked) total += tables4 * PRICES.table4Cover;

  total += tables6 * PRICES.table6;
  if (table6Cover.checked) total += tables6 * PRICES.table6Cover;

  total += kiddies * PRICES.kiddieSet;
  total += tents * PRICES.tent;

  totalDisplay.textContent = total.toLocaleString();
}

// Event listeners
[
  chairQty, chairCover,
  table4Qty, table4Cover,
  table6Qty, table6Cover,
  kiddieSetQty, tentQty
].forEach(el => el.addEventListener("input", calculateTotal));

calculateTotal(); // Initial call

// Image modal logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".photo-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const imgName = btn.getAttribute("data-img");
    modalImg.src = `images/${imgName}`;
    modal.style.display = "block";
  });
});

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target == modal) modal.style.display = "none";
};
