function StackCalc(stackString) {
  try {
    let stackArray = stackString.split(" ");
    let numbers = [0];
    for (let i=0; i<stackArray.length ; i++) {
       let item = stackArray[i]
      if (item == "+") {
        numbers.push(+numbers.pop() + +numbers.pop());
      } else if (item == "-") {
        numbers.push(+numbers.pop() - +numbers.pop());
      } else if (item == "*") {
        numbers.push(+numbers.pop() * +numbers.pop());
      } else if (item == "/") {
        numbers.push(+numbers.pop() / +numbers.pop());
      }else if (item == "DUP") {
        numbers.push(+numbers[numbers.length-1]);
      }else if (item == "POP") {
        numbers.pop();
      }
      else if (item == "PSH") {
        numbers.push(+stackArray[i+1]);
      }
      else if (!isNaN(item)){
          numbers.push(+item)
      }
      else{
          throw "invalid instruction:"+item
      }
    }
  
    return numbers.pop()
  } catch (err) {
      console.error(err)
      return
  }
}

console.log(StackCalc(""))
console.log(StackCalc("PSH 14"))
console.log(StackCalc("5 6 +"))
console.log(StackCalc("3 DUP +"))
console.log(StackCalc("6 5 5 7 * - /"))
console.log(StackCalc("x y +"))

