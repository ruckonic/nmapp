/**
 * @generated SignedSource<<ad552414c9181a8168290faf2e38c7d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlanetList_planets$data = {
  readonly planets: ReadonlyArray<{
    readonly id: string;
    readonly name: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "PlanetList_planets";
};
export type PlanetList_planets$key = {
  readonly " $data"?: PlanetList_planets$data;
  readonly " $fragmentSpreads": FragmentRefs<"PlanetList_planets">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PlanetList_planets",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Planet",
      "kind": "LinkedField",
      "name": "planets",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
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
  "type": "FilmPlanetsConnection",
  "abstractKey": null
};

(node as any).hash = "51b095b226e7bb5f200fd02e3d241c80";

export default node;
