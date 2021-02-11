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

  it('should allow new lines between numbers', () => {
    expect(Add('1,2\n3,4')).toBe(10);
  });

  it('should support different delimiters when the first line starts with //', () => {
    expect(Add('//;\n1;2')).toBe(3);
  });

  it('should throw an exception when numbers contains negative', () => {
    expect(() => Add('1,-2,3,-4')).toThrow(/negatives not allowed: -2,-4/);
  });

  it('should ignore numbers bigger than 1000', () => {
    expect(Add('1,1001,2')).toBe(3);
  });

  it('should accept delimiters of any length', () => {
    expect(Add('//[***]\n1***2***3')).toBe(6);
  });

  it('should allow multiple delimiters', () => {
    expect(Add('//[*][%]\n1*2%3')).toBe(6);
  });
});
