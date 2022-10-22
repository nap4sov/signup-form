import { Mark } from '../styles';

const escapeRegExp = (str = '') =>
    str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');

export const highlightWords = ({ text, search }) => {
    const query = new RegExp(`(${escapeRegExp(search)})`, 'i');
    const parts = String(text).split(query);

    return parts.map((part, index) =>
        query.test(part) ? <Mark key={index}>{part}</Mark> : part,
    );
};
