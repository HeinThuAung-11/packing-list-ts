import { useContext } from "react"
import { Header } from "./header"
import { ItemContext } from "../context"
import { NewItem } from "./newItem"
import { ItemList } from "./item-list"
import { Markasunpacked } from "./markasunpacked"
export const Application = () => {
  const { add, items, packedItem, unpackedItem, markallasunpacked } = useContext(ItemContext)
  return (
    <div className="flex flex-col mx-auto p-10 gap-9 lg:max-w-6xl">
      <Header items={items} />
      <NewItem addItem={add} />
      <div className="flex flex-col gap-8 md:flex-row">
        <ItemList items={unpackedItem} title="Unpacked Items" />
        <ItemList items={packedItem} title="Packed Items" />
      </div>
      <Markasunpacked customClick={markallasunpacked} />
    </div>
  )
}