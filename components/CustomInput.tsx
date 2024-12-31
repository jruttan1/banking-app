'use client';
import React from 'react'
import { FormField } from '@/components/ui/form'
import { FormItem } from '@/components/ui/form'
import { FormLabel } from '@/components/ui/form'
import { FormMessage } from '@/components/ui/form'
import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath <z.infer<typeof formSchema>>,
    label: string;
    placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
              <div className="form-item">
                  <FormLabel className="form-label">{label}</FormLabel>
                  <div className="flex w-fill flex-col">
                      <FormControl>
                          <Input placeholder={placeholder} className="input-class" type={name === 'password' ? 'password' : 'text'} {...field} />
                      </FormControl>
                      <FormMessage className="form-message mt-2" />
                  </div>
              </div>
          )}     />
  )
}

export default CustomInput
