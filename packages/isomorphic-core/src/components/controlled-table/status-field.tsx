"use client";

import { Select, type SelectProps, type SelectOption } from "rizzui";
import cn from "@core/utils/class-names";

export default function StatusField({
  placeholder = "اختر الحالة",
  dropdownClassName,
  ...props
}: SelectProps<SelectOption>) {
  return (
    <Select
      inPortal={false}
      placeholder={placeholder}
      selectClassName="h-9 min-w-[150px]"
      dropdownClassName={cn("p-1.5 !z-0", dropdownClassName)}
      optionClassName="h-9"
      {...props}
    />
  );
}
