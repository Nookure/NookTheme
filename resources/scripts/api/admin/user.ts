import http, { QueryBuilderParams, withQueryBuilderParams } from '@/api/http';
import Transformers from '@definitions/admin/transformers';
import { User } from '@definitions/admin/models';

export const getUser = async (id: string | number): Promise<User> => {
    const { data } = await http.get(`/api/application/users/${id}`);

    return Transformers.toUser(data.data);
};

export const searchUserAccounts = async (params: QueryBuilderParams<'username' | 'email'>): Promise<User[]> => {
    const { data } = await http.get('/api/application/users', {
        params: withQueryBuilderParams(params),
    });

    return data.data.map(Transformers.toUser);
};
