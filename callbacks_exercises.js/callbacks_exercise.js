class Clock{
  constructor(){
    let d = new Date();
    this.hours = d.getHours();
    this.minutes = d.getMinutes();
    this.seconds = d.getSeconds();
    this.printTime();
    let clock = this;
    setInterval(function(){
      clock._tick(); 
    }, 1000);

  }

  printTime(){
    console.log(this);
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);

  }

  _tick(){
    this.seconds++;
    this.printTime();
  }
}

const clock = new Clock();
