import React, { FC } from 'react'
import classNames from 'classnames'

export type flex = string | number
export type offset = number
export type order = number
export type pull = number
export type push = number
export type span = number
export type xs = number | object
export type sm = number | object
export type md = number | object
export type lg = number | object
export type xl = number | object
export type xxl = number | object

export interface ColProps {
    className?: string;
    flex?: flex;
    offset?: offset;
    order?: order;
    pull?: pull;
    push?: push;
    span?: span;
    xs?: xs;
    sm?: sm;
    md?: md;
    lg?: lg;
    xl?: xl;
    xxl?: xxl;
    styles?: React.CSSProperties;
}

const Col: FC<ColProps> = (props) => {
    const {
        className,
        flex,
        offset,
        order,
        pull,
        push,
        span,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        styles,
        ...restProps
    } = props
    const classes = classNames('btn', className, {
        'liu-col': true,
        [`liu-col-${flex}`]: flex,
        [`liu-col-${offset}`]: offset,
        [`liu-col-${order}`]: order,
        [`liu-col-${pull}`]: pull,
        [`liu-col-${push}`]: push,
        [`liu-col-${span}`]: span,
        [`liu-col-${xs}`]: xs,
        [`liu-col-${sm}`]: sm,
        [`liu-col-${md}`]: md,
        [`liu-col-${lg}`]: lg,
        [`liu-col-${xl}`]: xl,
        [`liu-col-${xxl}`]: xxl
    })
    return (
        <div className={classes} style={styles} {...restProps}></div>
    )
}

Col.defaultProps = {
    offset: 0,
    order: 0,
    pull: 0,
    push: 0
}

export default Col;