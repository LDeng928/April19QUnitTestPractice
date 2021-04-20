import Kilogram from "./Kilogram.js";

QUnit.test("a basic test example", function (assert) {
  var value = "hello";
  assert.equal(value, "hello", "We expect value to be hello");
});

QUnit.test("Ontario shipping price", function (assert) {
  const oKilogram = new Kilogram();
  assert.equal(
    oKilogram.calculate(3, "ON"),
    25.59,
    "We expect total price to be $25.59"
  );
});

QUnit.test("Alberta shipping price", function (assert) {
  const oKilogram = new Kilogram();
  assert.equal(
    oKilogram.calculate(3, "AB"),
    68.32,
    "We expect total price to be $68.32"
  );
});

QUnit.test("Saskatchewan shipping price", function (assert) {
  const oKilogram = new Kilogram();
  assert.equal(
    oKilogram.calculate(3, "SK"),
    58.94,
    "We expect total price to be $58.94"
  );
});

QUnit.test("Manitoba shipping price", function (assert) {
  const oKilogram = new Kilogram();
  assert.equal(
    oKilogram.calculate(3, "MB"),
    44.76,
    "We expect total price to be $44.76"
  );
});

QUnit.test("Quebec shipping price", function (assert) {
  const oKilogram = new Kilogram();
  assert.equal(
    oKilogram.calculate(3, "QC"),
    32.87,
    "We expect total price to be $32.87"
  );
});

QUnit.test("Nova Scotia shipping price", function (assert) {
  const oKilogram = new Kilogram();
  assert.equal(
    oKilogram.calculate(3, "NS"),
    44.76,
    "We expect total price to be $44.76"
  );
});

QUnit.test("Prince Edward Island shipping price", function (assert) {
  const oKilogram = new Kilogram();
  assert.equal(
    oKilogram.calculate(3, "PE"),
    53.41,
    "We expect total price to be $53.41"
  );
});
