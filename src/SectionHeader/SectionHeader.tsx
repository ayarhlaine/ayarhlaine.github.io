import React, { FunctionComponent } from 'react';
import './SectionHeader.scss';
interface SectionHeaderProp {
    normalText: string;
    redText: string;
}
const SectionHeader: FunctionComponent<SectionHeaderProp> = ({normalText, redText}) => {
    return (
        <div className="sectionHeader">
            <h3 className="sectionHeader__header">{normalText}
            <span className="sectionHeader__header--red">{redText}</span>
            </h3>
        </div>
    )
}

export default SectionHeader
