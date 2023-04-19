import { FC } from "react";

interface SearchIconProps {
    fill: string;
}

const SearchIcon: FC<SearchIconProps> = ({ fill }) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
            <title>search_20__0</title>
            <path fill={fill} d="M24.444 22.222l7.111 7.111q0.444 0.444 0.444 1.111t-0.444 1.111-1.111 0.444-1.111-0.444l-7.111-7.111q-3.111 2.222-6.444 2.667t-6.667-0.667-5.778-3.778-3.111-6 0.222-6.667 3.556-6 6-3.556 6.667-0.222 6 3.111 3.778 5.778 0.667 6.667-2.667 6.444zM20.889 20.889q2.222-2.222 2.889-4.889t0-5.333-2.667-4.444-4.667-2.667-5.333 0-4.667 2.889-2.889 4.667 0 5.333 2.667 4.667 4.444 2.667 5.333 0 4.889-2.889v0z"></path>
        </svg>
    );
};

export default SearchIcon;