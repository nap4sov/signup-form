import { useRef } from 'react';
import { EditField } from './styles';

export const EditableField = ({
    type,
    value,
    id,
    editable,
    handleKeyUp,
    handleBlur,
    handleDoubleClick,
}) => {
    const element = useRef();

    return (
        <EditField
            id={id}
            contentEditable={editable}
            ref={element}
            type={type}
            onKeyUp={handleKeyUp}
            onBlur={handleBlur}
            onDoubleClick={handleDoubleClick}
            suppressContentEditableWarning
        >
            {value}
        </EditField>
    );
};
