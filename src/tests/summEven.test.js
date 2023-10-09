import { summEven } from "../tasks/summEven";

describe("summEven", () => {
  it("should handle various cases", () => {
    expect(summEven([3])).toEqual(0);
    expect(summEven([4])).toEqual(4);
    expect(summEven([])).toEqual(0);
    expect(summEven([2.5])).toEqual(0);
    expect(summEven([0])).toEqual(0);
    expect(summEven([-2])).toEqual(-2);
    expect(summEven([1, 2, -2])).toEqual(0);
  });
});
