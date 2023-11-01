import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListOfExpiredSoon = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
    // AGGIUNGERE QUI LA LOGICA PER CERCARE I PRODOTTI
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search ingredients..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Icon name="search" size={20} style={styles.searchIcon} />
      </View>

      {/* QUI SOTTO IL TEST DEL COMPONENTE PRODUCTSHEET LOCALE, BISOGNA AGGIUNGERE LA LOGICA */}
      <ProductSheet
        name="Tomato souce"
        brand="Barilla"
        categories="pasta souce"
        location="Fridge"
        maturation="green"
        packaging="glass container"
        expiryDate="01/01/2024"
      />
      <ProductSheet
        name="Bread"
        brand="Mulino Bianco"
        categories="..."
        location="Pantry"
        maturation="green"
        packaging="paper container"
        expiryDate="02/01/2024"
      />
      <ProductSheet
        name="Cheddar"
        brand="Kraft"
        categories="cheese"
        location="Fridge"
        maturation="green"
        packaging="paper container"
        expiryDate="03/01/2024"
      />
    </View>
  );
};

const ProductSheet = ({ name, brand, categories, maturation, packaging, location, expiryDate }) => {
  return (
    <View style={styles.productSheet}>
      <View style={styles.productDetails}>
        <Text>Name: {name}</Text>
        <Text>Brand: {brand}</Text>
        <Text>Categories: {categories}</Text>
        <Text>Maturation: {maturation}</Text>
        <Text>Packaging: {packaging}</Text>
        <Text>Location: {location}</Text>
        <Text></Text>
        <Text>Expiry Date: {expiryDate}</Text>
      </View>
    </View>
  );
}; /* AGGIUNGERE QUI SOPRA LA LOGICA PER MODIFICARE E ELIMINARE I PRODOTTI */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },

  searchInput: {
    flex: 1,
    height: 40,
    color: 'black',
  },

  searchIcon: {
    color: 'gray',
  },

  productSheet: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productDetails: {
    flex: 1,
  },

});

export default ListOfExpiredSoon;
