import { Resend } from "resend";
import { NextRequest,NextResponse } from "next/server";
import EmailMessage from "@/components/EmailMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:NextRequest) {
    const {firstName,lastName,age,mobileNumber,email,doctor,date,time,gender,message} = await req.json();

    try{
        const data = await resend.emails.send({
            from : '', //your verified domain
            to : '', //the email address you want to send a message 
            subject : '', //email subject
            react : EmailMessage({firstName,lastName,age,mobileNumber,email,doctor,date,time,gender,message})
        })

        return NextResponse.json(data)
    }catch(error){
        console.log(error)
    }
}