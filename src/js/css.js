
document.getElementById('copyBtn').addEventListener('click', function(){
copy() ;
})
;

function copy() {

    const str = document.getElementById('css').innerText ;
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    showMessage();

}

function showMessage() {
    const messageBG = document.createElement('DIV');
    messageBG.classList.add('message');

    const text = document.createElement('SPAN');
    text.classList.add('message-text');
    text.innerHTML = "Copied To Clip board";

    messageBG.appendChild(text);
    document.body.appendChild(messageBG);

    messageBG.addEventListener('click', function () {
        document.body.removeChild(messageBG);
    });

    setTimeout(function () {
        messageBG.style.display = 'none';
    }, 1000);
}
