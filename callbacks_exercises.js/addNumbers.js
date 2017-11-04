const readLine = require('readline');

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){

  if(numsLeft > 0){
    reader.question("gimme nums bish\n", function(answer){
      let num = parseInt(answer);
      sum+=num;
      console.log(sum);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  }

  if(numsLeft === 0){
    completionCallback(sum);
  }

}

function closeReader(sum){
  console.log(`your total sum is ${sum}`);
  reader.close();
}


addNumbers(0, 3, closeReader);
