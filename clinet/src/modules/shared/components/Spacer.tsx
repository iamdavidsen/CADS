import * as React from 'react'

interface IProps {
    space: number
}

export const Spacer: React.FC<IProps> = ({ space }) => {
    return (
        <div style={{
            flex: space
        }}/>
    )
};
