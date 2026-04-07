// Ambil elemen-elemen yang dibutuhkan
const modal = document.getElementById("paymentModal");
const closeBtn = document.querySelector(".close-btn");
const modalText = document.getElementById("modalProductText");
const confirmBtn = document.getElementById("confirmBtn");

let selectedProduct = "";

// Tambahkan event listener ke semua tombol beli
document.querySelectorAll(".btn-buy").forEach(button => {
    button.addEventListener("click", function() {
        const card = this.closest(".card");
        selectedProduct = card.getAttribute("data-name");
        const price = card.getAttribute("data-price");

        modalText.innerText = `Anda akan membeli: ${selectedProduct} seharga Rp ${price}`;
        modal.style.display = "flex";
    });
});

// Tutup modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Logika tombol konfirmasi (Redirect ke WhatsApp)
confirmBtn.onclick = () => {
    const method = document.getElementById("paymentMethod").value;
    const phone = "628123456789"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya ingin membeli produk: *${selectedProduct}* menggunakan metode *${method}*.`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
};

