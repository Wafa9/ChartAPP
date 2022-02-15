import React, {useState} from "react";
import {Text, View
} from "react-native";

//agenda import
import { Agenda } from "react-native-calendars";

// // global func
const timeToString = (time) => {
  
  // hook state
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

const CalendarScreen = () => {

    
    const [items, setItems] = useState({});

    const loadItems=(day) =>{
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          setItems(newItems);
        }, 1000);
      }

     return (
     <View>
       <Text>hello calendar</Text>
      <View style={{flex:1}}>
        
        <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2021-05-16'}
        showClosingKnob={true}/>
        
      </View>
      </View>
    );
  }

  export default CalendarScreen;