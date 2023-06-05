import React from 'react';
import DetailRow from './DetailRow';

export default function ASPDetailInfo({item}) {
    const {
        Name,
        Zulassungsnummer,
        MRDCCPNummer,
        Inhaber,
        Zulassungsdatum,
        Wirkstoff
    } = item;

    return (
        <React.Fragment>
            <DetailRow title={'Name'} value={Name}/>
            <DetailRow title={'Wirkstoff'} value={Wirkstoff}/>
            <DetailRow title={'Inhaber'} value={Inhaber}/>
            <DetailRow title={'Zulassungsnummer'} value={Zulassungsnummer || 'Keine Nummer vorhanden'}/>
            <DetailRow title={'MRDCCPNummer'} value={MRDCCPNummer || 'Keine Nummer vorhanden'}/>
            <DetailRow title={'Zulassungsdatum'} value={new Date(Zulassungsdatum).toLocaleDateString()}/>
        </React.Fragment>
    );
};
