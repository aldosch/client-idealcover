// prettier-ignore
"use client"

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui";

const phonePattern =
  /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "Please enter your first name")
    .max(
      64,
      "Sorry this is a bit too long. Please enter a shorter name and we can correct it later"
    ),
  lastName: z
    .string()
    .min(1, "Please enter your last name")
    .max(
      64,
      "Sorry this is a bit too long, please enter a shorter name and we can correct it later"
    ),
  phone: z
    .string()
    .min(6, "Please enter a valid phone number like 0412345678")
    .max(
      10,
      "This number looks a bit too long. Please enter a valid phone number like 0412345678"
    )
    .regex(
      phonePattern,
      "That doesn't look quite right. Please enter a valid phone number like 0412345678"
    ),
  email: z
    .string()
    .min(4, "Please enter your email address")
    .email("That doesn't look quite right. Please enter a valid email address"),
  state: z.string(),
  age: z
    .number()
    .min(18, "Please enter an age above 18 years old")
    .max(112, "Impressive! Are you sure you're that old?"),
  smoker: z.enum(["Yes", "No"]),
  occupation: z
    .string()
    .min(1, "Please enter your occupation")
    .max(
      256,
      "Sorry this is a bit too long. Please enter something shorter and we can correct it later"
    ),
  income: z.string(),
  coverAmount: z.string(),
});

type Props = {};

function QuoteForm({}: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    // unsure why this is throwing a type error
    // copied from shadcn example
    // @ts-ignore
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   firstName: "",
    //   lastName: "",
    //   phone: "",
    //   email: "",
    //   smoker: "No",
    //   occupation: "",
    // },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("submit");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="z-0 space-y-8">
        <div className="md:flex-row flex flex-col gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex-row flex flex-col gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="0400000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex-row flex flex-col gap-4">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>State or Territory</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ACT">ACT</SelectItem>
                      <SelectItem value="NSW">NSW</SelectItem>
                      <SelectItem value="NT">NT</SelectItem>
                      <SelectItem value="QLD">QLD</SelectItem>
                      <SelectItem value="SA">SA</SelectItem>
                      <SelectItem value="TAS">TAS</SelectItem>
                      <SelectItem value="VIC">VIC</SelectItem>
                      <SelectItem value="WA">WA</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:block hidden w-full"></div>
        </div>
        <div>
          <FormField
            control={form.control}
            name="smoker"
            render={({ field }) => (
              <FormItem className="w-full ml-1">
                <FormLabel>Are you a smoker?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="No"
                    className="flex gap-8"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="No" id="smoker-no" />
                      </FormControl>
                      <FormLabel htmlFor="smoker-no">No</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="Yes" id="smoker-yes" />
                      </FormControl>
                      <Label htmlFor="smoker-yes">Yes</Label>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex-row flex flex-col gap-4">
          <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Occupation</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="income"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Annual income</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Annual income" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under $100k">Under $100k</SelectItem>
                      <SelectItem value="$100k+">$100k+</SelectItem>
                      <SelectItem value="$250k+">$250k+</SelectItem>
                      <SelectItem value="$500k+">$500k+</SelectItem>
                      <SelectItem value="$750k+">$750k+</SelectItem>
                      <SelectItem value="$1M+">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex-row flex flex-col gap-4">
          <FormField
            control={form.control}
            name="coverAmount"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Cover amount</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Cover amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under $100k">Under $100k</SelectItem>
                      <SelectItem value="$100k+">$100k+</SelectItem>
                      <SelectItem value="$250k+">$250k+</SelectItem>
                      <SelectItem value="$500k+">$500k+</SelectItem>
                      <SelectItem value="$750k+">$750k+</SelectItem>
                      <SelectItem value="$1M+">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:block hidden w-full"></div>
        </div>

        <Button type="submit" size="lg" className="px-12">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default QuoteForm;
