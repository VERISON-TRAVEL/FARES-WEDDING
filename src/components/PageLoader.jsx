import React from 'react'

const PageLoader = ({ visible }) => (
  <div className={`page-loader${visible ? '' : ' hidden'}`} aria-hidden="true">
    <div className="loader-initials">ف &amp; ف</div>
  </div>
)

export default PageLoader
