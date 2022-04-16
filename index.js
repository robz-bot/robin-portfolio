const btn = document.getElementById("sendBtn");
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = YOUR_SERVICE_ID;
    const templateID = YOUR_TEMPLATE_ID;
    console.log(this);
    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            btn.value = "Send";
            document.getElementById("myForm").reset()
            alert("Sent!");
        },
        (err) => {
            btn.value = "Send";
            alert(JSON.stringify(err));
        }
    );
});
var YOUR_PUBLIC_KEY = "R_LcwJ8roLn5DVXjm";
var YOUR_TEMPLATE_ID = "template_ifjqa3e";
var YOUR_SERVICE_ID = "service_j6kg9lu";
(function() {
    emailjs.init(YOUR_PUBLIC_KEY);
    // emailjs.init('R_LcwJ8roLn5DVXjm')
})();