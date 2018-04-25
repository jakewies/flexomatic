import React from 'react'
import Head from 'next/head'
import { Page, Example } from '../src/components'
import examples from '../src/examples'

const navRoutes = ['Home']

const Docs = () => (
  <div>
    <Head>
      <link href="/static/styles/docs.css" rel="stylesheet" />
    </Head>
    <Page childrenMaxWidth="1400px" routes={navRoutes}>
      <div>{examples.map((example, i) => <Example key={i} example={example} />)}</div>
    </Page>
  </div>
)

export default Docs
