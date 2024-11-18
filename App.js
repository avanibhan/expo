import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function App() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Image Slider */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5-pmZqNq7_F7OJsAADVFM1OTdqfV_C8oqyuqBwOoyTNa2UuOj",
          }}
          style={styles.productImage}
        />
        <FlatList
          data={[1, 2, 3, 4]}
          horizontal
          renderItem={() => <View style={styles.dot} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.dotsContainer}
        />
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Image
            source={{
              uri: "https://example.com/logo-url.jpg",
            }}
            style={styles.brandLogo}
          />
          <View>
            <Text style={styles.brandName}>P&B</Text>
            <Text style={styles.brandHandle}>@pull&bearofficial</Text>
          </View>
          <TouchableOpacity onPress={handleFavoriteToggle} style={styles.favoriteIcon}>
            <AntDesign
              name={isFavorite ? "heart" : "hearto"}
              size={24}
              color={isFavorite ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.productTitle}>
          Pull & Bear Men's Fall Urban Collection
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>$ 26.15</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={18} color="gold" />
            <Text style={styles.rating}>4.8</Text>
          </View>
        </View>
        <Text style={styles.description}>
          Kandinsky license jacket with adjustable drawstring, ribbed sleeves
          and hem and contrast graphics.
        </Text>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  imageContainer: {
    alignItems: "center",
  },
  productImage: {
    width: "65%",
    height: 300,
    borderRadius: 12,
    resizeMode: "cover",
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
    marginHorizontal: 4,
  },
  detailsContainer: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  brandName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  brandHandle: {
    fontSize: 14,
    color: "#666",
  },
  favoriteIcon: {
    marginLeft: "auto",
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  addToCartButton: {
    backgroundColor: "#000",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});