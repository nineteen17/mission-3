import { evaluateRisk } from '../../services/calculateRiskRating';
import { RiskInput, RiskOutput } from '../../interfaces/Interface';

 // assuming the function is exported from 'calculateRiskRating.ts' file.

describe('calculateRiskRating', () => {
    it('should calculate the correct risk rating', () => {
        const input: RiskInput = {
            claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes."
        };
        const output: RiskOutput = evaluateRisk(input);
        expect(output).toEqual({ risk_rating: 3 });
    });

    it('should return error when input is not valid', () => {
        const input = {
            claim_history: 123 // invalid input
        };
        const output = evaluateRisk(input as any); // using 'as any' to bypass TypeScript type check
        expect(output).toEqual({ error: "there is an error" });
    });


  it('should handle no incidents correctly', () => {
      const input: RiskInput = {
          claim_history: "I've had no incidents in the past three years."
      };
      const output: RiskOutput = evaluateRisk(input);
      expect(output).toEqual({ risk_rating: 1 }); // Minimum rating
  });

  it('should handle repeated keywords correctly', () => {
      const input: RiskInput = {
          claim_history: "Crash, crash, crash."
      };
      const output: RiskOutput = evaluateRisk(input);
      expect(output).toEqual({ risk_rating: 3 });
  });

  it('should return error when input claim history is empty', () => {
      const input: RiskInput = {
          claim_history: "" // Empty string
      };
      const output: RiskOutput = evaluateRisk(input);
      expect(output).toEqual({ error: "there is an error" });
  });

  it('should return error when input claim history is missing', () => {
      const input = {}; // Missing claim_history
      const output = evaluateRisk(input as any); // Using 'as any' to bypass TypeScript type check
      expect(output).toEqual({ error: "there is an error" });
  });
});
