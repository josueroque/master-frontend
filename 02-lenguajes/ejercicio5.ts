//Ejercicio 5

class SlothMachine {
  private counter: number;

  constructor() {
    this.counter = 0;
  }

  play(): void {
    this.counter++;
    let allTrue: boolean = true;
    for (let i = 1; i <= 3; i++) {
      if (!this.getRandomBoolean()) {
        allTrue = false;
      }
    }
    console.log(
      allTrue
        ? `Congratulations!!!. You won ${this.counter} coins!!`
        : "Good luck next time!!"
    );
    if (allTrue) this.counter = 0;
    return;
  }

  private getRandomBoolean(): boolean {
    const randomNumber: number = Math.ceil(Math.random() * 100);
    const isEven: boolean = randomNumber % 2 === 0;
    console.log(isEven);
    return isEven;
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
