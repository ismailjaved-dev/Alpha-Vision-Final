"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "@/components/ui/use-toast"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(11),
  about: z.string().min(3),
  message: z.string().min(3),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      about: "",
      message: ""
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem className="col-span-2 lg:col-span-1">
              <FormControl>
                <Input className="p-8" placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({field}) => (
            <FormItem className="col-span-2 lg:col-span-1">
              <FormControl>
                <Input className="p-8" placeholder="Your Phone" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem className="col-span-2 lg:col-span-1">
              <FormControl>
                <Input className="p-8" placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="about"
          render={({field}) => (
            <FormItem className="col-span-2 lg:col-span-1">
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="p-8">
                      <SelectValue placeholder="How Did You Hear About Us?"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background">
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({field}) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Textarea className="p-8" placeholder="Your Message" rows={8} {...field} />
              </FormControl>
              <FormMessage/>
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
