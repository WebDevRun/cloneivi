import { FC } from "react";

interface CatalogIconProps {
    fill: string;
}

const CatalogIcon: FC<CatalogIconProps> = ({fill}) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
            <title>catalog_20__0</title>
            <path fill={fill} d="M17.778 8h12.444q0.889 0 1.333 0.444t0.444 1.333v17.333q0 1.333-0.889 2.222t-2.222 0.889h-25.778q-1.333 0-2.222-0.889t-0.889-2.222v-22.222q0-0.889 0.444-1.333t1.333-0.444h14.222q0.444 0 1.111 0.444t0.667 1.333v3.111zM3.111 6.222v20.889h25.778v-16h-11.111q-1.333 0-2.444-0.889t-1.111-2.222v-1.778h-11.111zM12.889 15.111l8 4-8 4v-8z"></path>
        </svg>
    );
};

export default CatalogIcon;