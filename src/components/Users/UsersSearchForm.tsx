import React from "react";
import s from "./Users.module.scss";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";



type UsersSearchFormPropsType = {
   onFilterChanged: (filter: FilterType) => void
}

type FormType = {
   term: string
   friend: FriendFormType
}
type FriendFormType = 'null' | 'true' | 'false'


export const UsersSearchForm: React.FC<UsersSearchFormPropsType> = (props) => {
   const {onFilterChanged} = props;

   const filter = useSelector<AppStateType, FilterType>(state => state.usersPage.filter);

   const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
      const filter: FilterType = {
         term: values.term,
         friend: values.friend === 'null' ? null : values.friend === 'true'
      }
      onFilterChanged(filter);
      setSubmitting(false);
   };

   return <>
      <div className={s.searchUsers}>
         <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
            onSubmit={submit}
         >
            {({isSubmitting}) => (
               <Form>
                  <Field type="text" name="term" className={s.find}/>
                  <Field name="friend" as="select">
                     <option value="null">All</option>
                     <option value="true">Only followed</option>
                     <option value="false">Only Unfollowed</option>
                  </Field>
                  <button type="submit" disabled={isSubmitting} className={s.btn}>
                     Find
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   </>
}