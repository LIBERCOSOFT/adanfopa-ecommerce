import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Adanfopa Online Dog Store',
  description: 'We sell cheap Dog products',
  keywords: 'Amimal, Dogs, Cheap Dog Poducts, Dog WellBeing',
}

export default Meta
