import { ScrollView, Text, View,  } from "react-native";
import { Header } from "../components/header"

import  Constats  from "expo-constants"
const statusBarHeight = Constats.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1}}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>
        <Header/>
      </View>
    </ScrollView>
  );
}
