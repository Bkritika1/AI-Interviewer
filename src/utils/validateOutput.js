export function validateOutput(code, question) {
  const results = [];

  try {
    const fn = new Function(
      `${code}; return ${question.functionName};`
    )();

    question.testCases.forEach((tc, i) => {
      const actual = fn(...tc.args);
      const pass =
        JSON.stringify(actual) ===
        JSON.stringify(tc.expected);

      results.push({
        id: i + 1,
        status: pass ? "pass" : "fail",
        expected: tc.expected,
        actual
      });
    });
  } catch (e) {
    results.push({
      status: "fail",
      message: e.message
    });
  }

  return results;
}
