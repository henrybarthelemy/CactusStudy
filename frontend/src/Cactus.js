import {
    Image
} from "@chakra-ui/react";

export default function Cactus(props) {
    const count = props.count;

    const computeSize = (c) => {
        const size = 100 + (10 * c);
        return size;
    };

    const determineSrc = (c) => {
        if (c >= 10) {
            return "/large.png";
        } else if (c >= 5) {
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
