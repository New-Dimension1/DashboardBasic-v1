'use client';

import {
  formDataAtom,
  useStepperTwo,
} from '@/app/shared/multi-step/multi-step-2';
import FormSummary from '@/app/shared/multi-step/multi-step-2/form-summary';
import {
  BasicFeaturesSchema,
  basicFeaturesSchema,
} from '@/validators/multistep-form-2.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import QuantityInput from '../quantity-input';

export default function StepTwo() {
  const { step, gotoNextStep } = useStepperTwo();
  const [formData, setFormData] = useAtom(formDataAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicFeaturesSchema>({
    resolver: zodResolver(basicFeaturesSchema),
    defaultValues: {
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      guests: formData.guests,
    },
  });

  const onSubmit: SubmitHandler<BasicFeaturesSchema> = (data) => {
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
        title="الإرسال"
        description="تأكيد"
      />
      <form
        id={`rhf-${step.toString()}`}
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-5 text-center"
      >
        <h2 className="text-2xl @7xl:text-3xl @[113rem]:text-4xl">
    كذا تمام، وصلتِ لآخر خطوة!
          </h2>
<p className="mt-6 text-base">
  خلصنا كل شي 🎉، حملنا صورة الدعوة وضفنا المدعوين. إذا ضغطتِ على &quot;إرسال&quot;، راح تنرسل الدعوة على طول.
</p>
      </form>
    </>
  );
}
