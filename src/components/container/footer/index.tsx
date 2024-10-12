import Image from "next/image";

const AppFooter = () => {
    const urls = [
        { label: "Dune", value: "https://dune.com/upchaindao/decert" },
        { label: "Twitter", value: "https://twitter.com/decertme" },
        { label: "Discord", value: `https://discord.gg/kuSZHftTqe` },
        { label: "Github", value: "https://github.com/decert-me" },
    ];

    return (
        <div className="text-black ">
            <div className="flex justify-between content-center px-[240px] pt-[44px] pb-[54px]">
                {/* logo info */}
                <div className="text-left">
                    <div className="w-[130px] h-[30px] relative">
                        <Image src="/img/logo_white.png" alt="logo" />
                    </div>
                    <p className="mt-[12px] text-[14px] font-[600] leading-[16px]">You are what you build.</p>
                </div>
                {/* right icon */}
                <div>
                    {urls.map((e, index) => (
                        <a key={e.value} className={`font-[600] text-white hover:underline-offset-1 ${index+1 === urls.length ? "" : "mr-[32px]"}`} href={e.value} target="_blank">
                            {e.label}
                        </a>
                    ))}
                </div>
            </div>
            {/* <Divider className="m-0 border border-[#1D1D1D]" /> */}
            <div className="mt-[41px] mb-[53px] mx-auto text-[16px] font-[600] leading-[22px]">
                <span>© 2024 DeCert.me | </span>
                <a href="https://beian.miit.gov.cn/" target="_blank">
                    <span style={{ color: "#fff" }}>
                        粤ICP备17140514号-3
                    </span>
                </a>
            </div>
        </div>
    );
}

export default AppFooter;