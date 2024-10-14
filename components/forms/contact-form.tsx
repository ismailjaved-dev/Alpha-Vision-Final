"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(11, { message: "Phone number must be at least 11 characters long" }),
  reference: z.string().min(3, { message: "Please specify how you heard about us" }),
  message: z.string(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reference: "",
      message: ""
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    fetch('https://sheetdb.io/api/v1/20w7d7fl85k59', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: [{ ...data }] })
    })
    .then((response) => response.json())
    .then((result) => {

      toast({
        title: "Thank you for your form submission! We will get back to you shortly.",
      });

      form.reset();
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      toast({
        title: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4" id="contact-us">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-2 lg:col-span-1">
              <FormControl>
                <Input className="p-8" placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-2 lg:col-span-1">
              <FormControl>
                <Input className="p-8" placeholder="Your Phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2 lg:col-span-1">
              <FormControl>
                <Input className="p-8" placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reference"
          render={({ field }) => (
            <FormItem className="col-span-2 lg:col-span-1">
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="p-8">
                      <SelectValue placeholder="How Did You Hear About Us?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background">
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="Linkedin">Linkedin</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Textarea className="p-8" placeholder="Your Message" rows={8} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2 mt-8 flex justify-center">
          <button className="primaryBtn" type="submit">Submit</button>
        </div>
      </form>
    </Form>
  );
}
