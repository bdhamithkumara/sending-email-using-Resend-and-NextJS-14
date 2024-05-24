'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ErrorMessage } from "@hookform/error-message"

type FormInput = {
    firstName : string;
    lastName : string;
    age : number;
    mobileNumber : string;
    email : string;
    doctor : string;
    date : string;
    time : string;
    gender : string;
    message : string;
    agree : string;
}

export default function ContactUsForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset} = useForm<FormInput>()
    
    async function onSubmit(formData:FormInput) {
        await fetch('/api/send',{
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json',
          },

          body : JSON.stringify({
            firstName : formData.firstName,
            lastName : formData.lastName,
            age : formData.age,
            mobileNumber : formData.mobileNumber,
            email : formData.email,
            doctor : formData.doctor,
            date : formData.date,
            time : formData.time,
            gender : formData.gender,
            message : formData.message,
            agree : formData.agree
          })
        }).then(()=> {
          toast.success('Your appointment has been sent successfully')
        })
       
        reset();
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="space-y-12">

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div className="sm:col-span-3">
          <label className="block text-start text-sm font-medium leading-6 text-gray-900">First name</label>
          <div className="mt-2">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            {...register('firstName',{required:true})}/>
          </div>
        </div>
        
        
        <div className="sm:col-span-3">
          <label className="block text-start text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div className="mt-2">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
             {...register('lastName',{required:true})}/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-start text-sm font-medium leading-6 text-gray-900">Age</label>
          <div className="mt-2">
            <input type="number"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            {...register('age',{required:true,min:1,max:99})}/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-start text-sm font-medium leading-6 text-gray-900">Mobile number</label>
          <div className="mt-2">
            <input type="tel" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            {...register("mobileNumber", {required: true, minLength: 10, maxLength: 15})}/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-start text-sm font-medium leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm text-start font-medium leading-6 text-gray-900">Doctor</label>
          <div className="mt-2">
            <select  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"  {...register("doctor", { required: true })}>
              <option value="">Select a doctor</option>
              <option value="dr-smith">Dr. John Smith</option>
              <option value="dr-johnson">Dr. Sarah Johnson</option>
              <option value="dr-lee">Dr. Michael Lee</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-start text-sm font-medium leading-6 text-gray-900">Date</label>
          <div className="mt-2">
            <input type="date" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            {...register("date", {required: true})}/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-start text-sm font-medium leading-6 text-gray-900">Time</label>
          <div className="mt-2">
            <input type="time"  autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
             {...register("time", {required: true})}/>
          </div>
        </div>

      </div>

      <div className="border-b border-gray-900/10 pb-8">
        <div className="space-y-10">
          <fieldset>
            <div className="flex gap-5">
            <label className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
              <div className="flex items-center gap-x-3">
                <input type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value="male" {...register("gender", { required: true })}/>
                <label className="block text-sm  leading-6 text-gray-900">Male</label>
              </div>
              <div className="flex items-center gap-x-3">
                <input type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value="female" {...register("gender", { required: true })}/>
                <label className="block text-sm  leading-6 text-gray-900">Female</label>
              </div>
            </div>
          </fieldset>
        </div>
      

        <div className="my-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label className="block text-start text-sm font-medium leading-6 text-gray-900">Message</label>
            <div className="mt-2">
              <textarea rows={5} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("message", { required: true })}/>
            </div>
          </div>
        </div>

        <fieldset >
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" {...register("agree", {required: true})}/>
            </div>
            <div className="text-sm leading-6">
              <span className=" text-gray-900 text-start"> I agree to the <span className="font-medium">terms</span> and <span className="font-medium">conditions</span></span>
            </div>
          </div>
        </fieldset>
      </div>
    </div>

    <div className="mt-6 flex items-center ">
      <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Schedule Appointment</button>
    </div>
  </form>
  )
}
