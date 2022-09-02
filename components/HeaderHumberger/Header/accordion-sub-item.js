import Link from "next/link";

export function AccordionSubItem({ item }) {
  return (
    <Link href={item.link}>
      <a className="flex pl-4 items-center  gap-x-3 pt-6  bg-white rounded-lg hover:">
        <img className="min-w-[2.5rem] max-w-[2.5rem]" src={item.icon} />
        <div>
          <span className="font-semibold">{item.label}</span>
          <br />
          <span className="text-slate-500">{item.description}</span>
        </div>
      </a>
    </Link>
  );
}
