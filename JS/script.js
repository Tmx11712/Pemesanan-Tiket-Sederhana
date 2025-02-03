let selectedTicket = null;

function selectTicket(type) {
  // Remove selected class from all tickets
  document.querySelectorAll(".ticket-card").forEach((card) => {
    card.classList.remove("selected");
  });

  // Add selected class to clicked ticket
  const ticketCard = document.querySelector(`[data-type="${type}"]`);
  ticketCard.classList.add("selected");

  // Update selected ticket
  selectedTicket = type;

  // Update summary
  document.getElementById("selectedTicketType").textContent =
    type === "regular" ? "Regular Ticket" : "VIP Ticket";

  // Enable/disable button based on form completion
  updateButtonState();
}

function updateButtonState() {
  const nama = document.getElementById("nama").value.trim();
  const button = document.getElementById("pesanButton");
  button.disabled = !nama || !selectedTicket;
}

function pesanTiket() {
  const nama = document.getElementById("nama").value.trim();
  const ticketType = selectedTicket;
  const price = ticketType === "regular" ? 50000 : 100000;

  alert(
    `Pemesanan Tiket Berhasil!\n\n` +
      `Nama: ${nama}\n` +
      `Jenis Tiket: ${
        ticketType === "regular" ? "Regular Ticket" : "VIP Ticket"
      }\n` +
      `Harga: Rp ${price.toLocaleString("id-ID")}`
  );
}

// Add input listener to name field
document.getElementById("nama").addEventListener("input", updateButtonState);
