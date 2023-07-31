// Mapeo de caracteres para la sustitución (puedes cambiarlos según desees)
const characterMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat',
    'z': '1'
};

function encryptText(text) {
    return text.toLowerCase().split('').map(char => characterMap[char] || char).join('');
}

function decryptText(text) {
    let decryptedText = text.toLowerCase();
    Object.keys(characterMap).forEach(key => {
        const replacement = characterMap[key];
        const regex = new RegExp(replacement, 'g');
        decryptedText = decryptedText.replace(regex, key);
    });
    return decryptedText;
}

function handleButtonClick(action) {
    const inputTextArea = document.getElementById('input-text');
    const outputTextArea = document.getElementById('output-text');

    if (action === 'encrypt') {
        const inputText = inputTextArea.value;
        const encryptedText = encryptText(inputText);
        outputTextArea.value = encryptedText;
    } else if (action === 'decrypt') {
        const outputText = outputTextArea.value;
        const decryptedText = decryptText(outputText);
        inputTextArea.value = decryptedText;
    }
}

function handleCopyButtonClick(targetTextareaId) {
    const targetTextArea = document.getElementById(targetTextareaId);
    targetTextArea.select();
    document.execCommand('copy');
}

document.getElementById('encrypt-btn').addEventListener('click', () => handleButtonClick('encrypt'));
document.getElementById('decrypt-btn').addEventListener('click', () => handleButtonClick('decrypt'));
document.getElementById('copy-input-btn').addEventListener('click', () => handleCopyButtonClick('input-text'));
document.getElementById('copy-output-btn').addEventListener('click', () => handleCopyButtonClick('output-text'));