import Image from 'next/image';
import UnderlineShape from '@core/components/shape/underline';
import SignUpForm from './sign-up-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('إنشاء حساب'),
};

export default function SignUp() {
  return (
    <AuthWrapperOne
      title={
        <>
          انضم إلينا ولا تفوّت أي شيء -{' '}
          <span className="relative inline-block">
            إنشاء حساب!
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36" />
          </span>
        </>
      }
      description="من خلال إنشاء حساب، يمكنك إدارة وتنظيم الدعوات والحضور بكل سهولة، مع إمكانية تأكيد الحضور مباشرة عبر واتساب."
      bannerTitle="أسهل طريقة لتنظيم الدعوات وإدارة الحضور."
      bannerDescription="نوفّر لك منصة متكاملة لإرسال الدعوات، متابعة الحضور، واستقبال تأكيد الحضور عبر واتساب بطريقة ذكية واحترافية."
      isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-up.webp'
            }
            alt="صورة إنشاء حساب"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <SignUpForm />
    </AuthWrapperOne>
  );
}
