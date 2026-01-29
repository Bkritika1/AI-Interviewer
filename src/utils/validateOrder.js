export function validateOrder(code, question) {
  const lines = code.split("\n");

  const indexes = question.rules.lineOrder.map(key =>
    lines.findIndex(l => l.includes(key))
  );

  const valid = indexes.every(
    (v, i, arr) => i === 0 || v > arr[i - 1]
  );

  return [{
    status: valid ? "pass" : "fail",
    message: valid
      ? "Correct order"
      : "Incorrect code order"
  }];
}
