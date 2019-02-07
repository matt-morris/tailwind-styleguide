import React from 'react'
import Link from 'next/link'
import App, { Container } from 'next/app'

import "../styleguide.css"

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <div className={`sg-mx-auto sg-px-5 lg:max-w-4/5`}>
          <header className={`sg-mb-10`}>
            <h1>Tailwind Documentation Extension</h1>
            <nav className={`sg-flex`}>
              <Link href="/">
                <a className={`sg-mr-2`} >Home</a>
              </Link>
              <Link href="/colors">
                <a className={`sg-mr-2`} >Colors</a>
              </Link>
              <Link href="/typography">
                <a className={`sg-mr-2`} >Tyopgraphy</a>
              </Link>
              <Link href="/borders">
                <a className={`sg-mr-2`} >Borders</a>
              </Link>
            </nav>
          </header>
          <Component {...pageProps} />
        </div>
      </Container>
    )
  }
}
