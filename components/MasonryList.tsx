import { StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import { View } from '../components/Themed';
import Pin from '../components/pin';

interface IMasonryList {
    pins :{
        id: string;
        image: string;
        title: string;
    }[];
}


const MasonryList = ({pins}: IMasonryList) => {
  const width = useWindowDimensions().width;

  const numColumns = width < 500 ? 2 : 2;
  return (
    <ScrollView contentContainerStyle={{width:"100%"}}>
    <View style={styles.container}>
      {Array.from(Array(numColumns)).map((_, colIndex) => (
        <View style={styles.column}>
        {pins
           .filter((_, index) => index % numColumns == colIndex)
           .map((pin) => (
             <Pin Pin={pin} key={pin.id} />
           ))
        }
        
      </View>

      ))}
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection:'row',
      backgroundColor:'white'
    },
    column: {
      backgroundColor:'white',
      flex:1
    }
  
  });
  

export default MasonryList;