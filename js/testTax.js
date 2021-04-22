import Tax from "./Tax.js";
QUnit.test("a basic test example", function (assert) {
  var value = "hello";
  assert.equal(value, "hello", "We expect value to be hello");
});

QUnit.test("Income 40922, Ontario tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(40922, 0)[0],
    2066.56,
    "We expect Ontario tax to be $2066.56"
  );
});

QUnit.test("Income 81847, Ontario tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(81847, 0)[0],
    5811.64,
    "We expect Ontario tax to be $5811.64"
  );
});

QUnit.test("Income 85000, Ontario tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(85000, 0)[0],
    6162.87,
    "We expect Ontario tax to be $6162.87"
  );
});

QUnit.test("Income 90000, Ontario tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(90000, 0)[0],
    6720.87,
    "We expect Ontario tax to be $6720.87"
  );
});

QUnit.test("Income 250000, Ontario tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(250000, 0)[0],
    25877.0,
    "We expect Ontario tax to be $25877.00"
  );
});

QUnit.test("Income 45282, Federal tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(45282, 0)[0],
    2465.94,
    "We expect Ontario tax to be $2465.94"
  );
});

QUnit.test("Income 50000, Federal tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(50000, 0)[0],
    2897.64,
    "We expect Ontario tax to be $2897.64"
  );
});

QUnit.test("Income 65000, Federal tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(65000, 0)[0],
    4270.14,
    "We expect Ontario tax to be $4270.14"
  );
});

QUnit.test("Income 75000, Federal tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(75000, 0)[0],
    5185.14,
    "We expect Ontario tax to be $5185.14"
  );
});

QUnit.test("Income 160000, Federal tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(160000, 0)[0],
    14633.0,
    "We expect Ontario tax to be $14633.00"
  );
});

QUnit.test("Income 120000, Federal tax is", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(120000, 0)[0],
    4270.14,
    "We expect Ontario tax to be $4270.14"
  );
});
