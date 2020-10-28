import React from "react";
import { SafeAreaView, StyleSheet, Image, View, } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  Select,
  SelectItem,
  Card,
  IndexPath,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { useGet } from "../hooks/useGet";
export default function RepairDetail({ navigation, route }) {
  const repairId = route.params.id
  console.log("ID",repairId)
  const data = useGet(`/api/Repairs/${repairId}/`)
  console.log("detail",data)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Divider />
      
      <View style={styles.container}>
      
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
      <Card style={{ height:500, justifyContent: "center", alignItems: "center" }}> 


        <Image
          source={{ uri: data.imageBe }}
          style={{ flex: 1, height:100,width:250 }}
          resizeMode={"stretch"}
        />

          <Text        
          textStyle={{ minHeight: 70 }}
          label="ปัญหา/อาการ"                
        >ปัญหา/อาการ: {data.desc}
        </Text>
        
         <Text        
          textStyle={{ minHeight: 70 }}
          label="เบอร์โทรศัพท์"                
         >เบอร์โทรศัพท์: {data.contact}
         </Text> 
        
          <Text        
          textStyle={{ minHeight: 70 }}
          label="สถานะ"                
        >สถานะ: {data.status == 1
          ? "แจ้งซ่อม"
          : data.status == 2
          ? "รอดำเนินการ"
          : data.status == 3
          ? "ดำเนินการ"
          : data.status == 4
          ? "เสร็จสิ้น"
          : "ยกเลิก"}
        </Text>
          
          <Text        
          textStyle={{ minHeight: 70 }}
          label="วันที่แจ้งซ่อม"                
        >วันที่แจ้งซ่อม: {data.created_date}
        </Text>
          
          <Text        
          textStyle={{ minHeight: 70 }}
          label="วันที่อนุมัติ"                
        >วันที่อนุมัติ: {data.wait_date}
        </Text>
          
          <Text        
          textStyle={{ minHeight: 70 }}
          label="วันที่อนุมัติรายการ"                
        >วันที่อนุมัติรายการ: {data.approve_data}
        </Text>
          
          <Text        
          textStyle={{ minHeight: 70 }}
          label="วันที่แจ้งซ่อม"                
        >วันที่สิ้นสุด: {data.completed_data}
        </Text> 
          
          <Text        
          textStyle={{ minHeight: 70 }}
          label="หมายเหตุ"                
        >หมายเหตุ: {data.note}
        </Text>
         
          <Text        
          textStyle={{ minHeight: 70 }}
          label="ประเภท"                
        >ประเภท: {data.repair_type == 1
                 ? "ไฟฟ้า"
                 :data.repair_type == 2
                 ? "ประปา"
                :data.repair_type == 3
                ? "เฟอร์นิเจอร์"
                :"โครงสร้าง"}
        </Text>
          
          <Text        
          textStyle={{ minHeight: 70 }}
          label="หมายเลขห้อง"                
        >หมายเลขห้อง: {data.room}
        </Text>
         


       </Card> 
      </Layout>
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30, backgroundColor: 'white', minHeight: '100%' },
  textLine: { display: 'flex', flexDirection: 'row', marginBottom: 20, fontSize: 14 },
  label: { fontWeight: 'bold' },
  avatar: { width: '100%', height: 360, marginBottom: 20 },
})
