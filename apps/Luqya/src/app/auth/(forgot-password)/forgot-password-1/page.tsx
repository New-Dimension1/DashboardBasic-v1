import ForgetPasswordForm from './forget-password-form';
import UnderlineShape from '@core/components/shape/underline';
import Image from 'next/image';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          إعادة تعيين{' '}
          <span className="relative inline-block">
            كلمة المرور!
            <UnderlineShape className="absolute -bottom-2 end-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36" />
          </span>
        </>
      }
      bannerTitle="أسهل طريقة لإدارة مساحات عملك."
      bannerDescription="طريقة بسيطة وفعالة لإدارة وتنظيم الدعوات والحضور بكل سلاسة."
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-up.webp'
            }
            alt="صورة إعادة تعيين كلمة المرور"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <ForgetPasswordForm />
    </AuthWrapperOne>
  );
}
