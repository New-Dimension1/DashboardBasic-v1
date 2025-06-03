"use client";

import EyeIcon from "@core/components/icons/eye";
import PencilIcon from "@core/components/icons/pencil";
import { ActionIcon, Flex, Tooltip } from "rizzui";
import Link from "next/link";
import cn from "@core/utils/class-names";
import DeletePopover from "../delete-popover";

export default function TableRowActionGroup({
  onDelete,
  editUrl = "#",
  viewUrl = "#",
  deletePopoverTitle = "حذف الدعوة",
  deletePopoverDescription = "هل أنت متأكد تريد حذف الدعوة ؟",
  className,
}: {
  onDelete?: () => void;
  editUrl?: string;
  viewUrl?: string;
  deletePopoverTitle?: string;
  deletePopoverDescription?: string;
  className?: string;
}) {
  return (
    <Flex
      align="center"
      justify="end"
      gap="3"
      className={cn("pe-3", className)}
    >
      {/* <Tooltip size="sm" content="Edit Item" placement="top" color="invert">
        <Link href={editUrl}>
          <ActionIcon
            as="span"
            size="sm"
            variant="outline"
            aria-label="Edit Item"
          >
            <PencilIcon className="size-4" />
          </ActionIcon>
        </Link>
      </Tooltip> */}
      <Tooltip size="sm" content="تفاصيل الدعوة" placement="top" color="invert">
        <Link href={viewUrl}>
          <ActionIcon
            as="span"
            size="sm"
            variant="outline"
            aria-label="View item"
          >
            <EyeIcon className="size-4" />
          </ActionIcon>
        </Link>
      </Tooltip>
      <DeletePopover
        title={deletePopoverTitle}
        description={deletePopoverDescription}
        onDelete={onDelete}
      />
    </Flex>
  );
}
