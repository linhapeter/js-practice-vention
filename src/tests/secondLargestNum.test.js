import { secondLargestNum } from "../tasks/secondLargestNum";

describe("secondLargestNum", () => {
  it("should find the second largest number in an array", () => {
    expect(secondLargestNum([1, 2, 3, 4, 5])).toEqual(4);
    expect(secondLargestNum([5, 1, 3, 7, 2])).toEqual(5);
    expect(secondLargestNum([10, 20, 30, 40, 50])).toEqual(40);
    expect(secondLargestNum([5])).toThrow("Array needs at least 2 elements");
    expect(secondLargestNum([])).toThrow("Array needs at least 2 elements");
    expect(secondLargestNum([-5, -2, 0, -1])).toEqual(-1);
  });
});
