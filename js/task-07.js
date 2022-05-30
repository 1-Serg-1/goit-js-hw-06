const refs = {
    inputRef: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text'),
};

refs.inputRef.addEventListener('input', currentFontSize);

function currentFontSize(event) {
    refs.textRef.style.fontSize = `${event.currentTarget.value}px`
};