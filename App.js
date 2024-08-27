import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity, Keyboard} from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import ApiCep from "./src/service/api";

export default function App() {

  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [uf, setUf] = useState("")
  const [ddd, setDdd] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [toggle, setToggle] = useState(false)
  const [toggleBar, setToggleBar] = useState(false)

  const handlerClearCard = () => {
    setToggle(false)
    setCep("")
    setLogradouro("")
    setLocalidade("")
    setDdd("")
    setBairro("")
    setUf("")
  }

  const handlerNavBar = () => {
    setToggleBar(false);
  }


  const handlerFindCep = async () => {
    if(cep == ""){
      Alert.alert("Cep inválido!")
      setCep("")
    }

    try{
      const response = await ApiCep.get(`/${cep}/json/`)
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setUf(response.data.uf)
      setDdd(response.data.ddd)
      setLocalidade(response.data.localidade)
      setToggle(true)
      Keyboard.dismiss()
    }catch(error){
      console.log("ERRO" + error)
      setToggle(false)
    }
  }

  return (
    <View style={styles.container}>

{ 
      toggleBar && (
        <View>
            <Text>Buscar</Text>
            <Text>Recentes</Text>
            <Text>Favoritos</Text>
        </View>
      )}

      <View style={styles.header}>
      <Image
      source={require("./assets/logo.png")}
      style={styles.image}/>
      <TouchableOpacity onPress={handlerNavBar}>
        <Icon name="bars" size={25} marginLeft={75} marginTop={54}/>
      </TouchableOpacity>
      </View>

      
      <View style={styles.containerCep}>
      <Text style={styles.title}>CEP</Text>
      <TextInput placeholder="00.000-000" style={styles.inputText}
      value = {cep}
      onChangeText={(texto) => setCep(texto)}
      />

      <View style={styles.divButttons}>
      <TouchableOpacity style={styles.buttonBuscar} onPress={handlerFindCep} > 
        <Text style={styles.textButtonBuscar}>Buscar</Text>    
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.buttonBuscar} onPress={handlerClearCard}> 
        <Text style={styles.textButtonBuscar}>Nova Busca</Text>    
      </TouchableOpacity>
      </View>
      </View>

    {
      toggle && (
      <View style={styles.card}>
        <Text style={styles.textCard}>Cep: {cep}</Text>
        <Text style={styles.textCard}>Logradouro: {logradouro}</Text>
        <Text style={styles.textCard}>Bairro: {bairro}</Text>
        <Text style={styles.textCard}>Localidade: {localidade}</Text>
        <Text style={styles.textCard}>DDD: {ddd}</Text>
        <Text style={styles.textCard}>UF: {uf}</Text>
      </View>
      )
    }

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    fontFamily: "arial",
  },
  containerCep: {
    marginTop: 100,
    alignItems:"center",
    backgroundColor: "#fff",
    justifyContent: "center"
  },

  header: {
    marginTop: 8,
    height: 100,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#f6f3f3",

  },

  divButttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    width: "100%"
  },

  buttonBuscar: {
    marginTop: 30,
    marginRight: 10,
    padding: 10,
    borderColor: "#000000", borderWidth: 1,
    width: "40%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 6
  },

  textButtonBuscar: {
    color: "white",
    textAlign: "center",
    fontSize: 15
  },

  textCard:{
    fontSize: 16
  },

  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "green",
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "gray",
    padding: 10,
    marginTop: 20,
    width: "80%",
  },
  image: {
    marginTop:40,
    height: 80,
    width: 200
  },
  card: {
    marginTop: 40,
    alignSelf: "center",
    padding: 10,
    marginLeft: 10,
    display: "flex",
    minHeight: 200,
    minWidth: 260,
    backgroundColor: "#f6f3f3",
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 40,
  },
  navBar: {
    height: 500,
    backgroundColor: "red",
    width: 60,
  }
});
