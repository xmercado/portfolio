import { StyleSheet, View, Text, Pressable} from 'react-native';

export default function Header() {
    return(
    <View style={styles.header}>
      <Text style={styles.name}>Xavier Mercado </Text>
      {/* <View style={styles.list}>
        <Text style={styles.text}>Education </Text>
        <Text style={styles.text}>Experience </Text>
        <Text style={styles.text}>Skills </Text>
        <Text style={styles.text}>Projects </Text>
        <Text style={styles.text}>Contact </Text>
      </View> */}
    </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#DA0037',
    color: '#FFFFFF',
    padding: 10,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
  },
  name: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  text: {
    color: '#FFFFFF',
  },
});