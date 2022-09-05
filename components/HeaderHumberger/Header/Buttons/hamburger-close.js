import { useEffect, useState } from "react";
import { ANIMATION_DURATION, ANIMATION_DURATION_CLASS } from "..";

export function HamburgerCloseButton({
  isOpen: isOpenFromParent,
  onClick: onClickFromParent,
}) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [isOpenDelayed, setIsOpenDelayed] = useState(isOpenFromParent);
  const genericHamburgerLine = `h-[2px] w-6 my-1 rounded-full transition ease transform ${ANIMATION_DURATION_CLASS}`;

  useEffect(() => {
    setTimeout(() => setIsOpenDelayed(isOpenFromParent), 0)
    setTimeout(() => setIsButtonDisabled(false), ANIMATION_DURATION)
  }, [isOpenFromParent])

  function handleClick() {
    setIsButtonDisabled(true)
    onClickFromParent();
  }

  return (
    <button
      className={`flex flex-col h-12 w-12     border-[1px] border-${
        isOpenDelayed || isOpenFromParent ? "[#007aff]" : "white"
      } rounded-full justify-center items-center group`}
      disabled={isButtonDisabled}
      onClick={handleClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpenDelayed || isOpenFromParent
            ? "rotate-45 translate-y-2 group-hover:opacity-100 "
            : "group-hover:opacity-100 translate-y-1 bg-white "
        } ${isOpenFromParent && "bg-[#007aff] border-[#007aff]"}`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpenDelayed || isOpenFromParent ? "opacity-0" : "group-hover:opacity-100 bg-white "
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpenDelayed || isOpenFromParent
            ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
            : "group-hover:opacity-100 -translate-y-1 bg-white"
        } ${isOpenFromParent && "bg-[#007aff]  "}`}
      />
    </button>
  );
}
