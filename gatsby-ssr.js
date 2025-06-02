import React from 'react'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'en' })

  setHeadComponents([
    // Meta description
    <meta
      key="description"
      name="description"
      content="Cesar Oliveira, a frontend engineer creating cool digital experiences and sharing knowledge about web development, design, and technology."
    />,
    
    // Google APIs/SDKs
    <link key="google-apis-preconnect" rel="preconnect" href="https://www.google.com.br" />,
    <link key="google-apis-dns-prefetch" rel="dns-prefetch" href="https://www.google.com.br" />,
    
    // Google Fonts
    <link key="google-fonts-preconnect" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
    <link key="google-fonts-dns-prefetch" rel="dns-prefetch" href="https://fonts.gstatic.com" />,
    
    // Google Analytics
    <link key="google-analytics-preconnect" rel="preconnect" href="https://analytics.google.com" />,
    <link key="google-analytics-dns-prefetch" rel="dns-prefetch" href="https://analytics.google.com" />,
  ])
} 