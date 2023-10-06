import { pow } from "../tasks/sortedPowNumbers";

describe("pow", () => {
  it("should return correct value", () => {
    expect(pow([3, 1, 4])).toEqual([1, 9, 16]);
    expect(pow([-2, -1, 0, 2, 1])).toEqual([0, 1, 1, 4, 4]);
    expect(pow([2.5, 1.5, 3.5, 2.0])).toEqual([2.25, 4.0, 6.25, 12.25]);
    expect(pow([])).toEqual([]);
  });
});
