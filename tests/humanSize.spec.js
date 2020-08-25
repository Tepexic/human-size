const humanSize = require("./../humanSize.js");

test("Should return 0kB when input is String", () => {
  expect(humanSize("asd")).toBe("0kB");
});

test("Should return 0kB when input is NaN", () => {
  expect(humanSize(NaN)).toBe("0kB");
});

test("Should return 0kB when input is Object", () => {
  expect(humanSize({ a: "foo", b: 123 })).toBe("0kB");
});

test("Should return 0kB when input is <0", () => {
  expect(humanSize(-25)).toBe("0kB");
});

test("Should return 3.1kB", () => {
  expect(humanSize(3125)).toBe("3.1kB");
});

test("Should return 0.2kB", () => {
  expect(humanSize(225)).toBe("0.2kB");
});

test("Should return 31.3kB", () => {
  expect(humanSize(31250)).toBe("31.3kB");
});

test("Should return 31.3MB", () => {
  expect(humanSize(31250000)).toBe("31.3MB");
});

test("Should return 31.3GB", () => {
  expect(humanSize(31250000000)).toBe("31.3GB");
});

test("Should return 31.3TB", () => {
  expect(humanSize(31250000000000)).toBe("31.3TB");
});

test("Should return 31.3PB", () => {
  expect(humanSize(31250000000000000)).toBe("31.3PB");
});

test("Should return 31.3EB", () => {
  expect(humanSize(31250000000000000000)).toBe("31.3EB");
});

test("Should return 31.3ZB", () => {
  expect(humanSize(31250000000000000000000)).toBe("31.3ZB");
});

test("Should return 31.3YB", () => {
  expect(humanSize(31250000000000000000000000)).toBe("31.3YB");
});

test("Should return 3125YB", () => {
  expect(humanSize(3125000000000000000000000000)).toBe("3125YB");
});
