const imports = require("./app");
const { C, i } = imports;

describe("test #main", () => {
  test("test method is called with array", () => {
    const m = new C();
    expect(m.main(true)).toBe("please call #method with an array");
    expect(m.main(1)).toBe("please call #method with an array");
    expect(m.main({})).toBe("please call #method with an array");
    expect(m.main("hello")).toBe("please call #method with an array");
  });

  test("tests if output is correct", () => {
    expect(m.main(i)).toBe(60);
    expect(m.main(i2)).toBe(85);
    expect(m.main(i3)).toBe(115);
  });
});

describe("#scan", () => {
  const m = new C();
  test("return correct array", () => {
    expect(m.scan(["a", "a", "a"])).toBe([
      { unitPrice: 10, specialPrice: "3 for 25" },
      { unitPrice: 10, specialPrice: "3 for 25" },
      { unitPrice: 10, specialPrice: "3 for 25" },
    ]);
  });
});

describe("#getTotal", () => {
  const m = new C();
  test("return correct total for each object passed", () => {
    expect(
      m.getTotal([
        { unitPrice: 10, specialPrice: "3 for 25" },
        { unitPrice: 10, specialPrice: "3 for 25" },
        { unitPrice: 10, specialPrice: "3 for 25" },
        ,
      ])
    ).toBe(25);
  });
});
