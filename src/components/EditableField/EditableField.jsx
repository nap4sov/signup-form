import { useRef } from 'react';
import { EditField } from './styles';

export const EditableField = ({ type, value, id, handleInputChange }) => {
    const element = useRef();

    return (
        <EditField
            id={id}
            contentEditable={true}
            ref={element}
            type={type}
            onKeyUp={handleInputChange}
            suppressContentEditableWarning
        >
            {value}
        </EditField>
    );
};
