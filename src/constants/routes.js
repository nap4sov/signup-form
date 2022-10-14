import { Navigate } from 'react-router-dom';
import { SignupForm, Posts, Profile, Users } from '../layout';

export const ROUTES = {
    posts: '/posts',
    postDetails: '/posts/:id',
    users: '/users',
    myProfile: '/profile',
    signup: '/signup',
};

export const NAVIGATION_ROUTES = {
    home: {
        path: ROUTES.posts,
        label: 'Home',
    },
    users: {
        path: ROUTES.users,
        label: 'Users',
    },
    myProfile: {
        path: ROUTES.myProfile,
        label: 'My profile',
    },
};

export const LAYOUT_ROUTES = {
    home: {
        path: '/',
        element: () => <Navigate to={ROUTES.posts} />,
        restricted: false,
    },
    posts: {
        path: ROUTES.posts,
        element: () => <Posts all />,
        restricted: false,
    },
    postDetails: {
        path: ROUTES.postDetails,
        element: () => <Posts />,
        restricted: false,
    },
    users: {
        path: ROUTES.users,
        element: () => <Users />,
        restricted: false,
    },
    myProfile: {
        path: ROUTES.myProfile,
        element: () => <Profile />,
        restricted: true,
    },
    signup: {
        path: ROUTES.signup,
        element: () => <SignupForm />,
        restricted: false,
    },
};