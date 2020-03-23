export class Ingredient {
  //   public name: string;
  //   public ammount: number;

  constructor(public name: string, public ammount: number) {
    // adding public keyword to the params of the constructor is a shortcut of declaring the variables before the constructor
    // and then assigning the param value to the variable inside the constructor
    // this.name = name;
    // this.ammount = ammount;
  }
}
