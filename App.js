import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

import Tile from './components/Tile'

function handlePress() {
  console.log("touched");
}
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tilesContainer}>
        <TouchableWithoutFeedback onPress={() => handlePress()}>
          <View style={styles.tile}>
            <Text style={styles.tileHeader}>WithoutFeedback</Text>
            <Text style={styles.tileText}>press me</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight underlayColor="blue" onPress={() => handlePress()} style={styles.tile}>
          <View>
            <Text style={styles.tileHeader}>Highlight</Text>
            <Text style={styles.tileText}>press me</Text>
          </View>
        </TouchableHighlight>
        <TouchableNativeFeedback onPress={() => handlePress()}>
          <View style={styles.tile}>
            <Text style={styles.tileHeader}>NativeFeedback</Text>
            <Text style={styles.tileText}>press me</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress()} style={styles.tile}>
          <View>
            <Text style={styles.tileHeader}>Opacity</Text>
            <Text style={styles.tileText}>press me</Text>
          </View>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
    //

  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  },
  tile: {
    flexBasis: '50%',//200
    borderRadius: 5,
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',
    padding: 10,
  },
  tileHeader: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  tileText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  }
});
