import { pow } from "../tasks/sortedPowNumbers";

describe("pow", () => {
  test("should return [1, 9, 16]", () => {
    const inpt = [3, 1, 4];
    const expectedOutput = [1, 9, 16];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("should return [1, 9, 16]", () => {
    const inpt = [3, 1, 4];
    const expectedOutput = [1, 9, 16];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("should return [0, 1, 1, 4, 4]", () => {
    const inpt = [-2, -1, 0, 2, 1];
    const expectedOutput = [0, 1, 1, 4, 4];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("should return [2.25, 4.0, 6.25, 12.25]", () => {
    const inpt = [2.5, 1.5, 3.5, 2.0];
    const expectedOutput = [2.25, 4.0, 6.25, 12.25];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("should return []", () => {
    const inpt = [];
    const expectedOutput = [];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("should return [250000, 1000000, 2250000, 4000000]", () => {
    const inpt = [1000, 500, 2000, 1500];
    const expectedOutput = [250000, 1000000, 2250000, 4000000];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });
});