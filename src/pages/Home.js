import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity
 } from 'react-native';

 import { Button } from "../components/Button"


export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
    setNewSkill('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellcome, John</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555555"
        onChangeText={setNewSkill}
        value={ newSkill }
      />
      <Button />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
              {skill}
            </Text>
          </TouchableOpacity>

        ))
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#ffffff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20
  },
  textSkill: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
})
