import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>

            <View style={styles.HeaderTextContainer}>
                <Ionicons name={"settings-outline"} size={25} color="orange" />
                <Text style={{
                    color: "black",
                    fontSize: 20,
                    paddingLeft: 5,
                    marginBottom: 10,
                    justifyContent: "center"
                }}>
                    Good morning! What's for lunch?</Text>
            </View>

            <View style={styles.imageContainer}>
                <ImageBackground source={require('../assets/pasta.jpg')} style={styles.imageBackground}>
                    <Text style={styles.imageBackgroundText}>Try our new favorites!</Text>
                </ImageBackground>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",

    },
    HeaderTextContainer: {
        flexDirection: "row",
    },
    imageBackground: {
        height: "100%",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
    },
    imageBackgroundText: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        color: 'white',
        fontSize: 18,
        lineHeight: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    }
});

export default Header