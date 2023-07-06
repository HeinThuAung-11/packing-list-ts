import { useContext, useState } from "react"
import { ItemContext } from "../context"
import clsx from 'clsx'
type ItemProp = {
  itemId: string
  item: Item,
}
export const Item = ({ itemId, item }: ItemProp) => {
  const { update, remove } = useContext(ItemContext);
  const [editing, setEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(item.name)
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
    <input type="text" value={name}
      className={clsx({ hidden: !editing }, 'w-[200px]', 'border-2', 'border-purple-700')}
      onChange={(e) => setName(e.target.value)} />
    {!editing ?
      <button className="ml-4 border-2
        border-purple-700 w-20
        hover:bg-purple-700"
        onClick={() => setEditing(!editing)}>
        Edit
      </button> :
      <button className="ml-4 border-2
        border-purple-700 w-20
        hover:bg-purple-700"
        onClick={() => {
          update(itemId, { name });
          setEditing(!editing);
        }}>
        Save
      </button>}

    <button onClick={() => remove(itemId)}
      className="ml-4 border-2 border-rose-700 w-20 hover:bg-rose-700">Delete</button>

  </li>
}