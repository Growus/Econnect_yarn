import React, {useState} from 'react';
import * as P from '../styles/PostStyle';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../components/CustomButton';

const PostScreen = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleSubmit = () => {
    };

    return (
        <P.Screen>
            <P.ScrollView>
                <P.Container>
                    <P.PostImg/>
                    <P.Title>PLANT’S NAME</P.Title>
                    <P.InputBox
                        label="name"
                        placeholder="식물의 애칭을 입력해주세요."
                        value={name}
                        onChangeText={setName}
                    />
                    <P.TInputArea>
                        <P.Label>Type</P.Label>
                        <RNPickerSelect
                            onValueChange={setType}
                            items={[
                                { label: '테라코타', value: '테라코타' },
                                { label: '선인장', value: '선인장' },
                                { label: '양치식물', value: '양치식물' },
                            ]}
                            placeholder={{ label: '종류를 선택해주세요.', value: null }}
                            style={pickerSelectStyles}
                        />
                    </P.TInputArea>
                    <P.InputArea>
                        <P.Label>D-Day</P.Label>
                        <P.DateButton onPress={() => setShowDatePicker(true)}>
                            <P.DateText>{date.toDateString()}</P.DateText>
                        </P.DateButton>
                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                    </P.InputArea>
                    <CustomButton label='Register' onPress={handleSubmit}/>
                </P.Container>
            </P.ScrollView>
        </P.Screen>
    );
};

export default PostScreen;

export const pickerSelectStyles = {
    inputIOS: {
        width: 260,
        height: 44,
        fontSize: 14,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderColor: '#ccc',
        borderWidth: 1,
        color: '#333',
    },
    inputAndroid: {
        width: 260,
        height: 44,
        fontSize: 14,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderColor: '#ccc',
        borderWidth: 1,
        color: '#333',
    },
    placeholder: {
        color: '#888',
    },
};