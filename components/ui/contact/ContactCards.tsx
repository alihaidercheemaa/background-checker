"use client";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "sonner";
import { Mail, Phone, Pin, Smartphone } from 'lucide-react';

type LinksType = {
    id: number;
    label: string;
    subLabel: string;
    img: JSX.Element;
    copy: boolean;
};

const links: LinksType[] = [
    {
        id: 1,
        label: "address",
        subLabel: "4 Lily Court, Monroe, NJ 08831, USA",
        img: <Pin size={36} />,
        copy: false,
    },
    {
        id: 2,
        label: "email",
        subLabel: "info@background.checker",
        img: <Mail size={36}  />,
        copy: true,
    },
    {
        id: 3,
        label: "phone",
        subLabel: "+1 1234567891",
        img: <Phone size={36}  />,
        copy: true,
    },
    {
        id: 4,
        label: "mobile",
        subLabel: "+1 1234567891",
        img: <Smartphone size={36}  />,
        copy: true,
    },
];

const ContactCards = () => {
    const [copiedText, copy] = useCopyToClipboard();

    const handleCopy = (text: string) => () => {
        copy(text)
            .then(() => {
                toast.success("Copied!");
                console.log(copiedText);
            })
            .catch((error: unknown) => {
                console.error("Failed to copy!", error);
            });
    };

    return (
        <section className="container py-20">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                {links.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#ECEDF1] py-9 px-8 rounded-2xl"
                    >
                        <div className="flex justify-start items-center">
                            {item.img}
                        </div>
                        <div className="mt-6 max-w-[218px]">
                            <p className="font-normal text-midNight text-base tracking-wide">
                                {item.subLabel}
                            </p>
                        </div>
                        <div className="mt-3">
                            {item.copy && (
                                <p
                                    className="cursor-pointer text-primary-100 font-medium text-base tracking-wide"
                                    onClick={handleCopy(item.subLabel)}
                                >
                                    Copy
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactCards;
