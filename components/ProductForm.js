import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ProductForm({ product, setProduct, onSubmit, buttonText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={product.title}
        onChangeText={(text) => setProduct({ ...product, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        keyboardType="numeric"
        value={product.price.toString()}
        onChangeText={(text) => setProduct({ ...product, price: text })}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descripción"
        multiline
        value={product.description}
        onChangeText={(text) => setProduct({ ...product, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="URL de imagen"
        value={product.image}
        onChangeText={(text) => setProduct({ ...product, image: text })}
      />
      <Button title={buttonText} onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
});
