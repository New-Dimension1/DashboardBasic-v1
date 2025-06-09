'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowLeftBold } from 'react-icons/pi';
import { Password, Checkbox, Button, Input, Text } from 'rizzui';
import { Form } from '@core/ui/form';
import { routes } from '@/config/routes';
import { SignUpSchema, signUpSchema } from '@/validators/signup.schema';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  isAgreed: false,
};

export default function SignUpForm() {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    console.log(data);
    setReset({ ...initialValues, isAgreed: false });
  };

  return (
    <>
      <Form<SignUpSchema>
        validationSchema={signUpSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
            <Input
              type="text"
              size="lg"
              label="الاسم الأول"
              placeholder="أدخل الاسم الأول"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('firstName')}
              error={errors.firstName?.message}
            />
            <Input
              type="text"
              size="lg"
              label="اسم العائلة"
              placeholder="أدخل اسم العائلة"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('lastName')}
              error={errors.lastName?.message}
            />
            <Input
              type="email"
              size="lg"
              label="البريد الإلكتروني"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              placeholder="أدخل بريدك الإلكتروني"
              {...register('email')}
              error={errors.email?.message}
            />
            <Password
              label="كلمة المرور"
              placeholder="أدخل كلمة المرور"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('password')}
              error={errors.password?.message}
            />
            <Password
              label="تأكيد كلمة المرور"
              placeholder="أعد إدخال كلمة المرور"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <div className="col-span-2 flex items-start">
              <Checkbox
                {...register('isAgreed')}
                className="[&>label>span]:font-medium [&>label]:items-start"
                label={
                  <>
                    بتسجيلك، فإنك توافق على{' '}
                    <Link
                      href="/"
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      الشروط
                    </Link>{' '}
                    و{' '}
                    <Link
                      href="/"
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      سياسة الخصوصية
                    </Link>
                  </>
                }
              />
            </div>
            <Button variant="solid" size="lg" type="submit" className="col-span-2 mt-2  !bg-primary">
              <span>ابدأ الآن</span>{' '}
              <PiArrowLeftBold className="ms-2 mt-0.5 h-5 w-5" />
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        لديك حساب بالفعل؟{' '}
        <Link
          href={routes.auth.signIn1}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          تسجيل الدخول
        </Link>
      </Text>
    </>
  );
}
