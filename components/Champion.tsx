import React, { useState } from 'react';
import { Text, TextInput, View, Image, Button } from 'react-native';

const ChampionLogo = () => {
    return (
    <View>
        <Image
        source={{uri: "https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"}}
        style={{width: 200, height: 100}}
        />
        <Text> Welcome to the League! </Text>
    </View>
    )
}

const Champion = () => {
    const championName = "Volibear";
    return (
        <Text> My champion choice is: {championName} </Text>
    )
}

const ChampionTroll = (champ: any) => {
    const [isTrolling, setIsTrolling] = useState(true);

    return (
        <View>
            <Text> {champ.name} is {isTrolling ? "trolling" : "not trolling"} </Text>
            <Button
            onPress={() => {
                setIsTrolling(false);
            }}
            disabled={!isTrolling}
            title={isTrolling ? "Seriously.. Come on" : "Okay, okay. GL HF"}
            />
        </View>
    )
}

//Not sure why React Native whines about unspecified properties. So far our teacher just tells us to write :any
//Which to me sounds like a cheap cop out, rather than actually solve the issue professionally. 
const TopLaneChampionSelect = (champ: any) => {
    return (
        <View>
            <Text> Top lane champion choice {champ.name}</Text>
        </View>
    )

}

const BotLaneChampionSelect = (botlane: any) => {
    return (
        <View>
            <Text> Bot lane champion picks: {botlane = ["Jinx and ", "Blitzcrank"]}</Text>
        </View>
    )
}

//borderWidth = 0 is the same as borderLine = 'hidden'. 
const ChampionSelect = () => {
    return (
        <view>
            <Text> Select your champion: </Text>

            <TextInput
            style={
                {
                    height: 20,
                    borderWidth: 0
                }
            }

            //defaultValue is the same as input value
            defaultValue="Click and Type here"
            />

        </view>
    )
}

//You have to define each property in the scope with a data type
const BannedChampions = (firstBan: string, secondBan: string, thirdBan: string) => {
    return firstBan + "" + secondBan + "" + thirdBan;
}


//Combined all the component into one, which means I only have to export one component containing all of them.
//The top component ChampionBan, is called the parent component, which contains all the other child component: Champion and ChampionSelect
const ChampionBan = () => {
    return (
        <View>
            <ChampionLogo />
            <Champion />
            <ChampionTroll name = "Volibear" />
            <TopLaneChampionSelect name = "Yorick" />
            <BotLaneChampionSelect botlane />
            <ChampionSelect />
            <Text>Champion bans: {BannedChampions("Shaco - ", "Kha'zix - ", "Master Yi")} </Text>
        </View>
    )
}

//By exporting default you can call the import whatever you like. 
//Like I will import all these champion component as a collection called ChampionBundle
export default ChampionBan;