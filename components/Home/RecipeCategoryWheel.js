import { ScrollView, View } from "react-native";
import { Card, Image, Text } from "@rneui/themed";

export default function RecipeCategoryWheel() {


    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card>
                <Card.Title>CARD WITH DIVIDER</Card.Title>
                <Card.Divider />
                <View style={{ position: "relative", alignItems: "center" }}>
                    <Text >Pranshu Chittora</Text>
                </View>
            </Card>
            <Card>
                <Card.Title>CARD WITH DIVIDER</Card.Title>
                <Card.Divider />
                <View style={{ position: "relative", alignItems: "center" }}>
                    <Text >Pranshu Chittora</Text>
                </View>
            </Card>
            <Card>
                <Card.Title>CARD WITH DIVIDER</Card.Title>
                <Card.Divider />
                <View style={{ position: "relative", alignItems: "center" }}>
                    <Text >Pranshu Chittora</Text>
                </View>
            </Card>
            <Card>
                <Card.Title>CARD WITH DIVIDER</Card.Title>
                <Card.Divider />
                <View style={{ position: "relative", alignItems: "center" }}>
                    <Text >Pranshu Chittora</Text>
                </View>
            </Card>
        </ScrollView>
    )
}