import React, {Suspense} from 'react'
import {SafeAreaView, Text, View} from 'react-native'

import {FilmsList} from './FilmsList'

export function HomeScreen() {
  return (
    <SafeAreaView>
      <Suspense
        fallback={
          <View>
            <Text>Loading....</Text>
          </View>
        }>
        <FilmsList />
      </Suspense>
    </SafeAreaView>
  )
}
