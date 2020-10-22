import React, { useRef, useEffect} from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Icon,
  Layout,
  List,
  TopNavigation,
  TopNavigationAction,
  Divider,
} from "@ui-kitten/components";
import { Repair } from "../components/Repair";
import { useGet } from "../hooks/useGet";
export default function RepairList({ navigation }) {
  const pulseIconRef = useRef();
  useEffect(() => {
    pulseIconRef.current.startAnimation();
  }, []);
  const AddIcon = (props) => (
    <Icon
      {...props}
      ref={pulseIconRef}
      animationConfig={{ cycles: Infinity }}
      animation="pulse"
      name="plus-outline"
    />
  );
  const renderAddAction = () => <TopNavigationAction icon={AddIcon} onPress={() => {
    navigation.navigate('RepairCreate')
  }}/>;
  const repairs = useGet("/api/Repairs");
  function renderItem({ item: repair }) {
    return <Repair repair={repair} onPress={() => {
      navigation.navigate('RepairDetail',{id: repair.id})
    }} />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Eva Application"
        alignment="center"
        accessoryRight={renderAddAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <List
          data={repairs}
          renderItem={renderItem}
          keyExtractor={(repair) => `${repair.id}`}
        />
      </Layout>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
    // paddingVertical: 8,
    marginHorizontal: 8,
  },
  card: {
    marginVertical: 10,
  },
});
