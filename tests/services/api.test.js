import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchMostViewedArticles } from '../../src/services/api';
import { mockApiResponse } from '../mocks/mockData';

global.fetch = vi.fn();

describe('fetchMostViewedArticles', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('fetches and returns article results successfully', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const results = await fetchMostViewedArticles(7);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(results).toEqual(mockApiResponse.results);
  });

  it('throws an error if response is not ok', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await expect(fetchMostViewedArticles(7)).rejects.toThrow(
      'API request failed: 500',
    );
  });

  it('throws and logs an error if fetch fails completely', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(fetchMostViewedArticles(7)).rejects.toThrow('Network error');
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
