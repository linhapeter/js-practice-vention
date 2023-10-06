import { arrToObj } from "../tasks/arrToObj";

describe("arrToObj", () => {
  it("should handle various cases", () => {
    expect(
      arrToObj([
        { id: "qwe", name: "John" },
        { id: "fdsfs2", name: "Mary" },
      ]),
    ).toEqual({
      qwe: { id: "qwe", name: "John" },
      fdsfs2: { id: "fdsfs2", name: "Mary" },
    });

    expect(() =>
      arrToObj([
        { id: "1qwe", name: "John" },
        { id: "fdsfs2", name: "Mary" },
      ]),
    ).toThrow("Invalid identifier: 1qwe");

    expect(() =>
      arrToObj([
        { id: "$qwe", name: "John" },
        { id: "fdsfs2", name: "Mary" },
      ]),
    ).toThrow("Invalid identifier: $qwe");

    expect(() =>
      arrToObj([
        { id: "qwe", name: "John" },
        { id: "", name: "Mary" },
      ]),
    ).toThrow("Invalid identifier: ");
  });
});
