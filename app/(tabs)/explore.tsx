import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ScrollView } from "react-native-gesture-handler";

export default function TabTwoScreen() {
  const [input, setInput] = useState("0");
  const [op, setop] = useState<string | undefined>(undefined);
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");

  const operators = (oper: string) => {
    if (!op) {
      setInput(oper);
      setop(oper);
    }
  };
  const handlepress = (value: string) => {
    // if (value === '=') {
    //   try {
    //     setInput(eval(input).toString());
    //   } catch (error) {
    //     setInput('Error');
    //   }
    // } else {
    //   {

    //     if (input === '0'|| input==='Error') {
    //       setInput(value);
    //     } else {
    //       setInput(input + value);
    //     }
    //   }
    // }
    if (!op) {
      setInput((input + value).replace("error", ""));
      const num1 = parseFloat(value);
    } else {
      const num2 = parseFloat(value);
      // input='';
      setInput((input + value).replace("error",""));
    }
  };

  const cal = () => {
    if (!op) {
      setInput("error");
    } else {
      switch (op) {
        case "+":
          setInput((parseFloat(num1) + parseFloat(num2)).toString());
          break;
        case "-":
          setInput(num1 - num2);
          break;
        case "*":
          setInput(num1 * num2);
          break;
        case "/":
          if (num2 === 0) {
            setInput("Error");
          } else {
            setInput(num1 / num2);
          }
          break;
      }
      setop(undefined);
    }
  };

  const del = () => {
    if (input === null || input.length === 0) setInput("0");
    else setInput(input.slice(0, -1));
  };

  const clearInput = () => {
    setInput("0");
    // setResult(null);
  };
  return (
    // <ScrollView>
    <View style={styles.container}>
      <Text style={{ fontSize: 34, color: "white", textAlign: "center" }}>
        Calculator
      </Text>
      <View style={styles.Display}>
        <Text style={{ textAlign: "right", fontSize: 32 }}>{input}</Text>
      </View>
      <View style={styles.inputs}>
        <View style={styles.button}>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              height: 75,
              width: 75,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              shadowColor: "red",
              shadowOpacity: 0.6,
              shadowRadius: 10,
              margin: 5,
            }}
            onPress={() => clearInput()}
          >
            AC
          </TouchableOpacity>
          <TouchableOpacity style={styles.keys} onPress={() => del()}>
            clear
          </TouchableOpacity>
          <TouchableOpacity style={styles.keys} onPress={() => operators("%")}>
            %
          </TouchableOpacity>
          <TouchableOpacity style={styles.keys} onPress={() => operators("/")}>
            /
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress("7")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>7</Text>
          </TouchableOpacity>e
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress("8")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress("9")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keys} onPress={() => operators("*")}>
            <Text style={{ fontSize: 23, fontWeight: "600" }}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress("4")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress("5")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress("6")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keys} onPress={() => operators("-")}>
            <Text style={{ fontSize: 23, fontWeight: "600" }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress("1")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress("2")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress("3")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keys} onPress={() => operators("+")}>
            <Text style={{ fontSize: 23, fontWeight: "600" }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottombutton}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 75,
              width: 160,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              shadowColor: "white",
              shadowOpacity: 0.6,
              shadowRadius: 10,
              margin: 5,
            }}
            onPress={() => handlepress("0")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keys}
            onPress={() => handlepress(".")}
          >
            <Text style={{ fontSize: 23, fontWeight: "600" }}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keys} onPress={() => cal()}>
            <Text style={{ fontSize: 23, fontWeight: "600" }}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  Display: {
    height: "20%",
    backgroundColor: "white",
    justifyContent: "flex-end",
    // alignItems:'center',
    padding: 10,
  },
  inputs: {
    height: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    flexDirection: "column",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottombutton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  keys: {
    backgroundColor: "white",
    height: 75,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "white",
    shadowOpacity: 0.6,
    shadowRadius: 10,
    margin: 5,
  },
});
