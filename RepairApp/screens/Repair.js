import React from "react";
import { SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,

  Platform,  } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Select, 
  SelectItem,
  IndexPath,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import ValidationComponent from 'react-native-form-validator'
import axios from 'axios'


// const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

// const navigateBack = () => {
//   navigation.goBack();
// };

// const BackAction = () => (
//   <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
// );


export default class Repair extends ValidationComponent {
  
  state = {
    loading: false,
    repair_type: '',
    desc: '',
    created_date: '',
    image: '',
  }

  _onSubmit = () => {
    const isValid = this.validate({
      repair_type: { required: true },
      desc: { required: true },
      created_date: { required: true },
      image: { required: true },
    });
    if (isValid) {
      this.setState({ loading: true })
      const formData = new FormData();
      const uri = this.state.avatar
      formData.append('download', {
        uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
        type: 'image/png',
        name: 'download.png',
      })
      formData.append('repair_type', this.state.repair_type)
      formData.append('desc', this.state.desc)
      formData.append('created_date', this.state.created_date)
      formData.append('image', this.state.image)
      const config = {
        method: 'POST',
        body: formData,
      }
      axios.post('http://127.0.0.1:8000/api/Repairs/', formData, config)
        .then((res) => {
          Alert.alert(
            'Create success',
            'Click OK go to resume page',
            [{
              text: 'OK', onPress: () => {
                this.props.navigation.push('RepairDetail', { id: res.data.id })
              }
            }]
          )
        }).catch((error) => {
          console.log('error :', error)
        }).finally(() => {
          this.setState({ loading: true })
        })
    }
    
  }

  

  render() {
    
    return (

      <SafeAreaView style={styles.container}>
        <Text style={styles.errorMessage}>
          {this.getErrorMessages()}
        </Text>

        <View>
          <Text>ประเภท</Text>

          <Select title="ประเภท">
            <SelectItem title='Option 1'/>
            <SelectItem title='Option 2'/>
            <SelectItem title='Option 3'/>
          </Select>
        
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>ปัญหา/อาการ</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ desc: text })}
            value={this.state.desc}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>เวลาที่อยู่ห้อง</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ created_date: text })}
            value={this.state.created_date}
          />
        </View>



        <View style={{ marginTop: 20 }}>
          <Text>รูปภาพ(ถ้ามี)</Text>

        </View>


        <View style={{ marginTop: 20, marginBottom: 80 }}>
          <Button
            disabled={this.state.loading}
            onPress={this._onSubmit}
            title={this.state.loading ? 'Loading...' : 'Create Repair'}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: { padding: 30, backgroundColor: 'white', minHeight: '100%' },
  textInput: { height: 40, borderColor: 'gray', borderWidth: 1 },
  textAreaInput: { height: 100, borderColor: 'gray', borderWidth: 1 },
  errorMessage: { color: 'red', marginBottom: 20 }
})






// export default class Repair extends React.Component {
  
//   render() {
//     // const { navigation } = this.props;
//     // const navigateBack = () => {
//     //   navigation.goBack();
//     // };
  

//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <Divider />
//         <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//           <Text category="h1">Add Repair</Text>

//               <Text>ปัญหา/อาการ</Text>
//               <Text>เวลาที่อยู่ห้อง</Text>
//               <Text>รูปภาพ(ถ้ามี)</Text>


//         </Layout>

//       </SafeAreaView>
//     );
//   }
// }
