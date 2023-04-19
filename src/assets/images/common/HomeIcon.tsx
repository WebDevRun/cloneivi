import { FC } from "react";

interface HomeIconProps{
    fill: string;
}

const HomeIcon: FC<HomeIconProps> = ({fill}) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
            <title>home_20__0</title>
            <path fill={fill} d="M19.111 24h-6.222q-0.889 0-1.333-0.444t-0.444-1.111 0.444-1.111 1.333-0.444h6.222q0.889 0 1.333 0.444t0.444 1.111-0.444 1.111-1.333 0.444zM30.222 21.778v-7.111q0-3.556-3.111-6.222l-4.889-5.333q-6.222-6.222-12.444 0l-4.889 5.333q-3.111 2.667-3.111 6.222v7.111q0 4 2.222 6.222t6.222 2.222h11.556q4 0 6.222-2.222t2.222-6.222zM20 5.333l4.889 5.333q2.222 1.778 2.222 4v7.111q0 2.667-1.333 4t-4 1.333h-11.556q-2.667 0-4-1.333t-1.333-4v-7.111q0-2.222 2.222-4l4.889-5.333q2.222-2.222 4-2.222t4 2.222z"></path>
        </svg>
    );
};

export default HomeIcon;