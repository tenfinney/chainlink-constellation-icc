import Head from 'next/head';
import PropTypes from 'prop-types';

export const Seo = (props) => {
  const { title } = props;

  const fullTitle = title
    ? title + 'InterChain_Connector_ '
    : ' Interchain Connector 2023';

  return (
    <Head>
      <title>
        {fullTitle}
      </title>
    </Head>
  );
};

Seo.propTypes = {
  title: PropTypes.string
};
