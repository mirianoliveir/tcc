import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';

export default function App() {
  const {signIn, signOut} = useAuth();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo pronto para usar</Text>
      <Button title="SignIn Super" onePress={()=>signIn({email: "super@gmail.com", password: "super123!"})}/>
      <Button title="SignIn Adm" onePress={()=>signIn({email: "adm@gmail.com", password: "Adm123!"})}/>
      <Button title="SignIn User" onePress={()=>signIn({email: "user@gmail.com", password: "User123!"})}/>
      <Button title="SignOut" onePress={()=>signOut()}/>
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
  },
  title:{
    fontFamily: "light",
    fontSize: 20,
  }
});
