/**
 * @generated SignedSource<<3a1bed4a1d80f443b6e68c61939ea0de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmsListQuery$variables = Record<PropertyKey, never>;
export type FilmsListQuery$data = {
  readonly allFilms: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly episodeID: number | null | undefined;
        readonly id: string;
        readonly planetConnection: {
          readonly " $fragmentSpreads": FragmentRefs<"PlanetList_planets">;
        } | null | undefined;
        readonly title: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type FilmsListQuery = {
  response: FilmsListQuery$data;
  variables: FilmsListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "episodeID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FilmsListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FilmsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Film",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FilmPlanetsConnection",
                    "kind": "LinkedField",
                    "name": "planetConnection",
                    "plural": false,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "PlanetList_planets"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FilmsListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FilmsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Film",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FilmPlanetsConnection",
                    "kind": "LinkedField",
                    "name": "planetConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Planet",
                        "kind": "LinkedField",
                        "name": "planets",
                        "plural": true,
                        "selections": [
                          (v0/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "33dd737bdc129dc4d37a86cca64fca3c",
    "id": null,
    "metadata": {},
    "name": "FilmsListQuery",
    "operationKind": "query",
    "text": "query FilmsListQuery {\n  allFilms {\n    edges {\n      node {\n        id\n        episodeID\n        title\n        planetConnection {\n          ...PlanetList_planets\n        }\n      }\n    }\n  }\n}\n\nfragment PlanetList_planets on FilmPlanetsConnection {\n  planets {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "0795426454c049c0816ac8b6801dc58d";

export default node;
