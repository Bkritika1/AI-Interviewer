export const validatePhase1 = ({
  code,
  question
}) => {

  const results = [];

  // 1️⃣ SYNTAX CHECK
  let syntaxOk = true;
  try {
    new Function(code);
  } catch (err) {
    syntaxOk = false;
  }

  if (!syntaxOk) {
    return {
      type: "phase1",
      syntax: "fail",
      results: question.testCases.map((_, i) => ({
        id: i + 1,
        status: "fail",
        error: "Syntax Error"
      })),
      targetFix: "fail"
    };
  }

  // 2️⃣ TARGET FIX LINE CHECK
  const targetFixOk = question.targetFixLines.every(line =>
    code.includes(line)
  );

  // 3️⃣ FUNCTION EXECUTION CHECK
  let userFunction;

  try {
    userFunction = new Function(
      `${code}; return ${question.functionName};`
    )();
  } catch (err) {
    return {
      type: "phase1",
      syntax: "pass",
      targetFix: targetFixOk ? "pass" : "fail",
      results: question.testCases.map((_, i) => ({
        id: i + 1,
        status: "fail",
        error: "Function not defined correctly"
      }))
    };
  }

  // 4️⃣ TEST CASE OUTPUT CHECK
  question.testCases.forEach((test, index) => {
    let passed = false;
    let actual;

    try {
      actual = userFunction(...test.args);
      passed =
        JSON.stringify(actual) ===
        JSON.stringify(test.expected);
    } catch {
      passed = false;
    }

    results.push({
      id: index + 1,
      input: test.args,
      expected: test.expected,
      actual,
      status: passed ? "pass" : "fail"
    });
  });

  return {
    type: "phase1",
    syntax: "pass",
    targetFix: targetFixOk ? "pass" : "fail",
    results
  };
};
