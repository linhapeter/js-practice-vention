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
    const receivedVal = arrToObj([
      { id: "1qwe", name: "John" },
      { id: "fdsfs2", name: "Mary" },
    ]);
    expect(receivedVal).toEqual({ fdsfs2: { id: "fdsfs2", name: "Mary" } });
  });
});
