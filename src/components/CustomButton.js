import { Fragment, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CustomButton = ({texto}) => {

    const [text, setText] = useState('nope');

    useEffect(() => {   
        console.log('t');
    }, []);


    return (
        <Fragment>
            <Button title={text} onPress={(e) => setText('teste')}>Teste</Button>
        </Fragment>
    )
}

export default CustomButton;