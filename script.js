const btn = document.querySelector('.dice');
const adviceDiv = document.querySelector('.advice-div');
// const adviceNum = document.querySelector('.advice-num');

btn.addEventListener('click', updateQuote);


function updateQuote() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.adviceslip.com/advice', true);
    xhr.onload = function () {
        if (this.status == 200) {
            let response = JSON.parse(this.responseText)
            response = response.slip
            let output = '';
            output += `
                <p class="advice-num">Advice #${response.id}</p>
                <p class="quote"><q>${response.advice}</q></p>`;
            adviceDiv.innerHTML = output;
        }
    }
    xhr.send();
}