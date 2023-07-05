import { useState } from "react";

type NewItemProps = {
  addItem: (name: string) => void;
};
export const NewItem = ({ addItem }: NewItemProps) => {
  const [newItem, setNewItem] = useState<string>('')
  return (<form onSubmit={(e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  }}>
    <label htmlFor="name">New Item Name</label>
    <input type="text" name="name" id="name" value={newItem}
      onChange={(e) => setNewItem(e.target.value
      )} />

  </form>)
}