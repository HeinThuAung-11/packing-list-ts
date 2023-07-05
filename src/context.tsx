import { PropsWithChildren, createContext, useState } from "react";
import { createItem, getInitialItems } from "./libs/items";

type ItemState = {
  add: (name: string) => void,
  items: Item[]
}
export const ItemContext = createContext({} as ItemState)

const ItemProvide = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>(getInitialItems())

  const add = (name: string) => {
    const item = createItem(name)
    setItems([...items, item])
  }

  const value = {
    add,
    items
  }
  return <ItemContext.Provider value={value}>{children} </ItemContext.Provider>
}

export default ItemProvide