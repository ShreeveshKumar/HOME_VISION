import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubjectChange = (text) => {
    setSubject(text);
  };

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handleSubmit = () => {
    // Perform actions with the entered data, such as sending an email or making an API call

    // Example: Display the entered information in an alert
    const contactInfo = `Email: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    Alert.alert("Contact Information", contactInfo);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={handleEmailChange}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter subject"
        onChangeText={handleSubjectChange}
        value={subject}
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Enter your message"
        onChangeText={handleMessageChange}
        value={message}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  messageInput: {
    height: 120,
  },
});

export default Contact;
