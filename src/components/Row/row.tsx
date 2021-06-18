import React, { FC } from 'react'
import classNames from 'classnames'

export type align = 'top' | 'middle' | 'bottom'
export type gutter = number | object | 'array'
export type justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'
export type wrap = boolean

export interface RowProps {
    className?: string;
    align?: align;
    gutter?: gutter;
    justify?: justify;
    wrap?: wrap;
    styles?: React.CSSProperties;
}

const Row: FC<RowProps> = (props) => {
    const {
        className,
        align,
        gutter,
        justify,
        wrap,
        styles,
        ...restProps
    } = props
    const classes = classNames('row', className, {
        'liu-row': true,
        [`liu-row-${align}`]: align,
        [`liu-row-${justify}`]: justify,
    })
    return (
        <div className={classes} style={styles} {...restProps}></div>
    )
}

Row.defaultProps = {
    align: 'top',
    gutter: 0,
    justify: "start",
    wrap: true
}

export default Row;