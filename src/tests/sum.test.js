import { pow } from "../tasks/sortedPowNumbers";
import { arrToObj } from "../tasks/arrToObj";

describe("testing pow", () => {
  test("pow 1.test", () => {
    const inpt = [3, 1, 4];
    const expectedOutput = [1, 9, 16];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("pow 2.test", () => {
    const inpt = [3, 1, 4];
    const expectedOutput = [1, 9, 16];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("pow 3.test", () => {
    const inpt = [-2, -1, 0, 2, 1];
    const expectedOutput = [0, 1, 1, 4, 4];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("pow 4.test", () => {
    const inpt = [2.5, 1.5, 3.5, 2.0];
    const expectedOutput = [2.25, 4.0, 6.25, 12.25];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("pow 5.test", () => {
    const inpt = [];
    const expectedOutput = [];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("pow 6.test", () => {
    const inpt = [1000, 500, 2000, 1500];
    const expectedOutput = [250000, 1000000, 2250000, 4000000];

    const result = pow(inpt);
    expect(result).toEqual(expectedOutput);
  });
});

describe("testing arrToObj", () => {
  test("arrToObj 1.test", () => {
    const inpt = [
      { id: "qwe", name: "John" },
      { id: "fdsfs2", name: "Mary" },
    ];
    const expectedOutput = {
      qwe: { id: "qwe", name: "John" },
      fdsfs2: { id: "fdsfs2", name: "Mary" },
    };

    const result = arrToObj(inpt);
    expect(result).toEqual(expectedOutput);
  });

  test("arrToObj 2.test", () => {
    const inpt = [
      { id: "1qwe", name: "John" },
      { id: "fdsfs2", name: "Mary" },
    ];

    expect(() => {
      arrToObj(inpt);
    }).toThrow("Invalid identifier: 1qwe");
  });

  test("arrToObj 3.test", () => {
    const inpt = [
      { id: "$qwe", name: "John" },
      { id: "fdsfs2", name: "Mary" },
    ];

    expect(() => {
      arrToObj(inpt);
    }).toThrow("Invalid identifier: $qwe");
  });

  test("arrToObj 4.test", () => {
    const inpt = [
      { id: "qwe", name: "John" },
      { id: "", name: "Mary" },
    ];

    expect(() => {
      arrToObj(inpt);
    }).toThrow("Invalid identifier: ");
  });
});
