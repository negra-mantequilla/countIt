// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('w3resource.com', 'o'));

let sort = () => {
let userInput =document.getElementById('user Input').value
let temp = userInput.split('')
temp.array.forEach(e => {
  if (/[a-zA-Z]+$/.test(e)) {
    listToSort.push(e)
  }
});


for (let i = 0; i < word.length; i++) {
  let letter = word[i]
  let vara = Count[letter]
  if (!vara) {
    Count[letter] = 1
  }
  else {
    Count[letter] = vara + 1
  }
 }
console.log(Count)

let str = JSON.stringify(Count)
let div = document.getElementById('sorted')
div.append(str)
document.body.appendChild(div)
}
// let div = document.getElementById('sorted')
// div.append(listToSort)
// document.body.appendChild(div)
