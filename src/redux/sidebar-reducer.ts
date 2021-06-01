import {ActionType} from "./state";
import {v1} from "uuid";


export type FriendsType = {
   id: string
   name: string
   avatar: string
}
export type SidebarType = {
   friends: Array<FriendsType>
}

const initialState: SidebarType =  {
   friends: [
      {id: v1(), name: 'Polina', avatar: 'https://source.unsplash.com/user/aiony/150x150/'},
      {id: v1(), name: 'Ilya', avatar: 'https://source.unsplash.com/user/chrisjoelcampbell/150x150/'},
      {id: v1(), name: 'Nasty', avatar: 'https://source.unsplash.com/user/cikstefan/150x150/'},
      {id: v1(), name: 'Sasha', avatar: 'https://source.unsplash.com/user/romashilin/150x150/'},
      {id: v1(), name: 'Masha', avatar: 'https://source.unsplash.com/user/houcinencibphotography/150x150/'}
   ] as FriendsType[]
};

export const sidebarReducer = (state = initialState, action: ActionType) => {
   return state;
}
