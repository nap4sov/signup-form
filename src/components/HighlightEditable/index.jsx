import { useState } from 'react';
import { Wrapper } from './styles';
import { EditableField } from '../EditableField/EditableField';
import { highlightWords } from '../../helpers/highlightWords';

export const HighlightEditable = () => {
    const [search, setSearch] = useState('');
    const [text, setText] = useState('');
    const [editable, setEditable] = useState(true);

    const handleBlur = ({ target }) => {
        setText(target.textContent);
        setEditable(false);
    };

    const handleDoubleClick = ({ target }) => {
        if (!text) setText(target.textContent);
        const selection = document.getSelection();
        setSearch(selection.toString());
        setEditable(false);
    };

    const handleResetClick = () => {
        setText('');
        setSearch('');
        setEditable(true);
    };

    return (
        <Wrapper>
            <button onClick={handleResetClick}>Reset</button>

            <EditableField
                type="plain"
                editable={editable}
                handleDoubleClick={handleDoubleClick}
                handleBlur={handleBlur}
                value={search ? highlightWords({ text, search }) : text}
            />
        </Wrapper>
    );
};
