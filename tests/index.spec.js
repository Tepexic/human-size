const b2h = require("../index.js");

test("Should return 0kB when input is String", () => {
  expect(b2h("asd")).toBe("0kB");
});

test("Should return 0kB when input is NaN", () => {
  expect(b2h(NaN)).toBe("0kB");
});

test("Should return 0kB when input is Object", () => {
  expect(b2h({ a: "foo", b: 123 })).toBe("0kB");
});

test("Should return 0kB when input is Array", () => {
  expect(b2h([200, 100])).toBe("0kB");
});

test("Should return 0kB when input is <0", () => {
  expect(b2h(-25)).toBe("0kB");
});

test("Should return 3.1kB", () => {
  expect(b2h(3125)).toBe("3.1kB");
});

test("Should return 0.2kB", () => {
  expect(b2h(225)).toBe("0.2kB");
});

test("Should return 0kB", () => {
  expect(b2h(22)).toBe("0kB");
});

test("Should return 0kB", () => {
  expect(b2h(2)).toBe("0kB");
});

test("Should return 31.3kB", () => {
  expect(b2h(31250)).toBe("31.3kB");
});

test("Should return 312.5kB", () => {
  expect(b2h(312500)).toBe("312.5kB");
});

test("Should return 3.1MB", () => {
  expect(b2h(3125000)).toBe("3.1MB");
});

test("Should return 31.3MB", () => {
  expect(b2h(31250000)).toBe("31.3MB");
});

test("Should return 312.5MB", () => {
  expect(b2h(312500000)).toBe("312.5MB");
});

test("Should return 3.1GB", () => {
  expect(b2h(3125000000)).toBe("3.1GB");
});

test("Should return 31.3GB", () => {
  expect(b2h(31250000000)).toBe("31.3GB");
});

test("Should return 312.5GB", () => {
  expect(b2h(312500000000)).toBe("312.5GB");
});

test("Should return 3.1TB", () => {
  expect(b2h(3125000000000)).toBe("3.1TB");
});

test("Should return 31.3TB", () => {
  expect(b2h(31250000000000)).toBe("31.3TB");
});

test("Should return 312.5TB", () => {
  expect(b2h(312500000000000)).toBe("312.5TB");
});

test("Should return 3.1EB", () => {
  expect(b2h(312500000000000)).toBe("312.5TB");
});

test("Should return 31.3PB", () => {
  expect(b2h(31250000000000000)).toBe("31.3PB");
});

test("Should return 31.3EB", () => {
  expect(b2h(31250000000000000000)).toBe("31.3EB");
});

test("Should return 31.3ZB", () => {
  expect(b2h(31250000000000000000000)).toBe("31.3ZB");
});

test("Should return 31.3YB", () => {
  expect(b2h(31250000000000000000000000)).toBe("31.3YB");
});

test("Should return 3125YB", () => {
  expect(b2h(3125000000000000000000000000)).toBe("3125YB");
});
