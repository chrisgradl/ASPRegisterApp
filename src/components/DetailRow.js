import React from 'react';
import {Divider, Paragraph, Subheading} from 'react-native-paper';

const DetailRow = ({title, value}) => {
    return (
        <React.Fragment>
            <Subheading>{title}</Subheading>
            <Paragraph>{value}</Paragraph>
            <Divider/>
        </React.Fragment>
    );
};

export default DetailRow;
