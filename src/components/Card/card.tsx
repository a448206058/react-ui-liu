import React, { FC,  AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export type CardSize = 'lg' | 'sm' 
export type CardType = 'default' | 'shadow-never'

interface BaseCardProps {
  className?: string;
  /**设置 Card 的尺寸 */
  size?: CardSize;
  /**设置 Card 的阴影 */
  cardType?: CardType;
  children: React.ReactNode;
   /**设置 Card 的标题 */
  title?: string;
}
type AnchorCardProps = BaseCardProps & AnchorHTMLAttributes<HTMLElement>
export type CardProps = Partial<AnchorCardProps>
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Card } from 'react-ui-liu'
 * ~~~
 */
export const Card: FC<CardProps> = (props) => {
  const { 
    cardType,
    className,
    size,
    children,
    title,
    ...restProps
  } = props
  // card, card-lg, card-primary
  const classes = classNames('card', className, {
    [`card-${cardType}`]: cardType,
    [`card-${size}`]: size
  })
  return (
    <div
      className={classes}
      {...restProps}
    >
      {title && <div className="liu-card-head">{title}</div>}
      <div className="liu-card-body">{children}</div>
    </div>
  )
}

Card.defaultProps = {
  cardType: 'default'
}

export default Card;