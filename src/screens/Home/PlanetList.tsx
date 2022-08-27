import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {graphql, useFragment} from 'react-relay'

import {PlanetList_planets$key} from '__generated__/PlanetList_planets.graphql'

interface PlaneListProps {
  filmsRef: PlanetList_planets$key
}

export function PlanetList({filmsRef}: PlaneListProps) {
  const data = useFragment(
    graphql`
      fragment PlanetList_planets on FilmPlanetsConnection {
        planets {
          id
          name
        }
      }
    `,
    filmsRef,
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={data.planets ?? []}
        renderItem={({item}) => <Text>{item?.name ?? 'Unknown Planet'}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
  },
})
