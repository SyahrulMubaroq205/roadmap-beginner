const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const container = document.getElementById('textarea-container');
const maxLength = 250;

textarea.addEventListener('input', () => {
  const textLength = textarea.value.length;
  charCount.textContent = `${textLength} / ${maxLength}`;

  if (textLength >= maxLength) {
    textarea.value = textarea.value.substring(0, maxLength);
    container.classList.add('limit-reached');
    charCount.textContent = `${maxLength} / ${maxLength}`;
  } else {
    container.classList.remove('limit-reached');
  }
});
