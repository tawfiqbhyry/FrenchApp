import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AppBtn from "../components/AppButton";
import Colors from "../config/Colors";
export default function Materials() {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <AppBtn
        text={"premier semestre"}
        style={styles.btn}
        onPress={() => {
          navigation.navigate("VideosUnits", {
            url: "https://drive.google.com/file/d/1vizMbfGVSlHYF7BDcr0bpabkQ6WbilXs/view?usp=sharing",
          });
        }}
      />
      <AppBtn
        text={"second semestre"}
        onPress={() =>
          navigation.navigate("VideosUnits", {
            url: "https://drive.google.com/file/d/1r_ZEtrm2bsPagyaZmjJxAQMQFd7E8Ria/view?usp=sharing",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  btn: {
    marginBottom: "3%",
  },
});
