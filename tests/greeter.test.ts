import { Greeter } from "../src/greeter";

describe("Greeter test", function () {
  test("Greeter with new greeting Hey & Bill", function () {
    let hey: Greeter = new Greeter("Hey");
    expect(hey.greet("Bill")).toEqual("Hey, Bill!");
  });

  test("Greeter with new greeting Oy & Bruv", function () {
    let oy: Greeter = new Greeter("Oy");
    expect(oy.greet("Bruv")).toEqual("Oy, Bruv!");
  });
});
