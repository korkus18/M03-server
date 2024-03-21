document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const jmeno = formData.get("jmeno");
    const jidlo = formData.get("jidlo");

    console.log("Jméno: " + jmeno);
    console.log("Oblíbené jídlo: " + jidlo);

    fetch("/", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .catch(error => console.error("Error:", error));
});
