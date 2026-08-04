import type { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
}

export default function MenuItem({item}: MenuItemProps) {
  return (
    <button className="border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between border-2 rounded-md">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
