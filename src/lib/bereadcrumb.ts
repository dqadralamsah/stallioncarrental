export type BreadcrumbsItem = {
  label: string;
  href: string;
  isCurrent: boolean;
};

export default function buildBreadcrumbs(pathname: string): BreadcrumbsItem[] {
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbsItem[] = [
    { label: 'Home', href: '/', isCurrent: pathname === '/' },
  ];

  segments.forEach((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);

    breadcrumbs.push({
      label,
      href,
      isCurrent: index === segments.length - 1,
    });
  });

  return breadcrumbs;
}
