import { countChars } from "../tasks/countChars";

describe("countChars", () => {
  it("should return the correct value for each case", () => {
    expect(countChars("a")).toEqual({ a: 1 });
    expect(countChars("aA")).toEqual({ a: 1, A: 1 });
    expect(countChars("")).toEqual({});
    expect(countChars(" word")).toEqual({ " ": 1, w: 1, o: 1, r: 1, d: 1 });
    expect(countChars("1aA")).toEqual({ 1: 1, a: 1, A: 1 });
  });
});
