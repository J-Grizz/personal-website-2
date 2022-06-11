import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'yc99dxvv',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
})
