import { validateOutput } from "./validateOutput";
import { validateRules } from "./validateRules";
import { validateOrder } from "./validateOrder";

export function validateSolution({ code, question }) {
  let results = [];

  if (question.validationType === "output") {
    results = validateOutput(code, question);
  }

  if (question.rules) {
    results = results.concat(
      validateRules(code, question.rules, question.feedback)
    );
  }

  if (question.validationType === "order") {
    results = results.concat(validateOrder(code, question));
  }

  return results;
}
