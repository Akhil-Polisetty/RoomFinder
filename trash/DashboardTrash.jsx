// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';
// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { ImageUploader } from './image-uploader';

// const formSchema = z.object({
//   roomtype: z.string().min(1, { message: 'Room type is required' }),
//   allowedtype: z.string().min(1, { message: 'Allowed type is required' }),
//   address: z.string().min(1, { message: 'Address is required' }),
//   rent: z.string().min(1, { message: 'Rent is required' }),
//   notes: z.string().optional(),
//   rating: z.string().optional(),
//   city: z.string().min(1, { message: 'City is required' }),
// });

// export default function Dashboard() {
//   const getCookieValue = (cookieName) => {
//     const cookies = document.cookie.split('; ');
//     const cookie = cookies.find((row) => row.startsWith(`${cookieName}=`));
//     return cookie ? cookie.split('=')[1] : null;
//   };

//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       roomtype: '',
//       allowedtype: '',
//       address: '',
//       rent: '',
//       notes: '',
//       rating: '4',
//       city: '',
//     },
//   });

//   const handleImageUpload = (uploadedImages) => {
//     setImages(uploadedImages);
//   };

//   async function onSubmit(values) {
//     setLoading(true);
//     const ownerid = getCookieValue('objid');

//     if (!ownerid) {
//       form.setError('root', { message: 'User not authenticated' });
//       setLoading(false);
//       return;
//     }

//     const requestBody = {
//       ...values,
//       ownerid,
//       pics: images,
//     };

//     try {
//       const response = await fetch('/api/createroom', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Room details added successfully');
//         form.reset();
//         setImages([]);
//       } else {
//         form.setError('root', { message: data.message || 'Something went wrong' });
//       }
//     } catch (err) {
//       form.setError('root', { message: 'Error: Unable to submit' });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="container mx-auto py-10">
//       <Card className="w-full max-w-2xl mx-auto">
//         <CardHeader>
//           <CardTitle>Add Room Details</CardTitle>
//           <CardDescription>Fill in the information about the room you want to list.</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="roomtype"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Room Type</FormLabel>
//                     <Select onValueChange={field.onChange} value={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select Room Type" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="Hostel">Hostel</SelectItem>
//                         <SelectItem value="House">House</SelectItem>
//                         <SelectItem value="Flat">Flat</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="allowedtype"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Allowed Type</FormLabel>
//                     <Select onValueChange={field.onChange} value={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select Allowed Type" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="Bachelors">Bachelors</SelectItem>
//                         <SelectItem value="Family">Family</SelectItem>
//                         <SelectItem value="All">All</SelectItem>
//                         <SelectItem value="Girls">Girls</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="address"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Address</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter full address" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="rent"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Rent</FormLabel>
//                     <FormControl>
//                       <Input type="number" placeholder="Enter rent amount" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="notes"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Notes</FormLabel>
//                     <FormControl>
//                       <Textarea placeholder="Any additional information" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="city"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>City</FormLabel>
//                     <Select onValueChange={field.onChange} value={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select City" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="Mumbai">Mumbai</SelectItem>
//                         <SelectItem value="Delhi">Delhi</SelectItem>
//                         <SelectItem value="Bangalore">Bangalore</SelectItem>
//                         <SelectItem value="Chennai">Chennai</SelectItem>
//                         <SelectItem value="Kolkata">Kolkata</SelectItem>
//                         <SelectItem value="Hyderabad">Hyderabad</SelectItem>
//                         <SelectItem value="Pune">Pune</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <ImageUploader onImageUpload={handleImageUpload} />
//               {form.formState.errors.root && (
//                 <p className="text-red-500">{form.formState.errors.root.message}</p>
//               )}
//               <Button type="submit" className="w-full" disabled={loading}>
//                 {loading ? 'Submitting...' : 'Submit Room Details'}
//               </Button>
//             </form>
//           </Form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
