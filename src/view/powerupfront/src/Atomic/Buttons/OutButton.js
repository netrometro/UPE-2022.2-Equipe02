export function OutButton({name,id, func,type}){
    return(
        <button className="text-[#ff4d4d] border border-[#ff4d4d] duration-500 w-[100px] h-[40px] rounded-[12px] shadow-2xl hover:text-[#fff]  hover:bg-[#ff4d4d]" type={type} id={id} onClick={func}>{name}</button>
    )
}