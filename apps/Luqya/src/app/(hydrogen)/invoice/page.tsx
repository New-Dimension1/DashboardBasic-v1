import Link from 'next/link';
import { routes } from '@/config/routes';
import { Button } from 'rizzui/button';
import PageHeader from '@/app/shared/page-header';
import InvoiceTable from '@/app/shared/invoice/invoice-list/table';
import { PiPlusBold } from 'react-icons/pi';
import { invoiceData } from '@/data/invoice-data';
import ExportButton from '@/app/shared/export-button';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('الدعوات'),
};

const pageHeader = {
  title: 'الدعوات',
  breadcrumb: [
    {
      href: "/",
      name: 'الرئيسية',
    },
    {
      href: routes.invoice.home,
      name: 'الدعوات',
    },
    {
      name: 'جميع الدعوات',
    },
  ],
};

export default function InvoiceListPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          {/* <ExportButton
            data={invoiceData}
            fileName="invoice_data"
            header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
          /> */}
          <Link href={routes.multiStep2} className="w-full @lg:w-auto">
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
             إنشاء دعوة
            </Button>
          </Link>
        </div>
      </PageHeader>

      <InvoiceTable />
    </>
  );
}
