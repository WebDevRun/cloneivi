import Link from "next/link";
import { FC } from "react";
import styles from './FooterLink.module.scss';
import cn from 'classnames'
import Image from "next/image";

interface FooterLinkProps {
    subText?: string;
    text?: string;
    type: 'square' | 'circle';
    iconSrc?: string;
    iconAlt?: string;
    href: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ subText, text, type, iconSrc, iconAlt, href }) => {
    const mainCl = cn(
        styles.btn,
        styles[type]
    )

    return (
        <Link style={subText ? {padding: '5px 10px'} : {}} className={mainCl} href={href}>
            <div className={styles.btnContent}>
                {iconSrc && iconAlt &&
                    <Image width={20} height={20} src={iconSrc} alt={iconAlt} />
                }
                {text &&
                    <div>
                        <p className={styles.subText}>{subText}</p>
                        {text}
                    </div>
                }
            </div>
        </Link>
    );
};