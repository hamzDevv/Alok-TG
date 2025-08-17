AOS.init({
    duration: 1000,
    once: true
});

function generate() {
    const template = document.getElementById("template").value;
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    let result = "";

    for (let i = start; i <= end; i++) {
        result += template.replaceAll("{i}", i) + "\n";
    }

    document.getElementById("output").textContent = result;
}

function copyText() {
    const text = document.getElementById("output").textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("✅ Hasil berhasil dicopy!");
    });
}
