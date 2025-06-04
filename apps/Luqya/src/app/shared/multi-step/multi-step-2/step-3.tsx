'use client';
import { useState } from 'react'
import {
  formDataAtom,
  useStepperTwo,
} from '@/app/shared/multi-step/multi-step-2';
import FormSummary from '@/app/shared/multi-step/multi-step-2/form-summary';
import {
  basicInformationSchema,
  BasicInformationSchemaType,
} from '@/validators/multistep-form-2.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { FieldError, Input, Radio, RadioGroup, MultiSelect, Text , Textarea } from 'rizzui';

const QuillEditor = dynamic(() => import('@core/ui/quill-editor'), {
  ssr: false,
});

const constructionStatus = [
  {
    label: 'Completed',
    value: 'completed',
  },
  {
    label: 'Pending',
    value: 'pending',
  },
];

export default function StepTwo() {
  const { step, gotoNextStep } = useStepperTwo();
  const [formData, setFormData] = useAtom(formDataAtom);
  const [valueGroup, setValueGroup] = useState<string[]>([]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<BasicInformationSchemaType>({
    resolver: zodResolver(basicInformationSchema),
    defaultValues: {
      address: formData.address,
      city: formData.city,
      constructionStatus: formData.constructionStatus,
      productDescription: formData.productDescription,
      propertyName: formData.propertyName,
    propertyFor: formData.propertyFor || 'من المجموعات',  
      propertyType: formData.propertyType,
    },
  });

  const selectedType = useWatch({
    control,
    name: 'propertyFor',
      defaultValue: 'من المجموعات',
  });

  const onSubmit: SubmitHandler<BasicInformationSchemaType> = (data) => {
    console.log('data', data);
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    gotoNextStep();
  };

  return (
    <>
      <FormSummary
        title="المدعويين - تحديد المدعويين "
        description="اختر طريقة إضافة المدعوين: يدويًا أو من مجموعات قمت بإضافتها مسبقًا."
      />
      <div className="col-span-full flex items-center justify-center @5xl:col-span-7">
        <form
          id={`rhf-${step.toString()}`}
          onSubmit={handleSubmit(onSubmit)}
          className="flex-grow"
        >
          <div className="grid gap-6">
            <div className="grid gap-4">
              <Text className="font-semibold text-gray-900">المدعووين</Text>
              <Controller
                name="propertyFor"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioGroup
                    value={value}
                    setValue={onChange}
                    className="flex gap-4"
                  >
                    <Radio label="يدوي" value="يدوي" name="type" />
                    <Radio label="من المجموعات" value="من المجموعات" name="type" />
                  </RadioGroup>
                )}
              />
              {errors.propertyFor && (
                <FieldError
                  className="text-[13px]"
                  error={errors.propertyFor?.message}
                />
              )}
            </div>

            {/* MultiSelect إذا كانت القيمة "من المجموعات" */}
            {selectedType === 'من المجموعات' && (
              <Controller
                control={control}
                name="constructionStatus"
                render={({ field: { value = [], onChange } }) => (
                  <MultiSelect
                    label="المجموعات"
                    labelClassName="font-semibold text-gray-900"
                    dropdownClassName="!z-10 h-auto"
                    inPortal={true}
                    placeholder="قم بختيار المجموعات التي ترغب بارسال الدعوات لهم"
                    options={constructionStatus}
                    multiple
                       value={valueGroup}
      onChange={setValueGroup}
                    hideSelectedOptions={true}
                    error={errors?.constructionStatus?.message as string}
                    size="lg"
                  />
                )}
              />
            )}

            {/* QuillEditor إذا كانت القيمة "يدوي" */}
            {selectedType === 'يدوي' && (
              <>
                <Controller
                  control={control}
                  name="productDescription"
                  render={({ field: { onChange, value } }) => (
                    <Textarea 
                      value={value}
                      labelClassName="font-semibold text-gray-900"
                      label="قم باضافة الأرقام يدويا"
                      onChange={onChange}
                      className="[&_.ql-editor]:min-h-[120px]"
                      error={errors?.productDescription?.message as string}
                    />
                  )}
                />
                <Text className="font-semibold text-red-dark">
                  كل رقم في سطر منفصل بصيغة 05XXXXXXXX
                </Text>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
