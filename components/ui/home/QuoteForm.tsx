"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import axios from "axios";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { QuoteFormSchema } from "@/app/schema/QuoteFormSchema"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import { Textarea } from "../textarea"
import { useState } from "react"

const QuoteForm = () => {

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof QuoteFormSchema>>({
        resolver: zodResolver(QuoteFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            contact_number: "",
            email: "",
            loading_place: "",
            unloading_place: "",
            payload: "",
            dimensions: "",
            type_of_cargo: undefined,
            type_of_transportation: undefined,
            message: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof QuoteFormSchema>) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/sendQuote', data)
            if (response.status == 200) {
                form.reset()
                toast.success("Thank you for your inquiry! Our team will get in touch with you shortly.")
            }

            else {
                toast.error('Something went wrong, please try again later.');
            }

        } catch (error) {
            console.error(error)
            toast.error('Failed to send the quote request. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <section id='quote' className='w-full h-full bg-[#fff] pt-20'>
            <div className='container'>
                <div className='flex lg:flex-row flex-col items-end justify-between gap-10'>
                    <div className='xl:w-[60%] lg:w-[55%] w-full lg:pb-20'>
                        <div className='mb-8'>
                            <div className='text-start mb-2'>
                                <h1 className={`text-[#1A1A1A] text-[43px] leading-[53px] font-bold font-[family-name:var(--font-Outfit)]`}>Get a Quote</h1>
                            </div>
                            <div className='max-w-[780px] mr-auto text-start'>
                                <p className='text-[#525252] text-base font-normal'>Please enter information below in order to calculate the shipment.</p>
                            </div>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input autoComplete="off" placeholder="First Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input autoComplete="off" placeholder="Last Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="contact_number"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input autoComplete="off" placeholder="Contact Number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input autoComplete="off" placeholder="Email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="loading_place"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input autoComplete="off" placeholder="Loading Place" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="unloading_place"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input autoComplete="off" placeholder="Unloading Place" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="payload"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input autoComplete="off" placeholder="Payload" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="dimensions"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input autoComplete="off" placeholder="Dimensions" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="type_of_cargo"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        value={field.value || undefined}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Type of Cargo" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Container Cargo">Container Cargo</SelectItem>
                                                            <SelectItem value="Liquid Bulk">Liquid Bulk</SelectItem>
                                                            <SelectItem value="Dry Bulk">Dry Bulk</SelectItem>
                                                            <SelectItem value="Break Bulk">Break Bulk</SelectItem>
                                                            <SelectItem value="Others">Others</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />


                                    <FormField
                                        control={form.control}
                                        name="type_of_transportation"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        value={field.value || undefined}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Type of Transportation" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Air Freight">Air Freight</SelectItem>
                                                            <SelectItem value="Sea Freight">Sea Freight</SelectItem>
                                                            <SelectItem value="Road Freight">Road Freight</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="sm:col-span-2">
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea className="resize-none" rows={7} placeholder="Message" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <Button type="submit" variant="heroBtn" size="lg" className="hover:bg-[#1A1A1A] bg-[#1A1A1A] text-[#fff]" disabled={loading}>
                                    {loading ? "Please wait..." : " Send Message"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className='xl:w-[40%] lg:w-[45%] w-full flex justify-end items-end'>
                        <div className="xl:w-[409px] w-[360px] xl:h-[715px] h-[573px] relative">
                            <Image src="/images/man.svg" alt="man" className="object-contain bottom-0" fill />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuoteForm