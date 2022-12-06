import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList
 } from 'react-native';

 import { Button } from '../components/Button';
 import { SkillCard } from '../components/SkillCard';


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
        value={newSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />
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
  }  
})
