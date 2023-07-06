import { useContext } from "react"
import { Header } from "./header"
import { ItemContext } from "../context"
import { NewItem } from "./newItem"
import { ItemList } from "./item-list"
export const Application = () => {
  const { add, items, packedItem, unpackedItem } = useContext(ItemContext)
  return (
    <div className="flex flex-col mx-auto p-10 gap-9 lg:max-w-4xl">
      <Header items={items} />
      <NewItem addItem={add} />
      <div className="flex  justify-between gap-6">
        <ItemList items={unpackedItem} title="Unpacked Items" />
        <ItemList items={packedItem} title="Packed Items" />
      </div>

    </div>
  )
}