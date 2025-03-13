import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
    return (
        <View className="bg-red-50 w-full flex flex-row items-center justify-between">

            <Pressable className="w-10 h-10 bg-white rounded-md flex justify-center items-center">
                <Ionicons name="menu" size={20} color={'#121212'}/>
            </Pressable>

            <View>
                <Text>Localização</Text>

                <View> 
                    <Feather name="map-pin" size={14} color="#FF0000"/>
                    <Text>Paraíso - TO</Text>
                </View>
            </View>
            
            <Pressable className="w-10 h-10 bg-white rounded-md flex justify-center items-center">
                <Feather name="bell" size={20} color={'#121212'}/>
            </Pressable>

        </View>
    )
}