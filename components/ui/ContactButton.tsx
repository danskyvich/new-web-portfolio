const Line = ({className}: {className: string}) => {
    return <div className={`absolute border-0 bg-white ${className}`}/>
}

export default function ContactButton({text}: {text: string}) {
    return (
      <div className="flex h-full w-fit relative items-center justify-center text-[0.9rem] font-bold bg-[repeating-linear-gradient(315deg,var(--color-line)_0,var(--color-line)_1px,transparent_1px,transparent_50%)] bg-size-[8px_8px] px-5 py-3 hover:cursor-pointer ring ring-inset ring-white">
        <Line className="left-0 -top-1.5 w-px h-2" />
        <Line className="h-px w-2 -left-1.5 top-0" />
        <Line className="w-2 h-px -right-1.5 top-0" />
        <Line className="w-px h-2 right-0 -top-1.5" />
        <a href="" className="text-white font-light">
          {text}
        </a>
        <Line className="bottom-0 h-px -left-1.5 w-2" />
        <Line className="h-px w-2 -right-1.5 bottom-0" />
        <Line className="right-0 -bottom-1.5 w-px h-2" />
        <Line className="left-0 -bottom-1.5 w-px h-2" />
      </div>
    );
}