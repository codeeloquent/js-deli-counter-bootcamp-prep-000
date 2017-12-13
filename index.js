var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var array = [];
    let num = 1;
<<<<<<< HEAD
    for(let i = 0; i < katzDeliLine.length; i++){
      array.push(`${num}. ${katzDeliLine[i]}`);
      num++;
    }
    return "The line is currently: " + array.join(', ');
=======
    for(let i = 0; i < katzDeliLine.length -1 ; i++){
      array.push(`${num}. ${katzDeliLine[i]}`);
    }
    return "The line is currently: " + array;
>>>>>>> 1c40aa32abf84498739dfdb9bc61ee1db41a431d
  }
  else{
      return 'The line is currently empty.';
  }
}
