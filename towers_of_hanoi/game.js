const readLine = require('readline');

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game{
  constructor(){
    this.stacks = [
      [3,2,1],
      [],
      []
    ];

  }

  promptMove(callback){
    console.log(this.stacks);
    let that = this;
    reader.question("Where do you wanna move bruh? enter start index\n", function(startIdx){
      reader.question("enter end index\n", function(endIdx){
        console.log(startIdx);
        console.log(endIdx);
        console.log(callback);
        callback.bind(that, startIdx, endIdx)();
      });
    });
  }

  isValidMove(startIdx, endIdx){
    console.log("hello there!!!!!");
    let start_tower = this.stacks[startIdx];
    let end_tower = this.stacks[endIdx];

    if(end_tower.length === 0){
      console.log("true");
      return true;
    }else if(start_tower[start_tower.length-1] < end_tower[end_tower.length - 1]){
      console.log("true");
      return true;
    }else{
      console.log(false);
      return false;
    }
  }

  move(startIdx, endIdx){
    if (this.isValidMove(startIdx,endIdx) === true){
      let popped = this.stacks[startIdx].pop();
      this.stacks[endIdx].push(popped);
      console.log("move performed!");
      console.log(this.stacks);
      return true;
    }else{
      console.log("that moves not valid !! ");
      return false;
    }
  }

  isWon(){
    if(this.stacks[1].length === 3 || this.stacks[2].length ===3){
      console.log('you won!!!');
      return true;

    }else{
      return false;
    }
  }


    run() {

      while(this.isWon() === false){
        this.promptMove(this.move);
      }

      console.log("you won!");

    }


}

let g = new Game();
g.run();
