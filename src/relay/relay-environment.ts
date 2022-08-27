import {
  Environment,
  Network,
  RecordSource,
  Store,
  type RequestParameters,
  type Variables,
} from 'relay-runtime'

import {fetchGraphQL} from '../utils/fetchGraphQL'

export async function fetchRelay(
  params: RequestParameters,
  variables: Variables,
) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)
  return fetchGraphQL(params.text, variables)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})
