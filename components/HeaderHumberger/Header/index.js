import { useReducer, useEffect, useState } from "react";

import { AccordionItem } from "./accordion-item";
import { Navbar } from "./navbar";

import { navItems, socialMediaLinks } from "./data";
import { SocialMediaLink } from "./Buttons/social-media";

export const ANIMATION_DURATION = 500
export const ANIMATION_DURATION_CLASS = 'duration-[500ms]'

export function Header() {
  const [isExpanded, toggleExpand] = useReducer((_) => !_, false);
  const [isExpandedDelay, toggleExpandDelay] = useState(isExpanded);

  const [whiteBackground, setWhiteBackground] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleItemClick(i) {
    if (activeIndex === i) setActiveIndex(-1);
    else setActiveIndex(i);
  }

  const genericAccordionStyle =
    `transition-[max-height] ease height ${ANIMATION_DURATION_CLASS}`;

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => toggleExpandDelay(isExpanded), 0);
      setTimeout(() => setWhiteBackground(isExpanded), ANIMATION_DURATION);
    } else {
      toggleExpandDelay(isExpanded);
      setTimeout(() => setWhiteBackground(isExpanded), ANIMATION_DURATION);
    }
  }, [isExpanded]);

  return (
    <header
      className={`mx-auto overflow-hidden ${isExpanded && "bg-[#f5faff]"}`}
    >
      <Navbar isExpanded={isExpanded} onToggleClick={toggleExpand} />

      <nav
        className={` bg-[#f5faff] ${genericAccordionStyle} 
        ${isExpandedDelay && isExpanded ? "max-h-[100rem]" : "max-h-0"} 
        ${whiteBackground && "bg-[#f5faff]"}`}
      >
        <ul className="pb-5">
          {navItems.map((item, i) => (
            <AccordionItem
              key={item.label}
              isActive={i === activeIndex}
              onItemClick={() => handleItemClick(i)}
              item={item}
            />
          ))}
        </ul>
            <div className="pt-[60px]">
            <p className="text-xs text-center">Copyright ©2022 Niagahoster</p>
            </div>
        <ul className="flex gap-x-5 pt-10 pb-10 justify-center">
          {socialMediaLinks.map((item) => (
            <SocialMediaLink key={item.link} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
