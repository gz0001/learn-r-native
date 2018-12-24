import React, { Component } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Calendar as Cal,
  CalendarList,
  Agenda,
  LocaleConfig
} from "react-native-calendars";
import { format } from "date-fns";
import Text from "app/src/ui/Text";

// Styles:
import { container, margin } from "app/src/styles/globalStyles";
import styles from "./styles";

// Config:
LocaleConfig.locales["de"] = {
  monthNames: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "März",
    "Apr.",
    "Mai",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sept.",
    "Okt.",
    "Nov.",
    "Dez."
  ],
  dayNames: [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
  ],
  dayNamesShort: ["Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So."]
};

LocaleConfig.defaultLocale = "de";

class Calendar extends Component {
  state = {
    markedDates: {
      [format(new Date(), "YYYY-MM-DD")]: {
        selected: true,
        marked: true,
        selectedColor: "blue"
      }
    }
  };

  setDate = ({ dateString }) => {
    const { markedDates } = this.state;
    const newDates = {};
    for (let key in markedDates) {
      newDates[key] = { ...markedDates[key], selected: false, marked: false };
    }
    newDates[dateString] = {
      selected: true,
      marked: true,
      selectedColor: "blue"
    };
    this.setState({ markedDates: newDates });
  };
  componentDidMount() {
    //console.log("config: ", LocaleConfig.locales);
  }

  render() {
    const { markedDates } = this.state;
    console.log("cur: ", markedDates);

    return (
      <View style={container.full}>
        <TouchableOpacity
          style={[styles.iconView]}
          onPress={() => alert("pressed")}
        >
          <Icon name="plus" size={24} color="white" />
        </TouchableOpacity>
        <ScrollView style={[container.full, { paddingTop: 30 }]}>
          <View
            style={[
              {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "green"
              }
            ]}
          >
            <Text style={[margin.mb_4]}>Calendar:</Text>
            {/**Calendar */}
            <Cal
              markedDates={markedDates}
              onDayPress={this.setDate}
              onDayLongPress={day => {
                console.log("selected day", day);
              }}
              onMonthChange={month => {
                console.log("month changed", month);
              }}
              style={[{ borderWidth: 2, borderColor: "blue" }]}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Calendar;
