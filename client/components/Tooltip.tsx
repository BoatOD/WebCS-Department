import PropTypes, { Validator } from "prop-types";
import React, { ReactNode } from "react";

const classNames = (...classes: (string | undefined)[]): string =>
    classes.filter(Boolean).join(" ");

interface TooltipProps {
    position: "top" | "bottom" | "left" | "right";
    header: ReactNode;
    prereq: ReactNode;
    credit: ReactNode;
    content: ReactNode;
    children: ReactNode;
}

// Custom PropTypes validator for 'position' prop
const positionValidator: Validator<TooltipProps["position"]> = (
    props,
    propName,
    componentName
) => {
    const validPositions = ["top", "bottom", "left", "right"];
    const position = props[propName];
    if (!validPositions.includes(position)) {
        return new Error(
            `Invalid prop '${propName}' supplied to '${componentName}'. Expected one of: ${validPositions.join(
                ", "
            )}.`
        );
    }
    return null;
};

const Tooltip: React.FC<TooltipProps> = ({ position, content, children, prereq, header, credit }) => (
    <div id="tooltip" className="relative group inline-block">
        <button type="button" className="underline hover:opacity-80">
            {children}
        </button>
        <span
            className={classNames(
                "absolute z-10 hidden group-hover:inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm",
                // "absolute hidden group-hover:inline-block bg-neutral-900 text-white text-xs p-2 whitespace-nowrap rounded",
                position === "top"
                    ? "left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]"
                    : "",
                position === "bottom"
                    ? "left-1/2 -translate-x-1/2 top-[calc(100%+5px)]"
                    : "",
                position === "left"
                    ? "top-1/2 -translate-y-1/2 right-[calc(100%+5px)]"
                    : "",
                position === "right"
                    ? "top-1/2 -translate-y-1/2 left-[calc(100%+5px)]"
                    : ""
            )}
        >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
                <h3 className="font-semibold text-black text-left">{header}</h3>
            </div>
            <div className="px-3 py-2 text-black text-left">
                <p>Prerequisite : {prereq}</p>
                <p className="mb-4">หน่วยกิต : {credit}</p>
                <p>{content}</p>
            </div>
        </span>
        <span
            className={classNames(
                "absolute hidden group-hover:inline-block border-[6px] ",
                position === "top"
                    ? "left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-neutral-900"
                    : "",
                position === "bottom"
                    ? "left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-neutral-900"
                    : "",
                position === "left"
                    ? "top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-neutral-900"
                    : "",
                position === "right"
                    ? "top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-neutral-900"
                    : ""
            )}
        ></span>
    </div>
);

Tooltip.propTypes = {
    position: positionValidator,
    header: PropTypes.node.isRequired,
    prereq: PropTypes.node.isRequired,
    credit: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default Tooltip;
