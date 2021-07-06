import axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '3928f52f-fe0d-4ea9-97d7-8b764f267e74'
   },
});

export const usersAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data);
   },
   unfollowUsers(id: number) {
      return instance.delete(`follow/${id}`)
         .then(response => response.data)
   },
   followUsers(id: number) {
      return instance.post(`follow/${id}`, {})
         .then(response => response.data)
   },
   getProfile(id: number) {
      return instance.get(`profile/${id}`)
         .then(response => response.data)
   },
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
         .then(response => response.data)
   },
}

