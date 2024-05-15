import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, SelectedImage }) {
    const imageSource = SelectedImage  ? { uri : SelectedImage } : placeholderImageSource;

  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 440,
    borderRadius: 18,
  },
});
