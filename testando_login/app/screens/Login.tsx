import {View, Text,StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
const Login = () =>{
    const [email,setEmail] = useState(' ');
    const [password,setPassword] = useState(' ');
    const [loading,setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    
    const signIn = async () =>{
       setLoading(true);
       try{
        const response = await signInWithEmailAndPassword(auth,email,password);
        console.log(response);
        alert('Check your emails!');
       } catch(error:any){
        console.log(error);
        alert('Sign in failed '+error.message);
       }finally{
        setLoading(false);
       }
    }
    const signUp = async () =>{
        setLoading(true);
        try{
         const response = await createUserWithEmailAndPassword(auth,email,password);
         console.log(response);
         alert('Check your emails!');
        } catch(error:any){
         console.log(error);
         alert('Sign up failed '+error.message);
        }finally{
         setLoading(false);
        }
     }
    
    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <KeyboardAvoidingView behavior="padding">
            <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text)=>setEmail(text)}></TextInput>
            <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text)=>setPassword(text)}></TextInput>
            {loading ? (<ActivityIndicator size="large" color="#0000ff"/>): (
            <>
                <TouchableOpacity style={styles.button} onPress={signIn}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={signUp}><Text style={styles.buttonText}>Criar conta</Text></TouchableOpacity>
            </>)}
            </KeyboardAvoidingView>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        flex:1,
        justifyContent:'center'
    },
    input:{
        marginVertical:4,
        height:50,
        borderWidth:1,
        borderRadius:4,
        padding:10,
        backgroundColor:"#fff",
        marginBottom:10
    },
    button:{
        marginBottom:10,
        marginTop:10,
        backgroundColor:"#fff",
        borderRadius:4,
        height:35,
        justifyContent:"center"
    },
    buttonText:{
        alignSelf:"center"
    }
});