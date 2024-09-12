import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';

export default function App() {
  const {signIn, signOut} = useAuth();

const handleEntrarSuper = async() => {
  try {
    await signIn({email: "super@email.com", password: "Super123!"})
    router.replace("/");
  } catch (error) {
    console.log(error)
  }
}
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo pronto para usar</Text>
      <Button title="SignIn Super" onePress={handleEntrarSuper}/>
      <Button title="SignIn Adm" onePress={()=>signIn({email: "adm@gmail.com", password: "Adm123!"})}/>
      <Button title="SignIn User" onePress={()=>signIn({email: "user@gmail.com", password: "User123!"})}/>
      <Button title="SignOut" onePress={()=>signOut()}/>
        <Button title="Sobre" onPress={()=>router.push("/about")}/>
          <Button title="Sair Do Aplicativo" onPress={()=> BackHandler.exitApp()}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title:{
    fontFamily: "light",
    fontSize: 20,
  }
});
