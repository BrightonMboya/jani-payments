"use client";

import { cn } from "~/utils/utils";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export function SettingsNav({
  items,
}: {
  items: Array<{ path: string; label: string }>;
}) {
  const pathname = usePathname();
  const params = useParams();

  return (
    <nav className="py-4">
      <ul className="flex space-x-6 text-sm">
        {items.map((item) => (
          <Link
            prefetch
            key={item.path}
            href={`/dashboard/${params.accountSlug}/${item.path}`}
            className={cn(
              "text-[#606060]",
              pathname === item.path &&
                "font-medium text-primary underline underline-offset-8",
            )}
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
