function sendMessage() {
    const urlToWhatsapp = `https://wa.me/6285777143769?text=Nama saya, ${nama.value}, ${pesan.value}`;
    window.open(urlToWhatsapp, "_blank");
  }
  