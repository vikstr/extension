function addMessage(message) {
    let chat = document.querySelector("#chat .flex-wrapper");
    let circle = document.createElement("div");
    circle.classList.add("circle");
    let message_div = document.createElement("div");
    message_div.classList.add("message");
    message_div.textContent = message;
    let div_container = document.createElement("div");
    div_container.classList.add("field-container");
    div_container.appendChild(circle);
    div_container.appendChild(message_div);
    chat.appendChild(div_container);
    let container = document.querySelector("#chat > .container");
    container.scrollTop = container.scrollHeight;
}

let input = document.getElementById("message-field");

input.onkeypress = function (event) {
    if(event.which === 13) {
        let message = this.value;
        addMessage(message);
        this.value = "";
        this.blur();
    } else {
        if(this.value.length >= 70) return false;
    }
};
