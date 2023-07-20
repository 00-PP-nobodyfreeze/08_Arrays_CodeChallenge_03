
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

// Lösung 1 / if else
// function getSentence(arr, op) {
//     if (op === "S") {
//       // Satz erstellen, indem alle Elemente des Arrays mit Leerzeichen verbunden werden
//       return arr.join(" ");
//     } else if (op === "Q") {
//       // Satz erstellen, indem alle Elemente des Arrays mit Leerzeichen verbunden werden und ein Fragezeichen am Ende hinzugefügt wird
//       return arr.join(" ") + "?";
//     } else if (op === "E") {
//       // Satz erstellen, indem alle Elemente des Arrays ohne Leerzeichen verbunden werden
//       return arr.join("");
//     } else {
//       // Wenn die übergebene Operation ungültig ist, wird ein Fehler zurückgegeben
//       return "Ungültige Operation";
//     }
//   }
  
  // Lösung 2 Mapping
  function getSentence(arr, op) {
    // Mapping der Operationen zu den gewünschten Satzverbindungen
    const sentenceMap = {
      "S": " ",
      "Q": " ",
      "E": "",
    };
  
    // Überprüfen, ob die übergebene Operation gültig ist
    if (!Object.keys(sentenceMap).includes(op)) {
      return "Ungültige Operation";
    }
  
    // Satz erstellen, indem alle Elemente des Arrays mit der entsprechenden Satzverbindung verbunden werden
    const separator = sentenceMap[op];
    return arr.join(separator) + (op === "Q" ? "?" : "");
  }


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}