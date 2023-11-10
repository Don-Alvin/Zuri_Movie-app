import { Helmet } from 'react-helmet-async'

const MetaData = ({title, subtitle, content}) => {
  return (
    <Helmet>
        <title>
            {`${title} - Temaso`}
        </title>
        <meta name={subtitle} content={content} />
    </Helmet>
  )
}

export default MetaData