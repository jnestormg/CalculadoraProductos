import type { MenuITem } from "../../types"
type ItemsProps = {
  item: MenuITem,
  addItem: (item: MenuITem) => void
}

const Menu = ({ item, addItem }: ItemsProps) => {
  return (
    <div className="">
      <button
        onClick={() => addItem(item)}
        className="border-2 border-teal-900 w-[100%] p-5
     hover:bg-teal-800 hover:text-white flex justify-between mb-2 rounded-md">
        <h1>{item.name}</h1>
        <h2 className="font-bold">${item.price}</h2>
      </button>
    </div>
  )
}

export default Menu
