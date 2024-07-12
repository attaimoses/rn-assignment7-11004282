import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Image source={require('../assets/IMG_7219.jpg')} style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <Text style={styles.materials}>MATERIALS</Text>
      <Text>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
      <Text>Do not use bleach</Text>
      <Text>Do not tumble dry</Text>
      <Text>Dry clean with tetrachloroethylene</Text>
      <Text>Iron at a maximum of 110°C/230°F</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemPrice: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  materials: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
