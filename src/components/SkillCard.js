import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export function SkillCard() {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>skill</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  textSkill: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
})