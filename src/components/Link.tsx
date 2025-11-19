import { Link as RouterLink, useParams } from 'react-router-dom';
import { type Locale } from '@/i18n';

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, ...props }: LinkProps) {
  const { locale } = useParams<{ locale: Locale }>();
  const currentLocale = locale || 'en';
  
  // If href starts with /, prepend locale
  const localizedHref = href.startsWith('/') 
    ? `/${currentLocale}${href}` 
    : href;
  
  // External links
  if (href.startsWith('http') || href.startsWith('mailto:')) {
    return <a href={href} {...props}>{children}</a>;
  }
  
  return (
    <RouterLink to={localizedHref} {...props}>
      {children}
    </RouterLink>
  );
}

