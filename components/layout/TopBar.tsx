import Image from "next/image"
import ContactButton from "../ui/ContactButton";

export default function TopBar() {
    const items = [
        {name: "Home", link: "/"},
        {name: "Works", link: "/"},
        {name: "About Me", link: "/"},
    ]
    return (
      <div className="flex bg-(--color-brand-purple) w-full h-fit justify-between items-center px-5 py-5 mt-5 ">
        <div className="flex gap-2.5 w-[50%] items-center justify-start">
          <Image src="favicon.svg" alt="alt" width={25} height={25} />
          <p className="text-black tracking-tighter whitespace-nowrap font-bold text-xl">
            Danilo Pelin
          </p>
        </div>

        <div className="flex w-[50%] h-full gap-5">
          <div className="flex items-center justify-end w-full text-[0.95rem] font-light flex gap-10">
            {items.map((item, key) => (
              <div className="tracking-tighter whitespace-nowrap" key={key}>
                <a
                  href={item.link}
                  className="hover:text-(--color-text-secondary)"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          <ContactButton text={"Contacts"}/>
        </div>
      </div>
    );
}