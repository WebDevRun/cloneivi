import Link from "next/link";
import { FC } from "react";
import styles from './FooterButton.module.scss';
import cn from 'classnames'
import Image, { ImageProps, StaticImageData } from "next/image";

interface IProps{
    subText?: string;
    text?: string;
    children?: any;
    type: 'square' | 'circle';
    iconSrc?: any;
    iconAlt?: any;
}

export const FooterButton: FC<IProps> = (props) => {
    const { subText, text, type, iconSrc, iconAlt, ...rest } = props

    const mainCl = cn(
        styles.btn,
        styles[type]
    )

    return (
        <Link className={mainCl} href='/'>
            <div className={styles.btnContent}>
                <Image width={20} height={20} src={iconSrc} alt={iconAlt} />
                {text &&
                    <div style={subText ? { top: '4px' } : {}}>
                        <p className={styles.subText}>{subText}</p>
                        {text}
                    </div>
                }
            </div>
        </Link>
    );
};

export default FooterButton;