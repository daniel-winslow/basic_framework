import DropdownItem from "./DropdownItem";

interface DropdownItemProps {
    /** Label to display for the dropdown item */
    label: React.ReactNode;
    /** Click handler for the dropdown item */
    onClick: () => void;
}

/** List of dropdown items, optionally divided into top and bottom sections */
const DropdownItemList = ({ topItems, bottomItems }: { topItems: DropdownItemProps[]; bottomItems?: DropdownItemProps[] }) => {
    return (
        <div className="dropdown-item-list">
            <div className="dropdown-item-list-top">
                {topItems.map((item: DropdownItemProps, index: number) => (
                    <DropdownItem key={index} label={item.label} onClick={item.onClick} />
                ))}
            </div>
            {bottomItems && (
                <>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item-list-bottom">
                        {bottomItems.map((item: DropdownItemProps, index: number) => (
                            <DropdownItem label={item.label} onClick={item.onClick} key={index} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
export default DropdownItemList;
export type { DropdownItemProps };