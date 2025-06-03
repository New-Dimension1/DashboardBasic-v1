'use client';

import { useCallback } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { Input, Switch, Button, ActionIcon } from 'rizzui';
import cn from '@core/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import { locationShipping } from '@/app/shared/ecommerce/product/create-edit/form-utils';
import TrashIcon from '@core/components/icons/trash';
import { PiPlusBold } from 'react-icons/pi';
import { PhoneNumber } from '@core/ui/phone-input';
export default function ShippingInfo({ className }: { className?: string }) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'locationShipping',
  });

  const addCustomField = useCallback(
    () => append([...locationShipping]),
    [append]
  );

  return (
   <FormGroup
  title='أعضاء المجموعة'
  description="أضف أسماء وأرقام الأشخاص الذين ستُرسل إليهم الدعوة"
  className={cn(className)}
>

      {fields.map((item, index) => (
        <div key={item.id} className="col-span-full flex gap-4 xl:gap-7">
          <Input
            label="الاسم"
            placeholder="محمد خالد"
            className="flex-grow"
            {...register(`locationShipping.${index}.name`)}
          />
      
           <Controller
  name={`locationShipping.${index}.phone`}
  control={control}
  render={({ field: { value, onChange } }) => (
    <PhoneNumber
      label="رقم الجوال"
      country="sa"
      value={value}
      onChange={onChange}
      isValid={(value) => value.length === 16}
      inputProps={{ maxLength: 16 }}
      className="rtl:[&>.selected-flag]:left-0 flex-grow"
      inputClassName="rtl:pl-12"
      buttonClassName="rtl:[&>.selected-flag]:left-2 rtl:[&>.selected-flag_.arrow]:-left-6"
    />
  )}
/>
          {fields.length > 1 && (
            <ActionIcon
              onClick={() => remove(index)}
              variant="flat"
              className="mt-7 shrink-0"
            >
              <TrashIcon className="h-4 w-4" />
            </ActionIcon>
          )}
        </div>
      ))}
      <Button
        onClick={addCustomField}
        variant="outline"
        className="col-span-full ml-auto w-auto"
      >
        <PiPlusBold className="me-2 h-4 w-4" strokeWidth={2} /> إضافة عضو
      </Button>
    </FormGroup>
  );
}
