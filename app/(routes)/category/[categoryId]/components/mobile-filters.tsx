"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton  from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Color, Size } from "@/types";

import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[],
  colors: Color[],
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colors
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog open={open} as="div" className="fixed inset-0 z-50 lg:hidden" onClose={onClose}>
        {/* Background color and opacity */}
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

        {/* Dialog position */}
        <div className="fixed inset-0 flex items-end justify-end px-4 py-6">
          <Dialog.Panel className="relative w-full max-w-md bg-white shadow-lg rounded-t-lg">
            {/* Close button */}
            <div className="absolute top-0 right-0 p-4">
              <IconButton icon={<X size={20} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;