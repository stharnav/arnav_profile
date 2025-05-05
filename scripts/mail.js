function sendEmail() {
    const subject = "";
    const email = "arnavshrestha44@gmail.com";
    var body = "";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}