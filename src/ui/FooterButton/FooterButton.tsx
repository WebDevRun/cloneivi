import Link from "next/link";
import { FC } from "react";
import styles from './FooterButton.module.scss';
import cn from 'classnames'

interface IProps {
    subText?: string;
    text?: string;
    children?: any;
    type: 'square' | 'circle';
}

const FooterButton: FC<IProps> = (props) => {
    const { subText, text, children, type } = props

    const mainCl = cn(
        styles.btn,
        styles[type]
    )

    return (
        <Link className={mainCl} href='/'>
            <div className={styles.btnContent}>
                {children}
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