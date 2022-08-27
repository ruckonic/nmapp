import React from 'react'
import {FlatList, Text} from 'react-native'

export function ListView() {
  return <FlatList data={[]} renderItem={({item}) => <Text>{item}</Text>} />
}
