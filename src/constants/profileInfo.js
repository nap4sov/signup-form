import * as yup from 'yup';

const PROFILE_KEYS = {
    name: 'name',
    email: 'email',
    skills: 'skills',
    profession: 'profession',
    details: 'details',
    extraDetails: 'extra_details',
    date: 'dateCreated',
};

export const PROFILE_EDIT_DEFAULTS = {
    [PROFILE_KEYS.name]: '',
    [PROFILE_KEYS.skills]: '',
    [PROFILE_KEYS.profession]: '',
    [PROFILE_KEYS.details]: '',
    [PROFILE_KEYS.extraDetails]: '',
};

export const PROFILE_SCHEMA = yup.object().shape({
    [PROFILE_KEYS.name]: yup.string().required(),
    [PROFILE_KEYS.skills]: yup.string(),
    [PROFILE_KEYS.profession]: yup.string(),
    [PROFILE_KEYS.details]: yup.string(),
    [PROFILE_KEYS.extraDetails]: yup.string(),
});

export const PROFILE_FIELDS = [
    {
        key: PROFILE_KEYS.name,
        label: 'Username',
        type: 'title',
        editable: true,
    },
    {
        key: PROFILE_KEYS.email,
        label: 'Email',
        type: 'title',
    },
    {
        key: PROFILE_KEYS.skills,
        label: 'My skills',
        editable: true,
        defaultValue: '-',
    },
    {
        key: PROFILE_KEYS.profession,
        label: 'My profession',
        editable: true,
        defaultValue: '-',
    },
    {
        key: PROFILE_KEYS.details,
        label: 'Details',
        editable: true,
        defaultValue: '-',
    },
    {
        key: PROFILE_KEYS.extraDetails,
        label: 'Extra details',
        editable: true,
        defaultValue: '-',
    },
    {
        key: PROFILE_KEYS.date,
        label: 'Registered on',
        type: 'date',
        date: true,
    },
];
