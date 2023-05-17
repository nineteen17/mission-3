import { evaluateRisk } from "../../services/calculateRiskRating";
import { TestRiskRating } from "../../types/types";

const testCases: TestRiskRating[] = [
  {
    input: {
      claim_history:
        "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.",
    },
    output: { risk_rating: 3 },
  },
  {
    input: { claim_history: "I've had no incidents in the past three years." },
    output: { risk_rating: 1 },
  },
  {
    input: { claim_history: "Crash, crash, crash." },
    output: { risk_rating: 3 },
  },
  {
    input: { claim_history: "" },
    output: { error: "there is an error" },
  },
];

describe("calculateRiskRating", () => {
  testCases.map(({ input, output }) => {
    it(`should calculate the risk rating correctly for ${input.claim_history}`, () => {
      const result = evaluateRisk(input);
      expect(result).toEqual(output);
    });
  });
});
