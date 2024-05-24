import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendario';
import { useNavigation } from '@react-navigation/native';

function CalendarScreen() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (range) => {
    const date = range.startDate;
    setSelectedDate(date);
    navigation.navigate('DayView', { date: date.toISOString().split('T')[0] });
  };

  return (
    <View style={styles.container}>
      <Calendar
        onChange={(range) => handleDateSelect(range)}
        minDate={new Date()}
        startDate={new Date()}
        theme={{
          activeDayColor: {},
          monthTitleTextStyle: {
            color: '#6d95da',
            fontWeight: '300',
            fontSize: 16,
          },
          emptyMonthContainerStyle: {},
          emptyMonthTextStyle: {
            fontWeight: '200',
          },
          weekColumnsContainerStyle: {},
          weekColumnStyle: {
            paddingVertical: 10,
          },
          weekColumnTextStyle: {
            color: '#b6c1cd',
            fontSize: 13,
          },
          nonTouchableDayContainerStyle: {},
          nonTouchableDayTextStyle: {},
          startDateContainerStyle: {},
          endDateContainerStyle: {},
          dayContainerStyle: {},
          dayTextStyle: {
            color: '#2d4150',
            fontWeight: '200',
            fontSize: 15,
          },
          dayOutOfRangeTextStyle: {
            color: 'gray',
          },
          todayContainerStyle: {},
          todayTextStyle: {
            color: '#6d95da',
          },
          activeDayContainerStyle: {
            backgroundColor: '#6d95da',
          },
          activeDayTextStyle: {
            color: 'white',
          },
          nonTouchableLastMonthDayTextStyle: {},
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default CalendarScreen;
