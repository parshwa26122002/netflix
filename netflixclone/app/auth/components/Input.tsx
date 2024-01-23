interface InputProps {
    id: string;
    value: string;
    type?: string;
    label: string;
    onChange: any;
}

export default function Input(props: InputProps) {
    return (
        <div className="relative">
            <input id={props.id} value={props.value} type={props.type} onChange={props.onChange} className="block rounded-md px-6 pt-6 pb-1 w-full bg-neutral-700 text-white text-sm appearance-none focus:outline-none focus:ring-0 peer" placeholder=" "/>
            <label htmlFor={props.id} className="absolute text-sm text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">{props.label}</label>
        </div>
    )
}