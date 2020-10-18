import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Button} from "@ui-kitten/components";
export function Icons({name, pack, status}) {
    return (
        <Icon name={name} pack={pack} status={status}/>
    );
  }
  const styles = StyleSheet.create({
    container: {},
  });