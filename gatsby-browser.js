import React from 'react'
import Layout from './src/component/layout'
import Theme from './src/component/theme'

export function wrapPageElement ({element, props}) {
    return (
        <Layout {...props}>{element}</Layout>
    )
}

export function wrapRootElement ({element}) {
    return (
        <Theme>{element}</Theme>
    )
}
