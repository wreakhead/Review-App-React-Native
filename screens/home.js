import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../styles/global";

const home = ({ navigation }) => {
  const [reviews, setReview] = useState([
    {
      title: "Call of Duty Black OPS II",
      rating: 4.8,
      body: "The game's campaign follows up the story of Black Ops and is set in the late 1980s and 2025. In the 1980s, the player switches control between Alex Mason and Frank Woods, two of the protagonists from Black Ops, while in 2025, the player assumes control of Mason's son, David (codenamed 'Section'). Both time periods involve the characters pursuing Raul Menendez, a Nicaraguan cartel leader, who is responsible for kidnapping Woods in the 80s and later sparking a second Cold War in 2025. The campaign features nonlinear gameplay and has multiple endings.",
      key: "1",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png",
    },
    {
      title: "Assassin's Creed IV: Black Flag",
      rating: 4.8,
      body: "The plot is set in a fictional history of real-world events and follows the centuries-old struggle between the Assassins, who fight for peace with free will, and the Templars, who desire peace through control. The framing story is set in the 21st century and depicts the player as an employee of Abstergo Industries (the modern-day incarnation of the Templars), who becomes caught in their conflict with the Assassins. The main story is set in the 18th century Caribbean during the Golden Age of Piracy, and follows notorious Welsh pirate Edward Kenway, grandfather and father of Assassin's Creed III protagonist Ratonhnhaké:ton and antagonist Haytham Kenway, respectively, who stumbles upon the Assassin-Templar conflict. A major plot element concerns the attempted establishment of an independent Pirate republic in the CaribbeanThe plot is set in a fictional history of real-world events and follows the centuries-old struggle between the Assassins, who fight for peace with free will, and the Templars, who desire peace through control. The framing story is set in the 21st century and depicts the player as an employee of Abstergo Industries (the modern-day incarnation of the Templars), who becomes caught in their conflict with the Assassins. The main story is set in the 18th century Caribbean during the Golden Age of Piracy, and follows notorious Welsh pirate Edward Kenway, grandfather and father of Assassin's Creed III protagonist Ratonhnhaké:ton and antagonist Haytham Kenway, respectively, who stumbles upon the Assassin-Templar conflict. A major plot element concerns the attempted establishment of an independent Pirate republic in the Caribbean.",
      key: "2",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/28/Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg",
    },
    {
      title: "The Witcher 3: Wild Hunt",
      rating: 4.8,
      body: "The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher.[1] Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims.[2][3] He has a variety of weapons, including bombs, a crossbow and two swords (one steel and one silver).[4] The steel sword is used primarily to kill humans while the silver sword is more effective against creatures and monsters.[5] Players can draw out, switch and sheathe their swords at will. There are two modes of melee attack; light attacks are fast but weak, and heavy attacks are slow but strong.",
      key: "3",
      image:
        "https://static.wikia.nocookie.net/witcher/images/c/c8/TheWitcher3BoxArt.png/revision/latest?cb=20150512225156",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        horizontal
        data={reviews}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("review", item)}>
            <View style={globalStyles.gameCards}>
              <Image
                style={globalStyles.gameCardsImage}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={globalStyles.gameCardsTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default home;
