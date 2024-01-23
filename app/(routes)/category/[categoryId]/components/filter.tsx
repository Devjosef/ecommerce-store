"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey,
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
        ...current,
        [valueKey]: id
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });

        router.push(url);
    }

    return (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex flex-wrap gap-2">
            {data.map((filter) => (
              <div key={filter.id} className="flex items-center">
                <Button
                  className={cn(
                    'rounded-md text-sm px-4 py-2 border border-gray-300 transition-all duration-300',
                    selectedValue === filter.id
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  )}
                  onClick={() => onClick(filter.id)}
                >
                  {filter.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      );
    };
 
export default Filter;