
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { auth, firestore } from 'firebase';

export function Exercises() {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [exercises, setExercises] = useState([]) as any; // Initial empty array of exercises

    useEffect(() => {
        const subscriber = firestore()
            .collection('users').doc(auth().currentUser?.uid).collection('exercises')
            .onSnapshot(querySnapshot => {
                const exercises: Exercise[] = [];

                querySnapshot.forEach(doc => {
                    const { name, highIntensityMinutes, highIntensitySeconds, lowIntensityMinutes, lowIntensitySeconds, reps } = doc.data();
                    exercises.push({
                        id: doc.id,
                        name,
                        highIntensityMinutes,
                        highIntensitySeconds,
                        lowIntensityMinutes,
                        lowIntensitySeconds,
                        reps,
                    });
                });

                setExercises(exercises);
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    

    return exercises;

}



