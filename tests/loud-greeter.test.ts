import { LoudGreeter } from "../src/loud-greeter";

describe("LoudGreeter test", function () {
  test("Test with new greeting Hey & Bill w/ initial !! added", function () {
    let hey: LoudGreeter = new LoudGreeter("Hey");
    expect(hey.greet("Bill")).toEqual("Hey, Bill!!!");
  });

  test("Test with new greeting Hey & Bill w/ initial !! added & 1 ! when addVolume called", function () {
    let hey: LoudGreeter = new LoudGreeter("Hey");
    hey.addVolume();
    expect(hey.greet("Bill")).toEqual("Hey, Bill!!!!");
  });

  test("Test with new greeting Hey & Bill w/ initial !! added & 2 ! when addVolume called", function () {
    let hey: LoudGreeter = new LoudGreeter("Hey");
    hey.addVolume();
    hey.addVolume();
    expect(hey.greet("Bill")).toEqual("Hey, Bill!!!!!");
  });

  test("Test with new greeting Hey & Bill w/ initial !! added & 3 ! when addVolume called", function () {
    let hey: LoudGreeter = new LoudGreeter("Hey");
    hey.addVolume();
    hey.addVolume();
    hey.addVolume();
    expect(hey.greet("Bill")).toEqual("Hey, Bill!!!!!!");
  });
});
