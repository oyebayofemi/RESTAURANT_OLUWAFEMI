import { Text, View, StyleSheet } from "react-native"
import FontAwesome, { Ionicons } from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from '@expo/vector-icons';

const Categories = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {props.icon === "local-offer" ?
                    <MaterialIcons name="local-offer" size={30} color={props.color} /> :
                    <FontAwesome name={props.icon} size={30} color={props.color} />
                }
            </View>

            <Text style={styles.text}>
                {props.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "22%",
        height: "30%",
        marginRight: 10,
        marginBottom: 20,
        alignItems: "center",
    },
    iconContainer: {
        backgroundColor: "white",
        borderWidth: 1,
        flexDirection: "column",
        borderRadius: 20,
        borderColor: "#cdcdcd",
        width: "80%",
        height: "65%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    text: {
        fontWeight: "bold",
        flexShrink: 1
    }
});


export default Categories