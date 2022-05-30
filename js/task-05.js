const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', inputValue);

function inputValue(event) {
    refs.input.value.trim() === ""
        ? refs.output.textContent = "Anonymous"
        : refs.output.textContent = event.currentTarget.value.trim();
 };

