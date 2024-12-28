import { JSONFormat, XMLFormat } from '../strategies/formatStrategy';

const formatData = (data: any, formatType: 'json' | 'xml') => {
    const formatter = formatType === 'json' ? new JSONFormat() : new XMLFormat();
    return formatter.format(data);
};
