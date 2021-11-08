import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'


export const BMI = () => {

    const [weight, onChangeWeight] = React.useState("");
    const [height, onChangeHeight] = React.useState("");
    const [bmi, onChangeBmi] = React.useState("");


    const HandleClick = (ht, wt) => {
      let _height = ht.replace(/[^0-9]/g, '') / 100
      let _weight = wt.replace(/[^0-9]/g, '')

      let _bmi = Math.round(_weight/ (_height * _height) * 10) / 10
      onChangeBmi(_bmi)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text} >Calculador IMC Luiz Sutil</Text>

            <View style={{marginBottom: 55}}>
                <View style={{marginBottom:20, display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <TextInput 
                      style={styles.input}
                      value={weight}
                      placeholder='Peso'
                      onChangeText={onChangeWeight}
                      keyboardType = 'number-pad'
                    ></TextInput>
                    <Text>kg</Text>
                 </View>
                <View style={{marginBottom:20, display:"flex", flexDirection:"row", alignItems:"center"}}>
                  <TextInput 
                    style={styles.input}
                    value={height} 
                    onChangeText={onChangeHeight}
                    placeholder='Altura'
                    keyboardType = 'number-pad'
                  ></TextInput>
                  <Text>cm</Text>
                </View>
            </View> 

            <View style={{marginBottom:30}}>
              <TouchableOpacity onPress={()=>HandleClick(height,weight)}>
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>Calcular</Text>
                  </View>
              </TouchableOpacity>
            </View>
            <View>
              {bmi ? <Text style={styles.responseText}>Seu IMC é: {bmi}</Text>: null}
              {bmi ? <Text style={styles.statusText}>Isto é considerado 
                {
                  bmi < 18.5 ? ' abaixo do peso' :
                  bmi <= 24.9 ? ' ok' :
                  bmi <= 29.9 ? ' acima do peso' :
                  ' Obeso'
                }
              </Text> : null}
            </View>

        </View>
    )
}

export default BMI


const styles = StyleSheet.create({
  container: {
      flex:1,
      //justifyContent:'center'
      alignItems: 'center',
      marginTop: 100 
  },
  text: {
      color: '#A86916',
      fontSize: 30,
      marginBottom:140
  },
  input: {
      height: 50,
      margin: 12,
      width: 70,
      borderBottomWidth:1,
      fontSize: 25
    },
    button: {
      borderRadius:8,
      borderColor:'black',
      backgroundColor: 'white',
      width:255,
      height:50,
      borderWidth: 1,
      display:'flex', 
      alignItems: 'center',
      justifyContent:'center',
      
  },
  buttonText:{
      color:'#A86916',
      fontSize:33,
  },
  responseText:{
    color:'#A86916',
    fontSize:20,
  },
  statusText:{
  color:'teal',
  fontSize:20,
  },
})