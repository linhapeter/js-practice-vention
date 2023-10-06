import { removeVowels } from "../tasks/removeVowels";

describe("removeVowels", () => {
  it("should remove vowels from a string", () => {
    expect(removeVowels("hello")).toEqual("hll");
    expect(removeVowels("w$rld")).toEqual("w$rld");
    expect(removeVowels("aeiou")).toEqual("");
    expect(removeVowels("")).toEqual("");
    expect(removeVowels("AaEeIiOoUu")).toEqual("");
    expect(removeVowels("1JavaScript")).toEqual("1JvScrpt");
  });
});
