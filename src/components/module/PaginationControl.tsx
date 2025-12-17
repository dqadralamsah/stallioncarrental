'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type Props = {
  page: number;
  totalpages: number;
  onChange: (pages: number) => void;
};

export default function PaginationControl({ page, totalpages, onChange }: Props) {
  if (totalpages <= 1) return null;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onChange(Math.max(page - 1, 1));
            }}
          />
        </PaginationItem>

        {Array.from({ length: totalpages }).map((_, i) => {
          const p = i + 1;
          return (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(e) => {
                  e.preventDefault();
                  onChange(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onChange(Math.min(page + 1, totalpages));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
