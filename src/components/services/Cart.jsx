const Cart = ({ title, description, listHeader, list }) => {
  return (
    <div className="flex flex-col text-left bg-[#D4D3EA] rounded-lg shadow-md p-6 max-w-xs min-w-[280px] ">
      <h2 className="italic  text-[#5B4739] text-xl mb-2">{title}</h2>
      <p className="text-[#5B4739] mb-4">{description}</p>
      <h4 className="font-bold text-[#5B4739] ">{listHeader}</h4>
      <ul className="list-disc ml-5 text-[#5B4739] mb-2">
        {list.map((item, idx) => (
          <li key={idx} className="mb-1 leading-snug">
            {item}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-auto rounded-full border border-[#F98948] px-4 py-1 text-[#F98948] text-sm hover:bg-[#F98948] hover:text-white transition-colors"
      >
        Know more
      </button>
    </div>
  );
};

export default Cart;
