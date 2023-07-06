import { PropsWithChildren, createContext, useState } from "react";
import { createItem, deleteItem, filterItem, getInitialItems, updateItem } from "./libs/items";

type ItemState = {
  add: (name: string) => void,
  items: Item[],
  packedItem: Item[];
  unpackedItem: Item[];
  update: (id: string, edit: Partial<Item>) => void;
  remove: (id: string) => void;
  markallasunpacked: () => void;
}
export const ItemContext = createContext({} as ItemState)

const ItemProvide = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>(getInitialItems())

  const add = (name: string) => {
    const item = createItem(name)
    setItems([...items, item])
  }
  const update = (id: string, edit: Partial<Item>) => {
    setItems(updateItem(items, id, edit))
  }
  const remove = (id: string) => {
    setItems(deleteItem(items, id))
  }
  const packedItem = filterItem(items, { packed: true })
  const unpackedItem = filterItem(items, { packed: false })
  const markallasunpacked = () => {
    setItems(items.map((item) => ({ ...item, packed: false })))
  }
  const value = {
    add,
    items,
    packedItem,
    unpackedItem,
    update,
    remove,
    markallasunpacked
  }
  return <ItemContext.Provider value={value}>{children} </ItemContext.Provider>
}

export default ItemProvide