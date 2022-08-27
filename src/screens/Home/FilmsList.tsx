import React, {useMemo} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {graphql, useLazyLoadQuery} from 'react-relay'

import {FilmsListQuery} from '__generated__/FilmsListQuery.graphql'
import {PlanetList} from './PlanetList'

export function FilmsList() {
  const {allFilms} = useLazyLoadQuery<FilmsListQuery>(
    graphql`
      query FilmsListQuery {
        allFilms {
          edges {
            node {
              id
              episodeID
              title
              planetConnection {
                ...PlanetList_planets
              }
            }
          }
        }
      }
    `,
    {},
  )

  const allFilmsSorted = useMemo(
    () =>
      Array.from(allFilms?.edges ?? []).sort((a, b) => {
        const aEpisodeID = a?.node?.episodeID ?? null
        const bEpisodeID = b?.node?.episodeID ?? null

        if (aEpisodeID === null || bEpisodeID === null) {
          return -1
        }

        if (aEpisodeID < bEpisodeID) {
          return -1
        }

        return 1
      }),
    [allFilms],
  )

  return (
    <FlatList
      data={allFilmsSorted}
      renderItem={({item}) => {
        if (!item?.node) return null

        return (
          <View style={styles.listItem}>
            <View style={styles.listHeaderContainer}>
              <Text style={styles.listItemTitleText}>
                {item.node.episodeID ?? '-'}
              </Text>
              <Text style={styles.listItemTitleText}>
                {item.node.title || 'No title'}
              </Text>
            </View>
            {item.node.planetConnection && (
              <PlanetList filmsRef={item.node.planetConnection} />
            )}
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
  },
  listHeaderContainer: {
    flexDirection: 'row',
  },
  listItemTitleText: {
    paddingStart: 2,
    fontSize: 20,
    fontWeight: 'bold',
  },
})
