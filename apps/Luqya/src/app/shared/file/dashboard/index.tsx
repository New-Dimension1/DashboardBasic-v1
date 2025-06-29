import StorageReport from '@/app/shared/file/dashboard/storage-report';
import FileStats from '@/app/shared/file/dashboard/file-stats';
import StorageSummary from '@/app/shared/file/dashboard/storage-summary';
import RecentFiles from '@/app/shared/file/dashboard/recent-files';
import QuickAccess from '@/app/shared/file/dashboard/quick-access';
import ActivityReport from '@/app/shared/file/dashboard/activity-report';
import Members from '@/app/shared/file/dashboard/members';
import FileListTable from '@/app/shared/file/dashboard/file-list';
import UpgradeStorage from '@/app/shared/file/dashboard/upgrade-storage';
import RecentActivities from '@/app/shared/file/dashboard/recent-activities';
import WelcomeBanner from '@core/components/banners/welcome';
import HandWaveIcon from '@core/components/icons/hand-wave';
import welcomeImg from '@public/shop-illustration.png';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/config/routes';
import { Button } from 'rizzui/button';
import { PiPlusBold } from 'react-icons/pi';
export default function FileDashboard() {
  return (
    <div className="@container">
      <WelcomeBanner
        title={
          <>
            أهلًا وسهلًا، نورتنا في لُقيّا
            <HandWaveIcon className="mx-1 inline-flex h-8 w-8" />
          </>
        }
        description={
          'مرحبًا بك في لوحة التحكم. يمكنك البدء بإنشاء المجموعات أو إرسال الدعوات مباشرة.'
        }
        media={
          <div className="absolute -bottom-6 end-4 hidden w-[300px] @2xl:block lg:w-[320px] 2xl:-bottom-7 2xl:w-[330px]">
            <div className="relative">
              <Image
                src={welcomeImg}
                alt="صورة ترحيبية للمتجر من فري بيك"
                className="dark:brightness-95 dark:drop-shadow-md"
              />
            </div>
          </div>
        }
        contentClassName="@2xl:max-w-[calc(100%-340px)]"
        className="mb-10 border border-muted bg-gray-0 pb-8 text-right @4xl:col-span-2 @7xl:col-span-8 dark:bg-gray-100/30 lg:pb-9"
      >
        <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-start">
          <Link href={routes.eCommerce.createProduct} className="inline-flex">
            <Button as="span" className="h-[38px] shadow md:h-10">
              <PiPlusBold className="ms-1 h-4 w-4" /> إنشاء مجموعة
            </Button>
          </Link>
          <Link href={routes.multiStep2} className="inline-flex">
            <Button
              as="span"
              variant="outline"
              className="h-[38px] shadow md:h-10"
            >
              <PiPlusBold className="ms-1 h-4 w-4" /> إنشاء دعوة
            </Button>
          </Link>
        </div>
      </WelcomeBanner>

      {/* <FileStats className="mb-5 2xl:mb-8" />
      <div className="mb-6 grid grid-cols-1 gap-6 @4xl:grid-cols-12 2xl:mb-8 2xl:gap-8">
        <StorageReport className="@container @4xl:col-span-8 @[96.937rem]:col-span-9" />
        <StorageSummary className="@4xl:col-span-4 @[96.937rem]:col-span-3" />
      </div>

      <div className="grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8">
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-8 2xl:gap-8 3xl:col-span-9">
          <QuickAccess />
          <RecentFiles />
          <ActivityReport />
          <FileListTable />
        </div>

        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-4 2xl:gap-8 3xl:col-span-3">
          <RecentActivities />
          <Members />
          <UpgradeStorage />
        </div>
      </div> */}
    </div>
  );
}
