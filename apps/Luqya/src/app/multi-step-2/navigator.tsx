'use client';

import {
  formDataAtom,
  initialFormData,
  stepperAtomTwo,
  useStepperTwo,
} from '@/app/shared/multi-step/multi-step-2';
import cn from '@core/utils/class-names';
import { useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from 'rizzui';

interface FooterProps {
  formId?: number;
  className?: string;
  isLoading?: boolean;
}

function buttonLabel(formId?: number) {
  if (formId === 3) {
    return 'إرسال';
  }
  if (formId === 4) {
    return 'الرئيسية';
  }
  return 'التالي';
}

export default function Navigator({ isLoading, className }: FooterProps) {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const setFormData = useSetAtom(formDataAtom);
  const { step, gotoPrevStep } = useStepperTwo();
  const resetLocation = useResetAtom(stepperAtomTwo);

  useEffect(() => {
    resetLocation();
    setFormData(initialFormData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  function buttonAttr() {
    if (step === 4) {
      return {
        onClick: () => push('/'),
      };
    }
    return { form: `rhf-${step?.toString()}` };
  }

  return (
    <div
      className={cn(
        'flex items-center !justify-between gap-3 pt-8 md:pt-12',
        className
      )}

    >
      {step > 0 && step < 3 && (
        <Button size="lg" rounded="lg" variant="outline" onClick={gotoPrevStep}>
          السابق
        </Button>
      )}
      <Button
        isLoading={isLoading}
        disabled={isLoading}
        size="lg"
        rounded="lg"
        variant="solid"
        {...buttonAttr()}
        type={'submit'}
        className="mr-auto"
      >
        {buttonLabel(step)}
      </Button>
    </div>
  );
}
