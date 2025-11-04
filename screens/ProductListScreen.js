import React, { useEffect, useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import { getProducts } from '../api/products';
import ProductCard from '../components/ProductCard';


export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
          />
        )}
      />
      <Button title="Agregar producto" onPress={() => navigation.navigate('CreateProduct')} />
    </View>
  );
}
