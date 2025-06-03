'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { Input, Select } from 'rizzui';
import cn from '@core/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import {
  categoryOption,
  typeOption,
} from '@/app/shared/ecommerce/product/create-edit/form-utils';
import dynamic from 'next/dynamic';
import SelectLoader from '@core/components/loader/select-loader';
import QuillLoader from '@core/components/loader/quill-loader';
// const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
//   ssr: false,
//   loading: () => <SelectLoader />,
// });
const QuillEditor = dynamic(() => import('@core/ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

export default function ProductSummary({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="معلومات المجموعة"
      description="أدخل اسم المجموعة وحالتها لتسهيل إدارتها وتصنيفها ضمن النظام."
      className={cn(className)}
    >
      <Input
        label="اسم المجموعة"
        placeholder="تخرج ليان"
        {...register('title')}
        error={errors.title?.message as string}
      />
   

      <Controller
        name="type"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            dropdownClassName="h-auto"
            options={typeOption}
            value={value}
            onChange={onChange}
            placeholder='اختر الحالة'
            label="حالة المجموعة"
            error={errors?.type?.message as string}
            getOptionValue={(option) => option.value}
          />
        )}
      />

   

    
    </FormGroup>
  );
}
