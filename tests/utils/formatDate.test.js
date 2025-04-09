import { describe, it, expect } from 'vitest';
import { formatDate } from '../../src/utils/helpers';

describe('formatDate', () => {
  it('formats date string correctly', () => {
    const input = '2024-04-01';
    const formatted = formatDate(input);

    expect(typeof formatted).toBe('string');
    expect(formatted).toMatch(/April/);
    expect(formatted).toMatch(/2024/);
  });

  it('returns "Invalid Date" for invalid input', () => {
    const input = 'not-a-date';
    const formatted = formatDate(input);
    expect(formatted).toBe('Invalid Date');
  });
});
