/**
 * @generated SignedSource<<6ead2d38dde8b64d335818c2c12ef617>>
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
    readonly name: string | null;
  } | null> | null;
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

(node as any).hash = "2521690f03ffd1612a42f4f1810e4810";

export default node;
