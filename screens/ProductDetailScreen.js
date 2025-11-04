import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { getProductById } from '../api/products';

export default function ProductDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
  };

  if (!product) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>💲{product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <Button title="Editar" onPress={() => navigation.navigate('EditProduct', { id })} />
      <Button title="Eliminar" color="red" onPress={() => navigation.navigate('DeleteProduct', { id })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, alignItems: 'center' },
  image: { width: 150, height: 150, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  price: { fontSize: 16, color: '#444', marginVertical: 5 },
  desc: { fontSize: 14, color: '#555', textAlign: 'center', marginVertical: 10 },
});
