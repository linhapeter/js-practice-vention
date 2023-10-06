import { arrToObj } from "../tasks/arrToObj";

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
