import { renderHook, act } from '@testing-library/react';
import { useArticles } from '../../src/hooks/useArticles';
import * as api from '../../src/services/api';
import { mockFetchedArticles } from '../mocks/mockData';

vi.mock('../../src/services/api');

describe('useArticles hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('fetches articles successfully and sets state', async () => {
    api.fetchMostViewedArticles.mockResolvedValue(mockFetchedArticles);

    const { result } = renderHook(() => useArticles(7));

    expect(result.current.loading).toBe(true);
    expect(result.current.articles).toEqual([]);
    expect(result.current.error).toBe(null);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.articles).toEqual(mockFetchedArticles);
    expect(result.current.error).toBe(null);
  });

  test('handles API errors gracefully', async () => {
    api.fetchMostViewedArticles.mockRejectedValue(new Error('API failure'));

    const { result } = renderHook(() => useArticles(7));

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.articles).toEqual([]);
    expect(result.current.error).toBe(
      'Failed to fetch articles. Please try again later.',
    );
  });

  test('refetches data when selectedPeriod changes', async () => {
    api.fetchMostViewedArticles.mockResolvedValue(mockFetchedArticles);

    const { result } = renderHook(() => useArticles(1));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(api.fetchMostViewedArticles).toHaveBeenCalledWith(1);

    act(() => {
      result.current.setSelectedPeriod(30);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(api.fetchMostViewedArticles).toHaveBeenCalledWith(30);
  });
});
