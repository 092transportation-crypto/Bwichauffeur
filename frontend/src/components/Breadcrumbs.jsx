import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { ChevronRight, Home } from 'lucide-react';

const ORIGIN = 'https://www.bwichauffeur.com';

/**
 * Reusable breadcrumb navigation.
 *
 * Usage:
 *   <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'BWI to Washington DC' }]} />
 *
 * The "Home" crumb is always rendered first. The final item is rendered as
 * plain text (current page) when it has no `to` prop.
 */
const Breadcrumbs = ({ items = [], schema = true }) => {
  const { pathname } = useLocation();
  const trail = [{ label: 'Home', to: '/' }, ...items];
  // BreadcrumbList JSON-LD. Pass schema={false} on pages that emit their own.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `${ORIGIN}${item.to ? (item.to === '/' ? '/' : item.to) : pathname.replace(/(.)\/+$/, '$1')}`,
    })),
  };

  return (
    <nav
      className="text-sm text-gray-500 mb-6"
      aria-label="Breadcrumb"
      data-testid="breadcrumbs"
    >
      {schema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
      )}
      <ol className="flex flex-wrap items-center gap-1">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center">
              {i === 0 && <Home className="h-3.5 w-3.5 mr-1 text-gray-500" aria-hidden="true" />}
              {!isLast && item.to ? (
                <Link
                  to={item.to}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-[#D4AF37] font-medium' : 'text-gray-500'}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="h-3.5 w-3.5 mx-1.5 text-gray-600" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
