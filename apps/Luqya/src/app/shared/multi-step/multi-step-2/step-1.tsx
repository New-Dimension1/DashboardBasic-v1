'use client';

import {
  formDataAtom,
  useStepperTwo,
} from '@/app/shared/multi-step/multi-step-2';
import FormSummary from '@/app/shared/multi-step/multi-step-2/form-summary';
import {
  startingTypeSchema,
  StartingTypeSchema,
} from '@/validators/multistep-form-2.schema';
import UploadZone from '@core/ui/file-upload/upload-zone';
import ClipboardIcon from '@core/components/icons/clipboard';
import ClipboardIconSuccess from '@core/components/icons/clipboard-success';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Controller, useForm,useWatch  } from 'react-hook-form';
import toast from 'react-hot-toast';
import dynamic from 'next/dynamic';
import {
  AdvancedRadio,
  Flex,
  RadioGroup,
  Title,
  FieldError,
  Input,
  Radio,
  Select,
  Text,
  Textarea 
} from 'rizzui';
import {
  PiTextAlignLeft,
  PiImageDuotone,
  PiVideoDuotone,
} from 'react-icons/pi';
const QuillEditor = dynamic(() => import('@core/ui/quill-editor'), {
  ssr: false,
});

const startingTypes: {
  label: string;
  icon: React.ReactNode;
  type: string
}[] = [
  {
    label: 'نص فقط',
    icon: <PiTextAlignLeft className="size-8 shrink-0 text-gray-900" />,
    type: "NO"
  },
  {
    label: 'نص مع صورة',
    icon: <PiImageDuotone className="size-8 shrink-0 text-gray-900" />,
    type: "yes"
  },
  {
    label: 'نص مع فيديو',
    icon: <PiVideoDuotone className="size-8 shrink-0 text-gray-900" />,
    type: "yes"
  },
];

export default function StepOne() {
  const { step, gotoNextStep } = useStepperTwo();
  const [formData] = useAtom(formDataAtom);

  const {
    control,
    formState: { errors },
    handleSubmit,
     getValues,
    setValue,
  } = useForm<StartingTypeSchema>({
    resolver: zodResolver(startingTypeSchema),
    defaultValues: {
      startingType: formData.startingType,
    },
  });

  useEffect(() => {
    if (errors.startingType) {
      toast.error(errors.startingType.message as string);
    }
  }, [errors]);

  const onSubmit = () => {
    gotoNextStep();
  };
 const selectedLabel = useWatch({ control, name: 'startingType' });

  const selectedTypeObj = startingTypes.find(
    (type) => type.label === selectedLabel
  );

  return (
    <>
      <FormSummary title="محتوى - تجهيز محتوى الدعوة" />
      <form id={`rhf-${step.toString()}`} onSubmit={handleSubmit(onSubmit)} >
        <div className="grid gap-4">
          <Input
            label="عنوان الدعوة"
            labelClassName="font-semibold text-gray-900"
            placeholder="حفل تخرج منيرة"
            // {...register('startingType')}
            helperText="لمعرفة الدعوة ولا يتم إرسالة"
            error={errors.startingType?.message}
            size="lg"
          />

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Textarea 
                value={value}
                labelClassName="font-semibold text-gray-900"
                label="محتوى الدعوة"
                onChange={onChange}
                className="[&_.ql-editor]:min-h-[120px]"
                error={errors?.name?.message as string}
              />
            )}
          />
          <Controller
            name="startingType"
            control={control}
            render={({ field: { value, onChange } }) => (
              <>
                <Text className="font-semibold text-gray-900">نوع الرسالة</Text>
                <RadioGroup
                  value={value}
                  setValue={onChange}
                  className="grid grid-cols-3 gap-5"
                >
                  {startingTypes.map((type) => (
                    <AdvancedRadio
                      key={type.label}
                      value={type.label}
                      inputClassName="[&~span]:border-0 [&~span]:ring-1 [&~span]:ring-gray-200 [&~span:hover]:ring-primary [&:checked~span:hover]:ring-primary [&:checked~span]:border-1 [&:checked~.rizzui-advanced-radio]:ring-2 [&~span_.icon]:opacity-0 [&:checked~span_.icon]:opacity-100 [&~span]:space-y-2"
                    >
                      <div className="min-h-auto text-primary h-32 flex flex-col text-center justify-center items-center  gap-4 px-0 py-2 md:min-h-[104px] md:gap-5 md:px-8">
                        {type.icon}
                        <Title
                          as="h4"
                          className="font-inter text-base font-medium md:text-lg"
                        >
                          {type.label}
                        </Title>
                      </div>
                    </AdvancedRadio>
                  ))}
                </RadioGroup>
              </>
            )}
          />


    {selectedTypeObj?.type === 'yes' && (
            <>
              <Text className="font-semibold text-gray-900">
                الفيديو أو الصورة
              </Text>
              <UploadZone
                name="photos"
                getValues={getValues}
                setValue={setValue}
              />
            </>
          )}
        </div>
      </form>
    </>
  );
}
