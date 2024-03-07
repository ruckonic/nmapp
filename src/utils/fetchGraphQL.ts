export async function fetchGraphQL(
  query: string | null,
  variables: Record<string, any> = {},
) {
  const response = await fetch(
    'https://swapi-graphql.netlify.app/.netlify/functions/index',
    {
      method: 'POST',
      body: JSON.stringify({query, variables}),
      headers: {
        'content-type': 'application/json',
      },
    },
  );

  return response.json();
}
