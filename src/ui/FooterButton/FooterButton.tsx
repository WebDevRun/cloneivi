import Link from "next/link";
import { FC } from "react";
import styles from './FooterButton.module.scss';
import cn from 'classnames'
import Image, { ImageProps, StaticImageData } from "next/image";

interface IProps {
    subText?: string;
    text?: string;
    type: 'square' | 'circle';
    iconSrc?: string;
    iconAlt?: string;
    href: string;
}

export const FooterButton: FC<IProps> = ({ subText, text, type, iconSrc = '', iconAlt = '', href }) => {
    const mainCl = cn(
        styles.btn,
        styles[type]
    )

    return (
        <Link className={mainCl} href={href}>
            <div className={styles.btnContent}>
                {iconSrc && iconAlt &&
                    <Image width={20} height={20} src={iconSrc} alt={iconAlt} />
                }
                {text &&
                    <div className={styles.buttonText} style={subText ? { top: '4px' } : {}}>
                        <p className={styles.subText}>{subText}</p>
                        {text}
                    </div>
                }
            </div>
        </Link>
    );
};