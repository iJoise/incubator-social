import axios from "axios";
import {AuthDataType} from "../redux/auth-reducer";
import {PhotosType, UsersType} from "../redux/users-reducer";
import {ContactsType, UserProfileType} from "../redux/profile-reducer";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '3928f52f-fe0d-4ea9-97d7-8b764f267e74'
   },
});


export const usersAPI = {
   async getUsers(currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null) {
      const response = await instance.get<ResponseUserType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`));
      return response.data;
   },
   async unfollowUsers(id: number) {
      const response = await instance.delete<ResponseType>(`follow/${id}`);
      return response.data;
   },
   async followUsers(id: number) {
      const response = await instance.post<ResponseType>(`follow/${id}`);
      return response.data;
   },
}

export const authAPI = {
   async me() {
      const response = await instance.get<ResponseType<AuthDataType>>(`auth/me`);
      return response.data;
   },
   async login(email: string, password: string, rememberMe: boolean = false) {
      const payload = {email, password, rememberMe};
      const response = await instance.post<ResponseType<{ userId: number }>>('auth/login', payload);
      return response.data;
   },
   async logout() {
      const response =  await instance.delete<ResponseType>('auth/login');
      return response.data
   }
}

export const profileAPI = {
   async getProfile(id: number) {
      const response = await instance.get<UserProfileType>(`profile/${id}`);
         return response.data;
   },
   async getStatus(id: number) {
      const response = await instance.get<string>(`profile/status/${id}`);
      return response.data
   },
   async updateStatus(status: string) {
      const response = await instance.put<ResponseType>(`profile/status`, {status});
      return response.data
   },
   async savePhoto(photo: File) {
      const formData = new FormData()
      formData.append('image', photo)
      const response = await instance.put<ResponseType<{photos: PhotosType}>>(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
      return response.data
   },
   async saveProfile(formData: ProfileUpdateType) {
      const response = await instance.put<ResponseType>(`profile`, formData)
      return response.data
   }
}

export type ResponseType<D = {}> = {
   fieldsErrors: string[]
   resultCode: number
   messages: string[]
   data: D
}
type ResponseUserType = {
   error: string | null
   items: UsersType[]
   totalCount: number
}

export type ProfileUpdateType = {
   contacts: ContactsType
   lookingForAJob: boolean
   lookingForAJobDescription: string | null
   fullName: string
   userId: number
   AboutMe: string
}