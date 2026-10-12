import React from 'react';

interface CategoryItem {
  id: string;
  title: string;
  linkText: string;
  href: string;
  image: string;
}

const categories: CategoryItem[] = [
  {
    id: 'new-drops',
    title: 'NEW DROPS',
    linkText: 'SHOP NOW',
    href: '/fashion-ecommerce-ai',
    image: '/cat_new_drops_full.webp',
  },
  {
    id: 'oversized-tees',
    title: 'OVERSIZED TEES',
    linkText: 'SHOP NOW',
    href: '/fashion-ecommerce-ai',
    image: '/cat_oversized_tees_full.webp',
  },
  {
    id: 'graphic-tees',
    title: 'GRAPHIC TEES',
    linkText: 'SHOP NOW',
    href: '/fashion-ecommerce-ai',
    image: '/cat_graphic_tees_full.webp',
  },
  {
    id: 'essentials',
    title: 'ESSENTIALS',
    linkText: 'SHOP NOW',
    href: '/fashion-ecommerce-ai',
    image: '/cat_essentials_full.webp',
  },
];

const tickerItems = [
  'PREMIUM HEAVYWEIGHT COTTON',
  'OVERSIZED STREETWEAR FIT',
  'FAST SHIPPING',
  'EASY 7-DAY RETURNS',
];

interface CategoryBannersProps {
  onSelectCategory?: (id: string) => void;
}

const CategoryBanners: React.FC<CategoryBannersProps> = ({ onSelectCategory }) => {
  return (
    <section className="w-full bg-[#000000] text-white select-none">
      {/* Top Value Proposition Ticker / Ribbon matching DRFT DEON reference */}
      <div 
        style={{
          width: '100%',
          backgroundColor: '#000000',
          borderTop: '1px solid #171717',
          borderBottom: '1px solid #171717',
          height: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 16px',
        }}
      >
        <div 
          style={{
            width: '100%',
            maxWidth: '1080px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {tickerItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '9.5px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  whiteSpace: 'nowrap',
                  lineHeight: '1',
                }}
              >
                {item}
              </span>
              {/* Subtle 1px vertical divider */}
              {idx < tickerItems.length - 1 && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '1px',
                    height: '10px',
                    backgroundColor: '#262626',
                    margin: '0 8px',
                    flexShrink: 0,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 4 Column Category Hero Showcase */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-[#000000]">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat.id)}
            className="group relative h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] w-full overflow-hidden cursor-pointer border-b sm:border-b-0 sm:border-r border-[#151515] last:border-r-0"
          >
            {/* Background Image with hover zoom & dark aesthetic */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `url(${cat.image})`,
                filter: 'brightness(0.92)',
              }}
            />

            {/* Subtle atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/35 group-hover:from-black/60 group-hover:via-black/10 transition-colors duration-500" />

            {/* Centered Editorial Title & Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
              <h3 className="text-2xl sm:text-3xl md:text-[28px] lg:text-[30px] font-black tracking-[0.14em] uppercase text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:-translate-y-1">
                {cat.title}
              </h3>
              
              <div className="mt-3 flex items-center justify-center">
                <span className="text-[11px] sm:text-[12px] tracking-[0.25em] font-semibold uppercase text-white/90 border-b border-white/60 pb-0.5 group-hover:border-white group-hover:text-white transition-all duration-300">
                  {cat.linkText}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBanners;
