import { useState } from 'react';
import { Wrapper } from './styles';
import { EditableField } from '../EditableField/EditableField';
import { highlightWords } from '../../helpers/highlightWords';

export const HighlightEditable = () => {
    const [search, setSearch] = useState('');
    const [text, setText] = useState('');

    const handleInputChange = ({ target }) => {
        setText(target.textContent);
    };

    const handleDoubleClick = () => {
        const selection = document.getSelection();
        setSearch(selection.toString());
    };

    return (
        <Wrapper>
            <button
                onClick={() => {
                    setText('');
                    setSearch('');
                }}
            >
                clear
            </button>

            <EditableField
                type="plain"
                handleInputChange={handleInputChange}
                handleDoubleClick={handleDoubleClick}
                value={search ? highlightWords({ text, search }) : text}
            />
        </Wrapper>
    );
};
