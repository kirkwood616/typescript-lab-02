// import { Greeter } from "../src/greeter";
import { JavaScriptGreeter } from "../src/javascript-greeter";

describe("JavaScriptGreeter test", function () {
  test("Greeter with new greeting Hey & Bill", function () {
    let hey: JavaScriptGreeter = new JavaScriptGreeter("Hey");
    expect(hey.greet("Bill")).toEqual("console.log('Hey, Bill!')");
  });

  test("Greeter with new greeting Oy & Bruv", function () {
    let oy: JavaScriptGreeter = new JavaScriptGreeter("Oy");
    expect(oy.greet("Bruv")).toEqual("console.log('Oy, Bruv!')");
  });
});
