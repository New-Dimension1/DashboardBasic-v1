import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui/button';
import PageHeader from '@/app/shared/page-header';
import ProductsTable from '@/app/shared/ecommerce/product/product-list/table';
import { productsData } from '@/data/products-data';
import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';
import ImportButton from '@/app/shared/import-button';
export const metadata = {
  ...metaObject('المجموعات'),
};

const pageHeader = {
  title: 'المجموعات',
  breadcrumb: [
    {
      href: "/",
      name: 'الرئيسية',
    },
    {
      href: routes.eCommerce.products,
      name: 'المجموعات',
    },
    {
      name: 'قائمة المجموعات',
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          {/* <ExportButton
            data={productsData}
            fileName="product_data"
            header="ID,Name,Category,Product Thumbnail,SKU,Stock,Price,Status,Rating"
          /> */}
          <ImportButton title={'استرداد ملف'}   />
          <Link
            href={routes.eCommerce.createProduct}
            className="w-full @lg:w-auto"
          >
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              إضافة مجموعة
            </Button>
          </Link>
        </div>
      </PageHeader>

      <ProductsTable pageSize={10} />
    </>
  );
}
