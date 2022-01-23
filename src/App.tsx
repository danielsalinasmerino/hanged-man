import "./App.css";

const wordChecker = (word: string, letters: string[]) => {
  let resultWordArray: string[] = [];
  for (let i = 0; i < word.length; i++) {
    letters.includes(word[i])
      ? resultWordArray.push(word[i])
      : resultWordArray.push("*");
  }
  return resultWordArray;
};

function App() {
  const word = "AhoRcado";
  const cleanWord = word.toLowerCase();

  const letters = ["e", "A", "c", "o"];
  const cleanLetters = letters.join("").toLowerCase().split("");

  const wordCheck = wordChecker(cleanWord, cleanLetters);

  return (
    <div className="App">
      {wordCheck.map((wordLetter, index) => {
        return (
          <div
            key={index}
            className={`letter ${
              !cleanLetters.includes(wordLetter) && "white"
            }`}
          >
            {wordLetter.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}

export default App;
