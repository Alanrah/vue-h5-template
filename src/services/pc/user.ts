import { request } from '../axios';

export async function deleteUser (params: any) {
    const res: any = await request.delete<any, BaseDataResponse<any>>(`/api/1.0/user/${params.id}`);
    return res;
}

export async function restoreUser (params: any) {
    const res: any = await request.get<any, BaseDataResponse<any>>(`/api/1.0/user/restore/${params.id}`);
    return res;
}

export async function editUser (id: string, params: any) {
    const res: any = await request.put<any, BaseDataResponse<any>>(`/api/1.0/user/${id}`, params);
    return res;
}
