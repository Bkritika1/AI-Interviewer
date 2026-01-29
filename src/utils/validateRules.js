export function validateRules(code, rules, feedback = {}) {
  const results = [];

  rules.mustUse?.forEach(rule => {
    if (!code.includes(rule)) {
      results.push({
        status: "fail",
        message: feedback.mustUse
      });
    }
  });

  rules.mustNotUse?.forEach(rule => {
    if (code.includes(rule)) {
      results.push({
        status: "fail",
        message: feedback.mustNotUse
      });
    }
  });

  return results;
}
