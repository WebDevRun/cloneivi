import Link from "next/link";
import { FC } from "react";
import cl from './FooterButton.module.scss';
import cn from 'classnames'

interface IProps {
    miniInfo?: string;
    text?: string;
    children?: any;
    type: string;
}

const FooterButton: FC<IProps> = (props) => {
    const { miniInfo, text, children, type } = props

    const mainCl = cn(
        cl.btn,
        cl[type]
    )

    return (
        <Link className={mainCl} href='/'>
            <div className={cl.btnContent}>
                {children}
                {text &&
                    <div style={miniInfo ? { top: '4px' } : {}}>
                        <p className={cl.miniInfo}>{miniInfo}</p>
                        {text}
                    </div>
                }
            </div>
        </Link>
    );
};

export default FooterButton;