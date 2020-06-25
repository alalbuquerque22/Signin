import { StyleSheet } from "react-native";
// import Constants from 'expo-constants';
// import GradientButton from 'react-native-gradient-buttons';

export default StyleSheet.create({
  container: {
    flex: 1,
    //  paddingHorizontal:24,
    //  paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#F1CFD9",
  },

  header: {
    //position:'relative',
    flexDirection: "row", // ou row
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    height: 200,
  },

  headerText: {
    fontSize: 28,
    fontStyle: "italic",
    color: "#6A515E",
    fontWeight: "bold",
  },

  boxImg: {
    marginTop: "3%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  //view do botao
  button: {
    alignItems: "center",
    flexDirection: "column",
  },
  //aarea clicavel do botao
  loginsButton: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    //  height:50,
  },
  form: {
    height: 60,
    width: 300,
    borderRadius: 35,
    fontSize: 21,
    marginTop: "3%",
    paddingLeft: "5%",
    // alignItems: "center",
    // flexDirection: "column",
    backgroundColor: "#fff",
  },
  //texto do botao
  actionText: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "bold",
  },

  createBox: {
    alignItems: "center",
    marginTop: "2%",
  },
  textCreate: {
    color: "#979797",
    fontSize: 21,
    fontWeight: "bold",
  },
});
