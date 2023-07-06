type HeaderProp = {
  items: Item[]
}
export const Header = ({ items }: HeaderProp) => {
  return (<header className="flex flex-col gap-y-6">
    <h1 className="font-semibold text-xl">Packing List</h1>
    <p>{items.length} {items.length === 1 ? 'item' : 'items'}</p>
  </header>)
}