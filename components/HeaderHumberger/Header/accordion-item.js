import Link from "next/link";
import { ANIMATION_DURATION_CLASS } from ".";

import { AccordionSubItem } from "./accordion-sub-item";

export function AccordionItem({ isActive, item, onItemClick }) {
  const hasChildren = item.children !== null;
``
  const genericChevronStyle = `transition ease transform ${ANIMATION_DURATION_CLASS}`;
  const genericAccordionStyle = `transition-[max-height] ease height ${ANIMATION_DURATION_CLASS}`;
  const genericHeadingStyle = 'font-bold text-lg text-slate-600'

  return (
    <li className="overflow-hidden pt-5">
      {hasChildren ? (
        <button
          onClick={onItemClick}
          className="flex items-center justify-between w-full  px-6 pr-9"
        >
          <h2 className={genericHeadingStyle}>{item.label}</h2>
          
          <img
            className={`${genericChevronStyle} ${isActive && "rotate-180"}`}
            src="/icons/ic_chevron-down.svg"
          />
        </button>
      ) : (
        <Link href={item.link}>
          <h2 className={`${genericHeadingStyle} pl-6 pt-4`}>{item.label}</h2>
        </Link>
      )}

      {hasChildren && (
        <ul
          className={`${genericAccordionStyle} ${
            isActive ? "max-h-[32rem]" : "max-h-0"
          } mx-5 pt-5 `}
        >
          {item.children.map((child) => (
            <AccordionSubItem key={child.label} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
