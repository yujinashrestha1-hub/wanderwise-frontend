import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Field, FieldLabel } from '../components/ui/field';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import api from '../api/axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(8, "Email is too short").trim(),
  password: z.string().min(8, "Must be at least 8 characters").trim(),
});

const Login = () => {
  const navigate = useNavigate();
  
   const { onLogin, token } = useAuth();

    if(token){
        navigate("/dashboard");
    }

  
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data);
      
      // Typically successful POST requests return a 200 or 201 status code
      if (response.status === 201 || response.status === 200) {
        toast.success("Logged in successfully");
        onLogin(response.data.token, data);
        navigate("/dashboard");
      } else {
        toast.error(response.data?.message || 'Login failed');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "Some error occurred");
      console.error(error);
    }
  };

  return (
    <div className='w-full h-dvh pt-30'>
      <div className='w-1/2 mx-auto bg-white rounded-2xl grid grid-cols-2 h-75dvh'>
        <div className='w-full overflow-hidden'>
          <img 
            src="https://images.unsplash.com/photo-1517999349371-c43520457b23?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Login background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <form className='h-full' onSubmit={form.handleSubmit(onSubmit)}>
            <Card className={"h-full flex flex-col justify-evenly"}>
              <CardHeader>
                <CardTitle>Login to Wanderwise</CardTitle>
                <CardDescription>Enter your credentials to continue.</CardDescription>
                <CardAction>
                  <img src="/wanderwiseLogo.png" alt="wanderwise logo" className='w-12' />
                </CardAction>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Controller 
                  name="email" 
                  control={form.control} 
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Enter your email</FieldLabel>
                      <Input {...field} id={field.name} type="email" placeholder="abc@gmail.com" aria-invalid={fieldState.invalid} />
                      {fieldState.error && <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>}
                    </Field>
                  )} 
                />
                
                <Controller 
                  name="password" 
                  control={form.control} 
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Enter your password</FieldLabel>
                      <Input {...field} id={field.name} type="password" placeholder="*******" aria-invalid={fieldState.invalid} />
                      {fieldState.error && <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>}
                    </Field>
                  )} 
                />
              </CardContent>
              
              <CardFooter>
                <Button type="submit" className={"w-full"}>Login</Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;