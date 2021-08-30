import React from "react";
import s from "./ProfileModal.module.scss";
import {Modal} from "../../../common/Modal/Modal";
import {InputField} from "../../../common/InputField/InputField";
import {Field, Form, Formik} from "formik";
import Checkbox from "../../../common/Checkbox/Checkbox";
import {ProfileUpdateType} from "../../../../api/api";
import {UserProfileType} from "../../../../redux/profile-reducer";

type ProfileModalPropsType = {
   modalActive: boolean
   setModalActive: (value: boolean) => void
   saveProfile: (data: ProfileUpdateType) => void
   profile: UserProfileType
}

interface MyFormValues {
   AboutMe: string
   fullName: string
   github: string
   vk: string
   facebook: string
   instagram: string
   twitter: string
   youtube: string
   mainLink: string
   lookingForAJob: boolean
   lookingForAJobDescription: string
}

export const ProfileModal: React.FC<ProfileModalPropsType> = ({modalActive, setModalActive, saveProfile, profile}) => {

   const {userId} = profile

   const initialValues: MyFormValues = {
      fullName: profile.fullName,
      AboutMe: profile.aboutMe,
      github: profile.contacts.github || '',
      vk: profile.contacts.vk || '',
      facebook: profile.contacts.facebook || '',
      instagram: profile.contacts.instagram || '',
      twitter: profile.contacts.twitter || '',
      youtube: profile.contacts.youtube || '',
      mainLink: profile.contacts.mainLink || '',
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription || '',
   };

   return (
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
         <h2 style={{textAlign: 'center', padding: 20}}>Edit profile info</h2>
         <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
               const {fullName, lookingForAJob, lookingForAJobDescription, AboutMe, ...contacts} = values
               const formData = {
                  fullName,
                  AboutMe,
                  lookingForAJob,
                  lookingForAJobDescription,
                  userId,
                  contacts
               }
               saveProfile(formData)
               actions.setSubmitting(false);
               setModalActive(false)
               actions.resetForm({
                  values: {
                     ...initialValues
                  }
               })
            }}
         >
            {({
                 isSubmitting,
                 handleChange,
                 values,
                 handleSubmit,
              }) => (
               <Form onSubmit={handleSubmit}>
                  <Field id='fullName' value={values.fullName} onChange={handleChange} name="fullName" type='text'
                         component={InputField} label='Name'/>
                  <Field id='AboutMe' value={values.AboutMe} onChange={handleChange} name="AboutMe" type='text'
                         component={InputField} label='About Me'/>
                  <Field id='lookingForAJobDescription' value={values.lookingForAJobDescription} onChange={handleChange}
                         name="lookingForAJobDescription" type='text' component={InputField} label='Description job'/>
                  <Field id='github' value={values.github} onChange={handleChange} name="github" type='text'
                         component={InputField} label='GitHub'/>
                  <Field id='facebook' value={values.facebook} onChange={handleChange} name="facebook" type='text'
                         component={InputField} label='Facebook'/>
                  <Field id='instagram' value={values.instagram} onChange={handleChange} name="instagram" type='text'
                         component={InputField} label='Instagram'/>
                  <Field id='twitter' value={values.twitter} onChange={handleChange} name="twitter" type='text'
                         component={InputField} label='Twitter'/>
                  <Field id='vk' value={values.vk} onChange={handleChange} name="vk" type='text'
                         component={InputField} label='VK'/>
                  <Field id='youtube' value={values.youtube} onChange={handleChange} name="youtube" type='text'
                         component={InputField} label='YouTube'/>
                  <Field id='mainLink' value={values.mainLink} onChange={handleChange} name="mainLink" type='text'
                         component={InputField} label='Website'/>
                  <Field id='lookingForAJob' value={values.lookingForAJob} onChange={handleChange} name='lookingForAJob'
                         type='checkbox' component={Checkbox}>Find Job?</Field>
                  <button disabled={isSubmitting} className={s.btn} type="submit">Submit</button>
               </Form>
            )}
         </Formik>
      </Modal>
   )
}
