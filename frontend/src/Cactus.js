import {
    Image
} from "@chakra-ui/react";

export default function Cactus(props) {
    const count = props.count;
    const maxCount = props.maxCount;

    const computeSize = (c) => {
        const size = 100 + (10 * c);
        return size;
    };

    const determineSrc = (c) => {
        const medAmt = Math.floor(maxCount / 3);
        const largeAmt = medAmt * 2;
        if (c >= largeAmt) {
            return "/large.png";
        } else if (c >= medAmt) {
            return "/medium.png";
        } else {
            return "/small.png";
        }
    };

    const stringSize = (c) => {
        return `${computeSize(c)}px`;
    };

    return (
        <Image
            boxSize={stringSize(count)}
            src={determineSrc(count)}
            alt="A cactus"
        ></Image>
    )
}
