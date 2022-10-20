import { yupResolver } from '@hookform/resolvers/yup';
import {
    PROFILE_EDIT_DEFAULTS,
    PROFILE_SCHEMA,
} from '../constants/profileInfo';

export const PROFILE_FORM_CONFIG = {
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: PROFILE_EDIT_DEFAULTS,
    resolver: yupResolver(PROFILE_SCHEMA),
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
};
