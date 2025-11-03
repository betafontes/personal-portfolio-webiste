// app/utils/fetch-hygraph-query.ts
export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate: number = 60 * 60 * 24
): Promise<T> => {
  const url = process.env.HYGRAPH_URL;
  const token = process.env.HYGRAPH_TOKEN;

  if (!url || !token) {
    throw new Error(
      'HYGRAPH_URL ou HYGRAPH_TOKEN não estão definidos no .env.local. ' +
        'Certifique-se de reiniciar o servidor após editar o arquivo.'
    );
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate },
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data.errors?.[0]?.message ?? 'Unknown error';
    throw new Error(`Failed to fetch data: ${message}`);
  }

  return data.data;
};
