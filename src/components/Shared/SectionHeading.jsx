import React from 'react'

const SectionHeading = ({ badge, title }) => {
return (
    <div className="mb-8 flex flex-col items-center text-center sm:mb-12">
      {badge && (
        <span className="inline-flex items-center uppercase px-3.5 py-1 text-xs font-bold text-(--primary) sm:text-sm">
          {badge}
        </span>
      )}

      {title && (
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      )}
    </div>
  );
}

export default SectionHeading