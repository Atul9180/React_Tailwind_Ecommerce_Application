interface propsType{
    size:string;
}

const CartCountBadge:React.FC<propsType> = ({size}) => {
  return (
    <div className={`absolute bg-red-500 text-white text-[14px] ${size} -right-2.5 -top-1 grid place-items-center rounded-full `}>0</div>
  )
}

export default CartCountBadge