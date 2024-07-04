import { Text, View, StyleSheet, Image } from "react-native"

const Card = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.title}</Text>

            <Image
                style={styles.image}
                resizeMode="contain"
                source={props.imageName} />

            <Text style={styles.descriptionText}>{props.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderWidth: 1,
        flexDirection: "column",
        borderRadius: 20,
        borderColor: "#cdcdcd",
        width: "47%",
        height: "100%",
        padding: 20,
    },
    image: {
        width: "100%",
        height: "60%"
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    descriptionText: {
        textAlign: "center",
    }
});


export default Card