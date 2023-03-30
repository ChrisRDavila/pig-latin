Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test:"It will add 'ay' and first consecutive consonants leading up to the first vowel to the end of the word"
code("cat")
Expected Output: "atcay"

Test: "Any word with a qu in it will move anything qu to the end with an added "ay"
code: ("quick")
Expected Output: ickquay

Test: "Any word with qu and letters preceding the qu will move the preceding letters to the end and then act according to the vowel and consonant addition rules
code: ("squeal")
Expected Output: "quealsay"
code: ("acquire")
Expected Output: "quireacay
