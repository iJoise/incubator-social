import {v1} from "uuid";


const ADD_NEW_MESSAGE = 'social/dialog/ADD-NEW-MESSAGE';

const initialState: DialogsPageType = {
   dialogs: [
      {id: v1(), name: 'Polina', avatar: 'https://source.unsplash.com/user/aiony/150x150/'},
      {id: v1(), name: 'Ilya', avatar: 'https://source.unsplash.com/user/chrisjoelcampbell/150x150/'},
      {id: v1(), name: 'Nasty', avatar: 'https://source.unsplash.com/user/cikstefan/150x150/'},
      {id: v1(), name: 'Sasha', avatar: 'https://source.unsplash.com/user/romashilin/150x150/'},
      {id: v1(), name: 'Masha', avatar: 'https://source.unsplash.com/user/houcinencibphotography/150x150/'}
   ] as DialogsType[],
};

export const dialogReducer = (state = initialState, action: DialogActionsType): DialogsPageType => {
   switch (action.type) {

      default:
         return state;
   }
}

export const addMessageAC = (newMessage: string) => ({type: ADD_NEW_MESSAGE, newMessage} as const);

/**
 * type
 */
export type DialogActionsType = AddMessageActionType;
export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type DialogsType = {
   id: string
   name: string
   avatar: string
}
export type DialogsPageType = {
   dialogs: Array<DialogsType>
}