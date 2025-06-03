'use client';

import {
  formDataAtom,
  useStepperTwo,
} from '@/app/shared/multi-step/multi-step-2';
import FormSummary from '@/app/shared/multi-step/multi-step-2/form-summary';
import {
  ListingUnitSchema,
  listingUnitSchema,
} from '@/validators/multistep-form-2.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AdvancedRadio, Flex, RadioGroup, Text, Title } from 'rizzui';

const properties: {
  label: string;
  subLabel: string;
}[] =[
  {
    label: 'بدون انتظار الرد - دعوة عامة',
    subLabel: 'يُرسل هذا النوع من الدعوات بهدف الإبلاغ فقط، ولا يُتوقع من المستلم الرد أو التأكيد.',
  },
  {
    label: 'الرد بـ (1) للحضور و (2) للاعتذار',
    subLabel: 'يتيح هذا النوع للمستلمين الرد السريع عبر كتابة رقم (1) لتأكيد الحضور أو (2) للاعتذار.',
  },
  {
    label: 'الدخول على رابط لتسجيل الرد',
    subLabel: 'يتضمن هذا النوع رابطًا إلكترونيًا يمكن من خلاله تعبئة نموذج لتأكيد الحضور وتفاصيل إضافية.',
  },
];

export default function StepOne() {
  const { step, gotoNextStep } = useStepperTwo();

  const [formData] = useAtom(formDataAtom);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ListingUnitSchema>({
    resolver: zodResolver(listingUnitSchema),
    defaultValues: {
      listingUnit: formData.listingUnit,
    },
  });

  useEffect(() => {
    if (errors.listingUnit) {
      toast.error(errors.listingUnit.message as string);
    }
  }, [errors]);

  const onSubmit = () => {
    gotoNextStep();
  };

  return (
    <>
      <FormSummary title="الرد - طريقة استلام الرد" />
      <form id={`rhf-${step.toString()}`} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="listingUnit"
          control={control}
          render={({ field: { value, onChange } }) => (
            <RadioGroup
              value={value}
              setValue={onChange}
              className="grid grid-cols-1 gap-5"
            >
              {properties.map((property) => (
                <AdvancedRadio
                  key={property.label}
                  value={property.label}
                  inputClassName="[&~span]:border-0 [&~span]:ring-1 [&~span]:ring-gray-200 [&~span:hover]:ring-primary [&:checked~span:hover]:ring-primary [&:checked~span]:border-1 [&:checked~.rizzui-advanced-radio]:ring-2 [&~span_.icon]:opacity-0 [&:checked~span_.icon]:opacity-100"
                >
                  <Flex
                    direction="col"
                    justify="center"
                    gap="2"
                    className="min-h-auto w-full px-0 py-5 md:min-h-[104px] md:px-8"
                  >
                    <Title
                      as="h4"
                      className="font-inter text-lg font-medium md:text-xl"
                    >
                      {property.label}
                    </Title>
                    <Text className="max-w-full truncate text-base text-gray-500">
                      {property.subLabel}
                    </Text>
                  </Flex>
                </AdvancedRadio>
              ))}
            </RadioGroup>
          )}
        />
      </form>
    </>
  );
}
