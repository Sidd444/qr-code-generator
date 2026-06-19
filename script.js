
let currentQR = null;

function generateQR() {
    const text = document.getElementById('text').value.trim();
    const size = parseInt(document.getElementById('size').value);
    const qrContainer = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');

    if (!text) {
        alert("Please enter some text or URL");
        return;
    }

    qrContainer.innerHTML = '';

    currentQR = new QRCode(qrContainer, {
        text: text,
        width: size,
        height: size,
        colorDark: "#1e2937",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.style.display = 'block';
}

function downloadQR() {
    if (!currentQR) return;

    const canvas = document.querySelector('#qrcode canvas');
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

window.onload = function () {
    setTimeout(() => {
        generateQR();
    }, 300);
};
