import { useState } from "react"
import { Item } from "./item"
import { filterItem } from "../libs/items"

type ItemListProp = {
  title: string
  items: Item[]
}
export const ItemList = ({ title, items }: ItemListProp) => {
  const isEmpty = !items.length
  const [filterText, setFilterText] = useState('')
  const filter = filterItem(items, { name: filterText })
  return (
    <div className="mt-6 border-4 p-4 border-purple-700 border-double min-h-[800px] w-full">
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      <input type="text" className="border-2 border-purple-700 w-full mb-4 bg-purple-700 pl-4"
        placeholder="Filter"
        onChange={(e) => setFilterText(e.target.value)} />
      <ul className="flex flex-col gap-2">
        {filter.map((item) => {
          return <Item itemId={item.id} item={item} key={item.id} />
        })}
      </ul>
      <p> {isEmpty && 'No Items;'} </p>
    </div>
  )
}