const input = document.querySelector('#comment');
const wrapper = document.querySelector('.wrap_messages');

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
})

function sendMessage() {
    const message = input.value;
    const finalMessage = checkSpam(message);
    showMessage(finalMessage);
    input.value = '';
}

function checkSpam(str) {
   return str.replace(/xxx|viagra/ig, "***")

}

function showMessage(str) {
    wrapper.insertAdjacentHTML("beforeend", `<div class="message">${str}</div>`);
}