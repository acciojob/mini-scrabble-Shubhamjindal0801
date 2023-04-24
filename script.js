function countLetters() {
  const textBox = document.getElementById("evaluatedText");
  const letterCount = document.getElementById("letterCount");
  const textLength = textBox.value.length;
	if(textLength==0)
		letterCount.innerText = NaN;
	else
		letterCount.innerText = textLength;
  
}