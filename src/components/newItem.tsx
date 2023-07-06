import { useState } from "react";

type NewItemProps = {
  addItem: (name: string) => void;
};
export const NewItem = ({ addItem }: NewItemProps) => {
  const [newItem, setNewItem] = useState<string>('')
  return (<form onSubmit={(e) => {
    e.preventDefault();
    if (newItem.length > 0) {
      addItem(newItem);
      setNewItem('');
    }
  }}
  >
    <label htmlFor="name">New Item Name</label>
    <div className="flex h-[40px]">
      <input type="text" name="name" id="name" value={newItem}
        className="border-2 border-purple-700 w-full"
        onChange={(e) => setNewItem(e.target.value)} />
      <button className="w-[200px] bg-purple-700" type="submit">+ Add New Item</button>
    </div>


  </form>)
}