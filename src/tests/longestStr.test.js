import { longestStr } from "../tasks/longestStr";

describe("longestStr", () => {
  it("should handle various cases", () => {
    expect(longestStr([])).toEqual("");
    expect(longestStr(["a", "A"])).toEqual("a");
    expect(longestStr([" ", "a"])).toEqual(" ");
    expect(longestStr(["", "a"])).toEqual("a");
    expect(longestStr(["e", "adw", "         "])).toEqual("         ");
  });
});
