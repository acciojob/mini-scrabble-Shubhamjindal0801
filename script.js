function countLetters() {
  const textBox = document.getElementById("evaluatedText");
  const letterCount = document.getElementById("letterCount");
  const textLength = parseFloat(textBox.value.length);
  letterCount.innerText = textLength;
}
document.getElementById("evaluatedText").addEventListener("keyup", countLetters())