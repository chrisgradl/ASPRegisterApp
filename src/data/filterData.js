const testData = [
    {
        'id': 1,
        'Name': 'A. Moll\'s Abführdragees',
        'Typ': 'Arzneispezialität',
        'Bezeichnung': 'A. Moll\'s Abführdragees',
        'Zulassungsnummer': '5-02282',
        'MRDCCPNummer': '',
        'Inhaber': 'Apotheke Zum weißen Storch, Tuchlauben 9, 1010 Wien, Österreich',
        'Zulassungsdatum': '1998-02-10',
        'Wirkstoff': 'DIMETICON; BISACODYL',
    },
    {
        'id': 2,
        'Name': 'Abacavir/Lamivudin Mylan Pharma 600 mg/300 mg Filmtabletten',
        'Typ': 'Arzneispezialität',
        'Bezeichnung': 'Abacavir/Lamivudin Mylan Pharma 600 mg/300 mg Filmtabletten',
        'Zulassungsnummer': '137907',
        'MRDCCPNummer': 'AT/H/0920/001',
        'Inhaber': 'Arcana Arzneimittel GmbH, Hütteldorfer Straße 299, 1140 Wien, Österreich',
        'Zulassungsdatum': '2017-09-26',
        'Wirkstoff': 'ABACAVIR HEMISULFAT; LAMIVUDIN',
    },
    {
        'id': 3,
        'Name': 'Abacavir/Lamivudin ratiopharm 600 mg/300 mg Filmtabletten',
        'Typ': 'Arzneispezialität',
        'Bezeichnung': 'Abacavir/Lamivudin ratiopharm 600 mg/300 mg Filmtabletten',
        'Zulassungsnummer': '136981',
        'MRDCCPNummer': 'DE/H/4343/001',
        'Inhaber': 'Teva B.V., Swensweg 5, 2031 GA Haarlem, Niederlande',
        'Zulassungsdatum': '2016-06-30',
        'Wirkstoff': 'LAMIVUDIN; ABACAVIR',
    },
    {
        'id': 4,
        'Name': 'Abacavir/Lamivudin Sandoz 600 mg/300 mg - Filmtabletten',
        'Typ': 'Arzneispezialität',
        'Bezeichnung': 'Abacavir/Lamivudin Sandoz 600 mg/300 mg - Filmtabletten',
        'Zulassungsnummer': '137111',
        'MRDCCPNummer': 'NL/H/4318/001',
        'Inhaber': 'Sandoz GmbH, Biochemiestraße 10, 6250 Kundl, Österreich',
        'Zulassungsdatum': '2016-08-16',
        'Wirkstoff': 'LAMIVUDIN; ABACAVIRHYDROCHLORID MONOHYDRAT',
    },
    {
        'id': 5,
        'Name': 'Abacavir/Lamivudin STADA 600 mg/300 mg Filmtabletten',
        'Typ': 'Arzneispezialität',
        'Bezeichnung': 'Abacavir/Lamivudin STADA 600 mg/300 mg Filmtabletten',
        'Zulassungsnummer': '136866',
        'MRDCCPNummer': 'FI/H/1120/001',
        'Inhaber': 'STADA Arzneimittel GmbH, Muthgasse 36/2, 1190 Wien, Österreich',
        'Zulassungsdatum': '2016-04-12',
        'Wirkstoff': 'ABACAVIR; LAMIVUDIN',
    },
    {
        'id': 6,
        'Name': 'ABASAGLAR 100 Einheiten/ml Injektionslösung in einem Fertigpen',
        'Typ': 'Arzneispezialität',
        'Bezeichnung': 'ABASAGLAR 100 Einheiten/ml Injektionslösung in einem Fertigpen',
        'Zulassungsnummer': 'EU/1/14/944/005-008,010-013',
        'MRDCCPNummer': 'EMEA/H/C/002835',
        'Inhaber': 'Eli Lilly Nederland B.V., Papendorpseweg 83, 3528 BJ Utrecht, Niederlande',
        'Zulassungsdatum': '2014-09-09',
        'Wirkstoff': 'INSULIN GLARGIN',
    },
    {
        'id': 7,
        'Name': 'ABASAGLAR 100 Einheiten/ml Injektionslösung in einer Patrone',
        'Typ': 'Arzneispezialität',
        'Bezeichnung': 'ABASAGLAR 100 Einheiten/ml Injektionslösung in einer Patrone',
        'Zulassungsnummer': 'EU/1/14/944/001-004,009',
        'MRDCCPNummer': 'EMEA/H/C/002835',
        'Inhaber': 'Eli Lilly Nederland B.V., Papendorpseweg 83, 3528 BJ Utrecht, Niederlande',
        'Zulassungsdatum': '2014-09-09',
        'Wirkstoff': 'INSULIN GLARGIN',
    },
    {
        'id': 8,
        'Name': 'Abatixent 2,5 mg – Filmtabletten',
        'Typ': 'Arzneispezialität',
        'Bezeichnung': 'Abatixent 2,5 mg – Filmtabletten',
        'Zulassungsnummer': '140837',
        'MRDCCPNummer': 'NL/H/5036/001',
        'Inhaber': 'Sandoz GmbH, Biochemiestraße 10, 6250 Kundl, Österreich',
        'Zulassungsdatum': '2021-09-29 14:31:09.0',
        'Wirkstoff': 'APIXABAN',
    },
]

let data;

const setData = () => {
    if (__DEV__) {
        data = testData;
    } else {
        data = require('./data.json');
    }
};

setData();

export function filterData(searchText) {
    if (searchText?.length > 1) {
        return data.filter(item => item.Name.includes(searchText));
    }
    return data;
}

export function findDataByWirkstoff(searchText) {
    return data.filter(item => item.Wirkstoff === searchText);
}
