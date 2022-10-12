import { register } from './users';
import { login, getCurrent } from './auth';

const userApi = { register, login, getCurrent };

export default userApi;
