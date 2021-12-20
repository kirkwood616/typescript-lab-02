import { Greeter } from "./greeter";

export class JavaScriptGreeter implements Greeter {
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }

  greet(name: string): string {
    return `console.log('${this.greeting}, ${name}!')`;
  }
}
