import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/raeqjora", { name: data.name, email: data.email, message: data.message });
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const Err = ({ e }) => e && <span className="mt-1 text-sm text-red-400">This field is required</span>;

  return (
    <section name="Contact" className="sec">
      <div className="wrap">
        <h2 className="h2">Contact me</h2>
        <p className="mb-8 text-slate-400">Please fill out the form below to Contact me, or email vivekkumarsharma6388@gmail.com</p>
        <form onSubmit={handleSubmit(onSubmit)} className="panel mx-auto max-w-xl space-y-5">
          <h3 className="font-display text-2xl font-extrabold text-white">Send Your Message</h3>
          <label className="flex flex-col gap-2 text-sm text-slate-300">FullName
            <input {...register("name", { required: true })} className="field" type="text" placeholder="Enter your fullname" />
            <Err e={errors.name} />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-300">Email Address
            <input {...register("email", { required: true })} className="field" type="text" placeholder="Enter your email address" />
            <Err e={errors.email} />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-300">Message
            <textarea {...register("message", { required: true })} rows={5} className="field" placeholder="Enter your Query" />
            <Err e={errors.message} />
          </label>
          <button type="submit" className="btn w-full">Send</button>
        </form>
      </div>
    </section>
  );
}
