import ContactUsForm from "@/components/ContactUsForm";

export default function Home() {
  return (
    <div className="bg-white py-10 sm:py-12 mx-2">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Schedule an Appointment</h1>
        <ContactUsForm/>
      </div>
    </div>
  );
}
