import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		height: 250,
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		fontSize: 25,
		marginTop: 50,
		color: "#4e5a60",
	},
	headerSubtitle: {
		fontSize: 20,
		color: "#bbc2c6",
		marginTop: 10,
	},
	codeContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 40,
		width: "30%",
	},
	unpressed: {
		width: 20,
		height: 20,
		borderRadius: "100%",
		borderWidth: 1,
		borderColor: "#b8d2ff",
	},
	pressed: {
		width: 20,
		height: 20,
		borderRadius: "100%",
		borderWidth: 1,
		backgroundColor: "#b8d2ff",
		borderColor: "#b8d2ff",
	},

	number: {
		width: 75,
		borderBottomColor: "#b8d2ff",
		borderBottomWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 25,
	},
	delete: {
		width: 75,
		justifyContent: "center",
		alignItems: "center",
		margin: 25,
	},
	numbersContainer: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 70,
	},
	numbersBottom: {
		alignItems: "center",
		alignSelf: "flex-end",
		flexDirection: "row",
		marginRight: 10,
		flexWrap: "wrap",
	},
	numberText: {
		fontSize: 40,
		color: "#043b85",
	},
});
