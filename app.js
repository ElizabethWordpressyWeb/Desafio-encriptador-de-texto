// Selección de elementos del DOM
const inputText = document.getElementById('inputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const outputText = document.getElementById('outputText');
const validationMessage = document.getElementById('validationMessage');
const placeholderImage = document.getElementById('placeholderImage');

// Objeto de encriptación
const encryptionKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar
function encrypt(text) {
    return text.split('').map(char => encryptionKeys[char] || char).join('');
}

// Función para desencriptar
function decrypt(text) {
    let decrypted = text;
    Object.entries(encryptionKeys).forEach(([key, value]) => {
        decrypted = decrypted.split(value).join(key);
    });
    return decrypted;
}

// Función de validación
function validate(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

// Función para mostrar el resultado
function showResult(text) {
    outputText.textContent = text;
    placeholderImage.style.display = 'none';
    outputText.style.display = 'block';
}

// Event listeners
encryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (validate(text)) {
        showResult(encrypt(text));
        validationMessage.textContent = '';
    } else {
        validationMessage.textContent = 'Por favor, use solo letras minúsculas sin acentos ni caracteres especiales.';
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (validate(text)) {
        showResult(decrypt(text));
        validationMessage.textContent = '';
    } else {
        validationMessage.textContent = 'Por favor, use solo letras minúsculas sin acentos ni caracteres especiales.';
    }
});