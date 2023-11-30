import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { HomeCta } from 'src/sections/home/home-cta';
import { HomeFaqs } from 'src/sections/home/home-faqs';
import { HomeFeatures } from 'src/sections/home/home-features';
import { HomeJoiningBenefits } from 'src/sections/home/home-joining-benefits';
import { HomeSolidityFeatures } from 'src/sections/home/home-solidity-features';
import { HomeFrontendComponents } from 'src/sections/home/home-frontend-components';
import { HomeChainlinkCode } from 'src/sections/home/home-chainlink-code';
import { HomeWebThreePayments } from 'src/sections/home/home-webthree-payments';



import { HomeHero } from 'src/sections/home/home-hero';
import { HomeReviews } from 'src/sections/home/home-reviews';

const Page = () => {
  usePageView();

  return (
    <>
      <Seo />
      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeJoiningBenefits />
        <HomeSolidityFeatures />
        <HomeChainlinkCode />
        <HomeFrontendComponents />
        <HomeWebThreePayments />
        <HomeReviews />
        <HomeCta />
        <HomeFaqs />
      </main>
    </>
  );
};

Page.getLayout = (page) => (
  <MarketingLayout>
    {page}
  </MarketingLayout>
);

export default Page;
