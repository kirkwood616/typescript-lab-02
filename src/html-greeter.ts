import { Greeter } from "./greeter";

export class HtmlGreeter implements Greeter {
  greeting: string;
  tagName: string;
  constructor(greeting: string, tagName?: string) {
    this.greeting = greeting;
    this.tagName = tagName ?? "h1";
  }

  greet(name: string): string {
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
  }
}
