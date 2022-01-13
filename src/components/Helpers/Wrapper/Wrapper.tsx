import { PropsWithChildren } from "react";


const Wrapper = (props: PropsWithChildren<{}>) => {
    return props.children as JSX.Element;
}

export default Wrapper;