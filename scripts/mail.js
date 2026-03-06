function sendEmail() {
    const subject = "";
    const email = "arnavshrestha44@gmail.com";
    const body = "";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}