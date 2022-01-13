import { PropsWithChildren } from "react";


const Wrapper = (props: PropsWithChildren<{}>) => {
    return props.children;
}

export default Wrapper;