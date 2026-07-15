import type { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
}

export default function MenuItem({item}: MenuItemProps) {
  return (
    <>
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </>
  )
}
