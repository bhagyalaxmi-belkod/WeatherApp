import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#1e90ff',
    
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    backgroundColor:'white', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  bt: {
    margin: 5,
  },
  btext: {
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 10,
  },
  flag: {
    width: 30,
    height: 20,
  },
});

export default Styles;
