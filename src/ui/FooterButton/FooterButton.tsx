import Link from "next/link";
import { FC } from "react";
import cl from './FooterButton.module.scss';

interface IProps {
    miniInfo?: string;
    text?: string;
    children?: any;
    type: string;
}

const FooterButton: FC<IProps> = (props) => {
    const { miniInfo, text, children, type } = props

    return (
        <Link style={type === 'square' ? { borderRadius: '8px' } : { borderRadius: '50%' }} className={cl.btn} href='/'>
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