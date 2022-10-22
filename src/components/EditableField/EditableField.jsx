import { useRef } from 'react';
import { EditField } from './styles';

export const EditableField = ({
    type,
    value,
    id,
    handleKeyUp,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleDoubleClick,
}) => {
    const element = useRef();

    return (
        <EditField
            id={id}
            contentEditable
            ref={element}
            type={type}
            onKeyUp={handleKeyUp}
            onInput={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onDoubleClick={handleDoubleClick}
            suppressContentEditableWarning
        >
            {value}
        </EditField>
    );
};
