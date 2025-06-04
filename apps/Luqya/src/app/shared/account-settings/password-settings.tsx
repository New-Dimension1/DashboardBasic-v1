'use client';

import { useState } from 'react';
import { SubmitHandler, Controller } from 'react-hook-form';
import { PiDesktop } from 'react-icons/pi';
import { Form } from '@core/ui/form';
import { Button, Password, Title, Text } from 'rizzui';
import cn from '@core/utils/class-names';
import { ProfileHeader } from '@/app/shared/account-settings/profile-settings';
import HorizontalFormBlockWrapper from '@/app/shared/account-settings/horiozontal-block';
import {
  passwordFormSchema,
  PasswordFormTypes,
} from '@/validators/password-settings.schema';

// واجهة إعدادات كلمة المرور
export default function PasswordSettingsView({
  settings,
}: {
  settings?: PasswordFormTypes;
}) {
  const [isLoading, setLoading] = useState(false); // حالة تحميل الزر
  const [reset, setReset] = useState({}); // حالة إعادة تعيين النموذج

  // دالة إرسال النموذج
  const onSubmit: SubmitHandler<PasswordFormTypes> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('بيانات إعدادات كلمة المرور ->', data);
      setReset({
        currentPassword: '',
        newPassword: '',
        confirmedPassword: '',
      });
    }, 600);
  };

  return (
    <>
      <Form<PasswordFormTypes>
        validationSchema={passwordFormSchema} // التحقق من صحة البيانات
        resetValues={reset} // إعادة تعيين القيم بعد الإرسال
        onSubmit={onSubmit}
        className="@container"
        useFormProps={{
          mode: 'onChange',
          defaultValues: {
            ...settings,
          },
        }}
      >
        {({ register, control, formState: { errors }, getValues }) => {
          return (
            <>
              {/* رأس الملف الشخصي */}
              <ProfileHeader
                title="Olivia Rhye"
                description="olivia@example.com"
              />

              <div className="mx-auto w-full max-w-screen-2xl">
                {/* حقل كلمة المرور الحالية */}
                <HorizontalFormBlockWrapper
                  title="كلمة المرور الحالية"
                  titleClassName="text-base font-medium"
                >
                  <Password
                    {...register('currentPassword')}
                    placeholder="أدخل كلمة المرور الحالية"
                    error={errors.currentPassword?.message}
                  />
                </HorizontalFormBlockWrapper>

                {/* حقل كلمة المرور الجديدة */}
                <HorizontalFormBlockWrapper
                  title="كلمة المرور الجديدة"
                  titleClassName="text-base font-medium"
                >
                  <Controller
                    control={control}
                    name="newPassword"
                    render={({ field: { onChange, value } }) => (
                      <Password
                        placeholder="أدخل كلمة المرور الجديدة"
                        helperText={
                          getValues().newPassword.length < 8 &&
                          'يجب أن تكون كلمة المرور أكثر من 8 أحرف'
                        }
                        onChange={onChange}
                        error={errors.newPassword?.message}
                      />
                    )}
                  />
                </HorizontalFormBlockWrapper>

                {/* تأكيد كلمة المرور الجديدة */}
                <HorizontalFormBlockWrapper
                  title="تأكيد كلمة المرور الجديدة"
                  titleClassName="text-base font-medium"
                >
                  <Controller
                    control={control}
                    name="confirmedPassword"
                    render={({ field: { onChange, value } }) => (
                      <Password
                        placeholder="أعد إدخال كلمة المرور الجديدة"
                        onChange={onChange}
                        error={errors.confirmedPassword?.message}
                      />
                    )}
                  />
                </HorizontalFormBlockWrapper>

                {/* أزرار الإجراء */}
                <div className="mt-6 flex w-auto items-center justify-end gap-3">
                  <Button type="button" variant="outline">
                    إلغاء
                  </Button>
                  <Button type="submit" variant="solid" isLoading={isLoading}>
                    تحديث كلمة المرور
                  </Button>
                </div>
              </div>
            </>
          );
        }}
      </Form>

      {/* <LoggedDevices className="mt-10" /> */} {/* قائمة الأجهزة المسجلة الدخول (اختياري) */}
    </>
  );
}

// عرض الأجهزة المسجلة الدخول
function LoggedDevices({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-screen-2xl', className)}>
      <div className="border-b border-dashed border-muted">
        <Title as="h2" className="mb-3 text-xl font-bold text-gray-900">
          الأجهزة التي تم تسجيل الدخول منها
        </Title>
        <Text className="mb-6 text-sm text-gray-500">
          سيتم تنبيهك عبر البريد الإلكتروني olivia@untitledui.com إذا تم الكشف عن نشاط غير معتاد على حسابك.
        </Text>
      </div>

      {/* جهاز نشط حالياً */}
      <div className="flex items-center gap-6 border-b border-dashed border-muted py-6">
        <PiDesktop className="h-7 w-7 text-gray-500" />
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Title
              as="h3"
              className="text-base font-medium text-gray-900 dark:text-gray-700"
            >
              2018 Macbook Pro 15-inch
            </Title>
            <Text
              as="span"
              className="relative hidden rounded-md border border-muted py-1.5 pe-2.5 ps-5 text-xs font-semibold text-gray-900 before:absolute before:start-2.5 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-green sm:block"
            >
              نشط الآن
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Text className="text-sm text-gray-500">ملبورن، أستراليا</Text>
            <span className="h-1 w-1 rounded-full bg-gray-600" />
            <Text className="text-sm text-gray-500">22 يناير الساعة 4:20 مساءً</Text>
          </div>
          <Text
            as="span"
            className="relative mt-2 inline-block rounded-md border border-muted py-1.5 pe-2.5 ps-5 text-xs font-semibold text-gray-900 before:absolute before:start-2.5 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-green sm:hidden"
          >
            نشط الآن
          </Text>
        </div>
      </div>

      {/* جهاز غير نشط حالياً */}
      <div className="flex items-center gap-6 py-6">
        <PiDesktop className="h-7 w-7 text-gray-500" />
        <div>
          <Title
            as="h3"
            className="mb-2 text-base font-medium text-gray-900 dark:text-gray-700"
          >
            2020 Macbook Air M1
          </Title>
          <div className="flex items-center gap-2">
            <Text className="text-sm text-gray-500">ملبورن، أستراليا</Text>
            <span className="h-1 w-1 rounded-full bg-gray-600" />
            <Text className="text-sm text-gray-500">22 يناير الساعة 4:20 مساءً</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
