
var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

words[1] = "kind"
words[2] = "loved"
words[3] = "friendly"
words[4] = "smart"
words[5] = "enchanting"
words[6] = "lovely"
words[7] = "refreshing"
words[8] = "unique"
words[9] = "caring"
words[10] = "trying"
words[11] = "present"
words[12] = "alive"
words[13] = "breathing"
words[14] = "the only you"
words[15] = "sincere"
words[16] = "loyal"
words[17] = "engaging"
words[18] = "independent"
words[19] = "capable"
words[20] = "creative"
words[21] = "intuitive"
words[22] = "perceptive"
words[23] = "kind-hearted"
words[24] = "purposeful"
words[25] = "intentional"
words[26] = "beautiful"
words[27] = "inspiring"
words[28] = "captivating"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
  
var rnd = Math.ceil(Math.random() * NumberOfWords)

frm.WordBox.value = words[rnd]
}
