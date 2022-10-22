import {
	Text,
	View,
	SafeAreaView,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "../styles";
import { entries, initialPasswordState } from "../utils";

const PasswordScreen = () => {
	const [password, setPassword] = useState(initialPasswordState);
	const [message, setMessage] = useState("");

	useEffect(() => {
		const pin = password.join("");

		if (pin?.length === 4 && pin != "1234") {
			setMessage("PIN doesn't match");
			setTimeout(() => {
				setPassword(initialPasswordState);
			}, 1000);
		} else if (pin?.length === 4 && pin == "1234") {
			alert("success");
			setPassword(initialPasswordState);
		} else {
			setMessage("");
		}
	}, [password]);

	const onPressNumber = (number) => {
		let tempCode = [...password];

		for (let index = 0; index < tempCode.length; index++) {
			if (tempCode[index] === "") {
				tempCode[index] = number;
				break;
			} else {
				continue;
			}
		}
		setPassword(tempCode);
	};

	const onDeleteNumber = () => {
		let tempCode = [...password];

		for (let index = tempCode.length - 1; index >= 0; index--) {
			if (tempCode[index] !== "") {
				tempCode[index] = "";
				break;
			} else {
				continue;
			}
		}
		setPassword(tempCode);
	};
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View>
				<TouchableOpacity>
					<Icon
						name="arrow-left"
						size={30}
						style={{ color: "#043b85", margin: 10 }}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Repeat new transaction PIN</Text>
				<View>
					<Text style={styles.headerSubtitle}>4-digits</Text>
				</View>
				<Text style={{ color: "red", marginTop: 10 }}>{message}</Text>
				<View style={styles.codeContainer}>
					{password.map((item, i) => {
						let style = item != "" ? styles.pressed : styles.unpressed;
						return <View key={i} style={style}></View>;
					})}
				</View>
			</View>
			<View style={{ alignItems: "center", justifyContent: "center" }}>
				<View style={styles.numbersContainer}>
					{entries.map((item, i) => {
						return (
							<TouchableOpacity
								style={styles.number}
								key={i}
								onPress={() => onPressNumber(item.id)}
							>
								<Text style={styles.numberText}>{item.id}</Text>
							</TouchableOpacity>
						);
					})}
				</View>
				<View style={styles.numbersBottom}>
					<TouchableOpacity
						style={styles.number}
						onPress={() => onPressNumber("0")}
					>
						<Text style={styles.numberText}>0</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.delete}
						onPress={() => onDeleteNumber()}
					>
						<Icon style={styles.numberText} name="delete" />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default PasswordScreen;
