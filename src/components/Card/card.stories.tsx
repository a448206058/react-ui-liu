import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Card from './card'

const defaultButton = () => (
  <Card onClick={action('clicked')}> default button </Card>
)

const buttonWithSize = () => (
  <>
    <Card size="lg" title={'large button '}>内容1</Card>
    <Card size="sm" className="mt-2">内容2</Card>
  </>
)

const buttonWithType = () => (
  <>
    <Card title="有阴影">有阴影内容</Card>
    <Card cardType="shadow-never" title="没有阴影" className="mt-2">没有阴影内容</Card>
  </>
)
storiesOf('Card Component', module)
  .add('Card', defaultButton)
  .add('不同尺寸的 Card', buttonWithSize)
  .add('不同类型的 Card', buttonWithType)