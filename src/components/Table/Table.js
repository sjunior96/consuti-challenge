import React from 'react';
import "./table.css";

const Table = ({ itens, labels, listActions }) => {
    return (
        <div className="modern-table">
            <div className="table-header">
                <div className="table-row">
                    {labels.map((label) => {
                        if (label.field.includes("actions") && listActions) {
                            return <div className="table-column">{label.text}</div>;
                        }
                        else {
                            if (!label.field.includes("actions")) {
                                return <div className="table-column">{label.text}</div>;
                            }
                            else {
                                return null;
                            }
                        }
                    })}
                </div>
            </div>

            <div className="table-body">
                {itens.map((item) => (
                    <div className="table-row">
                        {labels.map((label) => {
                            if ((label.field.includes("actions") || label.text.includes("Status")) && listActions) {
                                return <div className="table-column">{listActions({ itens: item })}</div>;
                            }
                            else {
                                if (!label.field.includes("actions")) {
                                    return <div className="table-column">{item[label.field]}</div>;
                                }
                            }
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;