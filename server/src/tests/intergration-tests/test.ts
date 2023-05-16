import { calculateCarValue } from '../../functions/calculateCarValue';

describe('calculateCarValue', () => {
  test('should calculate the car value correctly', () => {
    const input = { model: 'Civic', year: 2014 };
    const output = calculateCarValue(input);
    expect(output).toEqual({ car_value: 6614 });
  });

  it('should calculate the car value correctly for a different model and year', () => {
    const input = { model: 'BMW', year: 2020 };
    const output = calculateCarValue(input);
    expect(output).toEqual({ car_value: 5820 });
  });

  it('should calculate the car value correctly for another model and year', () => {
    const input = { model: 'Tesla', year: 2018 };
    const output = calculateCarValue(input);
    expect(output).toEqual({ car_value: 7718 });
  });

  it('should return an error for missing year', () => {
    const input = { model: 'Camry', year: 0 };
    const output = calculateCarValue(input);
    expect(output).toEqual({ error: 'Missing model or year' });
  });

  it('should return an error for missing model', () => {
    const input = {model:'', year: 2015 };
    const output = calculateCarValue(input);
    expect(output).toEqual({ error: 'Missing model or year' });
  });

  it('should return an error for an invalid model', () => {
    const input = { model: '123', year: 2015 };
    const output = calculateCarValue(input);
    expect(output).toEqual({ error: 'Invalid model' });
  });

});