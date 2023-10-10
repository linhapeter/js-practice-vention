import { reverseString } from "../tasks/recursionReverseString";

describe("reverseString", () => {
  it("should reverse string", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("Peter")).toEqual("reteP");
    expect(reverseString("1234")).toEqual("4321");
  });
});
