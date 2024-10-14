"use client"
import Image from "next/image";
import { useTheme } from "next-themes";
import { CustButton } from "@/components/ui/custom";



const ThemeSwitcher = () => {

    const { setTheme } = useTheme();

    return (
        <div>
            <CustButton className="p-[9px] bg-transparent border border-gold hover:bg-transparent">
                <Image className="dark:hidden" src={`/icon/theme_light.png`} width={20} height={20} alt="theme" onClick={() => setTheme("dark")} />
                <Image className="hidden dark:block" src={`/icon/theme_dark.png`} width={20} height={20} alt="theme" onClick={() => setTheme("light")} />
            </CustButton>
        </div>
    )
}


export default ThemeSwitcher;