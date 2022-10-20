import { useEditProfileInfo } from '../../hooks/profile';
import { SaveContainer } from './styles';

export const SaveButton = ({ id, form, setEditing }) => {
    const { mutate } = useEditProfileInfo(id);
    const onSubmit = editedData => {
        mutate(editedData);
        form.reset();
        setEditing(false);
    };
    return (
        <SaveContainer
            onClick={form.handleSubmit(onSubmit)}
            disabled={!form.formState.isDirty}
        >
            ✅
        </SaveContainer>
    );
};
