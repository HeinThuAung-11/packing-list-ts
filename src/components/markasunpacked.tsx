type markProp = {
  customClick: () => void
}
export const Markasunpacked = ({ customClick }: markProp) => {
  return <button onClick={customClick}
    className="border-2 border-purple-700">Mark All As Unpacked.</button>
}