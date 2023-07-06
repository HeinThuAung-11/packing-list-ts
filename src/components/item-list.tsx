import { Item } from "./item"

type ItemListProp = {
  title: string
  items: Item[]
}
export const ItemList = ({ title, items }: ItemListProp) => {
  const isEmpty = !items.length
  return (
    <div className="mt-6 border-4 p-4 border-purple-700 border-double min-w-[400px] min-h-[800px]">
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          return <Item itemId={item.id} item={item} key={item.id} />
        })}
      </ul>
      <p> {isEmpty && 'No Items;'} </p>
    </div>
  )
}