import SignInForm from '@/app/signin/sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import Image from 'next/image';
import UnderlineShape from '@core/components/shape/underline';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('تسجيل الدخول'),
};

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          حيّاك الله! ياليت{' '}
          <span className="relative inline-block">
            تسجل دخولك
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
          </span>{' '}
          عشان تكمل.
        </>
      }
      description="سجّل عشان تقدر تنشئ وتدير دعوات إلكترونية بكل سهولة، وترسلها للضيوف وتتابع ردودهم لحظيًا."
      bannerTitle="كل شي تحتاجه لدعواتك الإلكترونية."
      bannerDescription="أنشئ الدعوة، خصصها على ذوقك، أرسلها، وتابع كل التفاصيل من مكان واحد، وبكل سهولة."
      isSocialLoginActive={true}
      pageImage={
        <div dir='rtl' className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-up.webp'
            }
            alt="صورة تسجيل الدخول"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
