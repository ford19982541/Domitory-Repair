import React from "react";
import { SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {
  Button,
  Layout,
  Text,
  Card
} from "@ui-kitten/components";

export default ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate('RepairCreate')}>Add Repair</Button>
      <Button onPress={() => navigation.navigate('RepairDetail')}>OPEN DETAILS</Button>
    </Layout> */}
    <ScrollView style={{ flex: 1 }}>
        <Layout style={{ flex: 1, padding: 5, alignItems: "center" }}>
          <Button style={styles.button1} status='primary' onPress={() => navigation.navigate('RepairCreate')}>แจ้งซ่อม</Button>

          <Card style={styles.card} status='warning'>
            <Text style={styles.text} category='h2' status='warning'>แจ้งซ่อม</Text>
            <Text style={styles.text} category='h5'>แจ้งซ่อมไฟฟ้า</Text>
            <Layout style={styles.text1} level='1'>
              <Text style={styles.text} category='s2'>พัดลมไม่หมุน</Text>
              <Text style={styles.text} category='s2'>  09/10/2563</Text>
            </Layout>
            <Layout style={styles.button} level='1'>
              <Button style={styles.button} appearance='outline' status='warning' onPress={() => navigation.navigate('RepairDetail')}>DETAILS</Button>
              <Button style={styles.button} appearance='outline' status='warning' onPress={() => navigation.navigate('RepairEdit')}>EDIT</Button>
              <Button style={styles.button} appearance='outline' status='warning' >DELETE</Button>
            </Layout>
          </Card>
          {/* <Card style={styles.card} status='primary'>
            <Text style={styles.text} category='h2' status='primary'>กำลังดำเนินการ</Text>
            <Text style={styles.text} category='h5'>แจ้งซ่อมประปา</Text>
            <Layout style={styles.text1} level='1'>
              <Text style={styles.text} category='s2'>น้ำไม่ไหล</Text>
              <Text style={styles.text} category='s2'></Text>
            </Layout>
            <Layout style={styles.button} level='1'>
              <Button style={styles.button} appearance='outline' onPress={() => navigation.navigate('RepairDetail')}>DETAILS</Button>
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
              <Button style={styles.button} appearance='outline' status='success' onPress={() => navigation.navigate('RepairDetail')}>DETAILS</Button>
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
              <Button style={styles.button} appearance='outline' status='danger' onPress={() => navigation.navigate('RepairDetail')}>DETAILS</Button>
              <Button style={styles.button} appearance='outline' status='danger' onPress={navigateEdit}>EDIT</Button>
              <Button style={styles.button} appearance='outline' status='danger' >DELETE</Button>
            </Layout>
          </Card> */}
        </Layout>



      </ScrollView>

  </SafeAreaView>
  
);
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
