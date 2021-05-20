import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import firebase from '../../database/firebase';
import SingleLog from './SingleLog';
import FoodCard from './FoodCard';

const LogScreen = () => {

    return (
        <ScrollView>
            <View>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});






export default LogScreen;