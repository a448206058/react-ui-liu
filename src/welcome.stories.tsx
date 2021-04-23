import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
    .add('welcome', () => {
        return (
            <>
                <h1>欢迎来到 react-ui-liu 组件库</h1>
                <p>这是一套react-type的组件库</p>
                <h3>安装试试</h3>
                <code>
                    npm install react-ui-liu --save
                </code>
            </>
        )
    }, { info: {disable: true}})