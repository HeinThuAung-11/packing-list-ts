import { useContext } from "react"
import { Header } from "./header"
import { ItemContext } from "../context"
import { NewItem } from "./newItem"
export const Application = () => {
  const { add, items } = useContext(ItemContext)
  return (
    <div className="flex flex-col mx-auto p-10 gap-9 lg:max-w-4xl">
      <Header items={items} />
      <NewItem addItem={add} />
    </div>
  )
}