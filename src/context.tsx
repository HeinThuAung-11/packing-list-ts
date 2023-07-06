import { PropsWithChildren, createContext, useState } from "react";
import { createItem, filterItem, getInitialItems, updateItem } from "./libs/items";

type ItemState = {
  add: (name: string) => void,
  items: Item[],
  packedItem: Item[];
  unpackedItem: Item[];
  update: (id: string, edit: Partial<Item>) => void;
}
export const ItemContext = createContext({} as ItemState)

const ItemProvide = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>(getInitialItems())

  const add = (name: string) => {
    const item = createItem(name)
    setItems([...items, item])
  }
  const update = (id: string, edit: Partial<Item>) => {
    console.log('wrong', id, edit)
    const item = updateItem(items, id, edit)
    setItems(item)
  }
  const packedItem = filterItem(items, { packed: true })
  const unpackedItem = filterItem(items, { packed: false })
  const value = {
    add,
    items,
    packedItem,
    unpackedItem,
    update
  }
  return <ItemContext.Provider value={value}>{children} </ItemContext.Provider>
}

export default ItemProvide