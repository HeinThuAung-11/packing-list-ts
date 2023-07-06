import { useContext, useState } from "react"
import { ItemContext } from "../context"
import clsx from 'clsx'
type ItemProp = {
  itemId: string
  item: Item,
}
export const Item = ({ itemId, item }: ItemProp) => {
  const { update } = useContext(ItemContext);
  const [editing, setEditing] = useState(false);
  return <li key={itemId}>
    <input type="checkbox" id={itemId} className="cursor-pointer accent-purple-700 mr-3"
      onChange={() => update(itemId, { packed: !item.packed })}
      checked={item.packed} />
    <label
      htmlFor={itemId}
      className={clsx({ hidden: editing, 'cursor-pointer': true })}
    >
      {item.name}
    </label>

  </li>
}