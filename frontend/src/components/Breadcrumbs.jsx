import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Reusable breadcrumb navigation.
 *
 * Usage:
 *   <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'BWI to Washington DC' }]} />
 *
 * The "Home" crumb is always rendered first. The final item is rendered as
 * plain text (current page) when it has no `to` prop.
 */
const Breadcrumbs = ({ items = [] }) => {
  const trail = [{ label: 'Home', to: '/' }, ...items];

  return (
    <nav
      className="text-sm text-gray-500 mb-6"
      aria-label="Breadcrumb"
      data-testid="breadcrumbs"
    >
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
