import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../App';
import { getProfileInfo, editProfileInfo } from '../api/users/users';
import { USER_PROFILE } from '../constants/queryKeys';
import { PROFILE_FORM_CONFIG } from '../constants/profileFormConfig';

export const useProfileForm = () => useForm(PROFILE_FORM_CONFIG);

export const useGetProfileInfo = id =>
    useQuery([USER_PROFILE, id], () => getProfileInfo(id));

export const useEditProfileInfo = id =>
    useMutation(editedData => editProfileInfo({ id, editedData }), {
        onSuccess: () => queryClient.invalidateQueries([USER_PROFILE, id]),
    });
