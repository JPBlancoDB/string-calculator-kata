import { Add } from '../src'

describe('String Calculator Kata Tests', () => {
  it('should return zero when the input is empty string', () => {
    expect(Add('')).toBe(0);
  });

  it('should return the number when the input is only a number', () => {
    expect(Add('3')).toBe(3);
  });

  it('should return the sum when the input contains two numbers separated by commas', () => {
    expect(Add('1,2')).toBe(3);
  });

  it('should return the sum when the input contains any amount numbers separated by commas', () => {
    expect(Add('1,2,3,4')).toBe(10);
  });
});
