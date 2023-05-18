import { RiskInput, RiskOutput } from "../types/types";

export function evaluateRisk(input: RiskInput): RiskOutput {
  // keywords to look for in claim_history
  const keywords: string[] = ["collide", "crash", "scratch", "bump", "smash"];
  let risk_rating = 0;

  // Validate input
  if (!input.claim_history || typeof input.claim_history !== "string") {
    return { error: "there is an error in risk rating" };
  }

  // Calculate risk_rating
  keywords.forEach((keyword) => {
    let keywordMatches = input.claim_history.match(new RegExp(keyword, "gi"));
    if (keywordMatches) {
      risk_rating += keywordMatches.length;
    }
  });

  // Ensure risk_rating is between 1 and 5
  risk_rating = Math.min(Math.max(risk_rating, 1), 5);

  return { risk_rating };
}
