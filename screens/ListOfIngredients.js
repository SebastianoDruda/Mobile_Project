import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const ListOfIngredients = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('none');

  const handleSearch = (text) => {
    setSearchQuery(text);
    // AGGIUNGERE QUI LA LOGICA PER CERCARE I PRODOTTI
  };

  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    // AGGIUNGERE QUI LA LOGICA PER FILTRARE I PRODOTTI
  };

  const filterOptions = [
    'None',
    'Location',
    'Packaging',
    'Category',
    'Missing Parts',
    'New Ingredients',
  ];

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

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter By:</Text>
        <ModalDropdown
          style={styles.filterDropdown}
          textStyle={styles.filterText}
          dropdownStyle={styles.dropdownContainer}
          options={filterOptions}
          onSelect={(index, value) => applyFilter(value)}
        >
          <Text>{filter}</Text>
        </ModalDropdown>
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
        onOpen={() => handleOpen()}
        onEdit={() => handleEdit()}
        onDelete={() => handleDelete()}
      />
      <ProductSheet
        name="Bread"
        brand="Mulino Bianco"
        categories="..."
        location="Pantry"
        maturation="green"
        packaging="paper container"
        expiryDate="02/01/2024"
        onOpen={() => handleOpen()}
        onEdit={() => handleEdit()}
        onDelete={() => handleDelete()}
      />
      <ProductSheet
        name="Cheddar"
        brand="Kraft"
        categories="cheese"
        location="Fridge"
        maturation="green"
        packaging="paper container"
        expiryDate="03/01/2024"
        onOpen={() => handleOpen()}
        onEdit={() => handleEdit()}
        onDelete={() => handleDelete()}
      />
    </View>
  );
};

const ProductSheet = ({ name, brand, categories, maturation, packaging, location, expiryDate, onOpen, onEdit, onDelete }) => {
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
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Text style={styles.buttonText}>Edit</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.openButton} onPress={onOpen}>
          <Text style={styles.buttonText}>Opened Item</Text>
        </TouchableOpacity>
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

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterLabel: {
    marginRight: 10,
  },

  filterDropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },

  filterText: {
    color: 'black',
  },

  dropdownContainer: {
    height: 150,
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

  buttons: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  openButton: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 5,
    marginTop: 5,
  },

  editButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    marginTop: 5,
  },

  deleteButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 5,
    marginTop: 5,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ListOfIngredients;
