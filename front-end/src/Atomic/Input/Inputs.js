export function Inputs({type,place,func,id,name}){
    return(
        <div>
            <input className='rounded-[15px] border p-[5px] my-[10px] outline-[#8854d0] hover:border-[#8854d0] shadow-inner' 
                type={type} placeholder={place} onChange={func} id={id} name={name}/>
        </div>
    )
}