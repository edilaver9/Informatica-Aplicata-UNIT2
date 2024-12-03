document.getElementById("monitorizare").addEventListener("dblclick", function () {
    const images = [
        "screenshots/ram.png",
        "screenshots/cpu.png",
        "screenshots/disk.png"
    ];
    let index = 0;
    const container = document.getElementById("imagini-monitorizare");
    container.innerHTML = '';

    const slideshow = setInterval(() => {
        container.innerHTML = `<img src="${images[index]}" alt="Monitorizare ${index + 1}">`;
        index = (index + 1) % images.length;
    }, 3000);

    setTimeout(() => clearInterval(slideshow), 15000);
});
