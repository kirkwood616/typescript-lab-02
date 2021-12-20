import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {
  private extra: string = "!!";

  greet(name: string): string {
    return `${this.greeting}, ${name}!${this.extra}`;
  }

  addVolume(): void {
    this.extra += "!";
  }
}
