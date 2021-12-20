import { HtmlGreeter } from "../src/html-greeter";

describe("HtmlGreeter tests", function () {
  test("HtmlGreeter with <p></p> tags wrapping Hey, Bill!", function () {
    let hey: HtmlGreeter = new HtmlGreeter("Hey", "p");
    expect(hey.greet("Bill")).toEqual("<p>Hey, Bill!</p>");
  });

  test("HtmlGreeter with <li></li> tags wrapping Oy, Buddy!", function () {
    let hey: HtmlGreeter = new HtmlGreeter("Oy", "li");
    expect(hey.greet("Buddy")).toEqual("<li>Oy, Buddy!</li>");
  });

  test("HtmlGreeter with <h1></h1> tags wrapping Yo, Doggie! by default w/ no 2nd parameter entered", function () {
    let hey: HtmlGreeter = new HtmlGreeter("Yo");
    expect(hey.greet("Doggie")).toEqual("<h1>Yo, Doggie!</h1>");
  });
});
