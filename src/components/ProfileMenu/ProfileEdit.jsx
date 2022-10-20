// hooks
import { useEffect } from 'react';
// styled components
import { Wrapper, Input, Label, InputField } from './styles';
// constants
import { PROFILE_FIELDS } from '../../constants/profileInfo';
// helpers
import { validateProfileEdit } from '../../helpers/validation';

export const ProfileEdit = ({
    userData,
    form: { formState, register, reset },
}) => {
    useEffect(() => {
        if (userData) reset(validateProfileEdit(userData));
    }, [userData, reset]);

    return (
        <Wrapper type="form">
            {PROFILE_FIELDS.map(({ key, editable, label }) =>
                editable ? (
                    <InputField key={key} hasError={formState.errors[key]}>
                        <Input {...register(key)} />
                        <Label>
                            {formState.errors[key]
                                ? formState.errors[key].message
                                : label}
                        </Label>
                    </InputField>
                ) : (
                    ''
                ),
            )}
        </Wrapper>
    );
};
