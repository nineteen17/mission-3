import { calculateQuote } from '../../services/calculateQuote';
import { CarValueInput, RiskInput } from '../../types/types';

describe('calculateQuote', () => {
  it('calculates the correct quote given valid input', () => {
    const carValueInput: CarValueInput = { model: "Toyota", year: 2019 };
    const riskInput: RiskInput = { claim_history: "I crashed my car" };

    const result = calculateQuote(carValueInput, riskInput);

    // Replace these with the expected values
    const expectedCarValue = 5000; // replace with expected car value
    const expectedRiskRating = 3; // replace with expected risk rating
    const expectedYearlyPremium = (expectedCarValue * expectedRiskRating) / 100;
    const expectedMonthlyPremium = expectedYearlyPremium / 12;

    expect(result).toEqual({
      car_value: expectedCarValue,
      risk_rating: expectedRiskRating,
      yearlyPremium: expectedYearlyPremium,
      monthlyPremium: expectedMonthlyPremium
    });
  });

  // Write more tests here for other cases, such as when input is not valid
});
