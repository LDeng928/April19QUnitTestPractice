import Tax from "./Tax";
QUnit.test("a basic test example", function (assert) {
  var value = "hello";
  assert.equal(value, "hello", "We expect value to be hello");
});

QUnit.test("Income at 50000", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(50000, 1000),
    9839.29,
    "We expect taxes owing to be $9839.29"
  );
});

QUnit.test("Income at 50000", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(50000, 2000),
    8839.29,
    "We expect taxes owing to be $8839.29"
  );
});

QUnit.test("Income at 50000", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(50000, 3000),
    7839.29,
    "We expect taxes owing to be $7839.29"
  );
});

QUnit.test("Income at 50000", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(50000, 4000),
    6839.29,
    "We expect taxes owing to be $6839.29"
  );
});

QUnit.test("Income at 50000", function (assert) {
  const oTax = new Tax();
  assert.equal(
    oTax.calculate(50000, 5000),
    5839.29,
    "We expect taxes owing to be $5839.29"
  );
});
