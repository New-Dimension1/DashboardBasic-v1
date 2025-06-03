'use client';

import DeletePopover from '@core/components/delete-popover';
import { getRatings } from '@core/components/table-utils/get-ratings';
import { getStatusBadge } from '@core/components/table-utils/get-status-badge';
import { getStockStatus } from '@core/components/table-utils/get-stock-status';
import { routes } from '@/config/routes';
import { ProductType } from '@/data/products-data';
import EyeIcon from '@core/components/icons/eye';
import PencilIcon from '@core/components/icons/pencil';
import AvatarCard from '@core/ui/avatar-card';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { ActionIcon, Checkbox, Flex, Text, Tooltip } from 'rizzui';

const columnHelper = createColumnHelper<ProductType>();

export const productsListColumns = [
  columnHelper.accessor('name', {
    id: 'name',
    size: 800,
    header: 'اسم المجموعة',
    enableSorting: false,
    cell: ({ row }) => (
      <Text className="text-base ">{row.original.name}</Text>
    ),
  }),
  columnHelper.display({
    id: 'sku',
    size: 150,
    header: 'عدد الأعضاء',
    cell: ({ row }) => <Text className="text-sm">{row.original.sku}</Text>,
  }),
  columnHelper.accessor('status', {
    id: 'status',
    size: 150,
    header: 'الحالة',
    enableSorting: false,
    cell: ({ row }) => getStatusBadge(row.original.status),
  }),
  columnHelper.display({
    id: 'action',
    size: 120,
    cell: ({
      row,
      table: {
        options: { meta },
      },
    }) => (
      <Flex align="center" justify="end" gap="3" className="pe-4">
        <Tooltip
          size="sm"
          content={'تعديل المجموعة'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.ediProduct(row.original.id)}>
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              aria-label={'تعديل المجموعة'}
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        {/* <Tooltip
          size="sm"
          content={'تفاصيل المجموعة'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.productDetails(row.original.id)}>
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              aria-label={'تفاصيل المجموعة'}
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip> */}
        <DeletePopover
          title={`حذف المجموعة`}
          description={`هل متأكد تريد هذف هذه  #${row.original.id} المجموعة ؟`}
          onDelete={() =>
            meta?.handleDeleteRow && meta?.handleDeleteRow(row.original)
          }
        />
      </Flex>
    ),
  }),
];
