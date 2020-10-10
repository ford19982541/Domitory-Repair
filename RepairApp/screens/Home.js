import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Text,
  Card,
  Icon,
  Avatar,
 

} from "@ui-kitten/components";




class Home extends React.Component {

  render() {
    const { navigation } = this.props;
    const navigateDetails = () => {
      navigation.navigate("Detail");
    };
    const navigateEdit = () => {
      navigation.navigate("Edit");
    };
    return (
      <ScrollView style={{ flex: 1 }}>
        <Layout style={{ flex: 1, padding: 5, alignItems: "center" }}>
          <Button style={styles.button1} status='primary'>แจ้งซ่อม</Button>

          <Card style={styles.card} status='warning'>
            <Text style={styles.text} category='h2' status='warning'>แจ้งซ่อม</Text>
            <Text style={styles.text} category='h5'>แจ้งซ่อมไฟฟ้า</Text>
            <Layout style={styles.text1} level='1'>
              <Text style={styles.text} category='s2'>พัดลมไม่หมุน</Text>
              <Text style={styles.text} category='s2'>  09/10/2563</Text>
            </Layout>
            <Layout style={styles.button} level='1'>
              <Button style={styles.button} appearance='outline' status='warning' onPress={navigateDetails}>DETAILS</Button>
              <Button style={styles.button} appearance='outline' status='warning' onPress={navigateEdit}>EDIT</Button>
              <Button style={styles.button} appearance='outline' status='warning' >DELETE</Button>
            </Layout>
          </Card>
          <Card style={styles.card} status='primary'>
            <Text style={styles.text} category='h2' status='primary'>กำลังดำเนินการ</Text>
            <Text style={styles.text} category='h5'>แจ้งซ่อมประปา</Text>
            <Layout style={styles.text1} level='1'>
              <Text style={styles.text} category='s2'>น้ำไม่ไหล</Text>
              <Text style={styles.text} category='s2'></Text>
            </Layout>
            <Layout style={styles.button} level='1'>
              <Button style={styles.button} appearance='outline' onPress={navigateDetails}>DETAILS</Button>
              <Button style={styles.button} appearance='outline' onPress={navigateEdit}>EDIT</Button>
              <Button style={styles.button} appearance='outline' >DELETE</Button>
            </Layout>
          </Card>
          <Card style={styles.card} status='success'>
            <Text style={styles.text} category='h2' status='success'>เสร็จสิ้น</Text>
            <Text style={styles.text} category='h5'>แจ้งซ่อมเฟอร์นิเจอร์</Text>
            <Layout style={styles.text1} level='1'>
              <Text style={styles.text} category='s2'>โต๊ะพัง</Text>
              <Text style={styles.text} category='s2'> </Text>
            </Layout>
            <Layout style={styles.button} level='1'>
              <Button style={styles.button} appearance='outline' status='success' onPress={navigateDetails}>DETAILS</Button>
              <Button style={styles.button} appearance='outline' status='success' onPress={navigateEdit}>EDIT</Button>
              <Button style={styles.button} appearance='outline' status='success' >DELETE</Button>
            </Layout>
          </Card>
          <Card style={styles.card} status='danger'>
            <Text style={styles.text} category='h2' status='danger'>ยกเลิก</Text>
            <Text style={styles.text} category='h5'>แจ้งซ่อมโครงการ</Text>
            <Layout style={styles.text1} level='1'>
              <Text style={styles.text} category='s2'></Text>
              <Text style={styles.text} category='s2'></Text>
            </Layout>
            <Layout style={styles.button} level='1'>
              <Button style={styles.button} appearance='outline' status='danger' onPress={navigateDetails}>DETAILS</Button>
              <Button style={styles.button} appearance='outline' status='danger' onPress={navigateEdit}>EDIT</Button>
              <Button style={styles.button} appearance='outline' status='danger' >DELETE</Button>
            </Layout>
          </Card>
        </Layout>



      </ScrollView>

    );

  }

}
export default Home;

<style>

</style>
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 500,
  },
  card: {
    margin: 8,

  },
  button: {
    margin: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',

  },
  text: {
    alignItems: 'center',
  },
  text1: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  }




});
