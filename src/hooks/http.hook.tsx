import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error('error fetch');
        }

        const data = await response.json();

        setIsLoading(false);

        return data;
      } catch (e) {
        setIsLoading(false);
        setIsError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setIsError(null), []);

  return { isLoading, request, isError, clearError };
};
