import Head from "next/head";
import {CompBigBanner, CompTimeline, CompCardCollection, Navbar, Footer} from '@/pages/component/Components';
export default function Home() {
  const cardProgramBenifitData = [
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'Uncapped Earnings',
      description: 'Unlock unlimited earning potential with our uncapped commission structure.',
    },
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'Attractive Commission Rates',
      description: 'Enjoy competitive commission rates that reward your hard work and dedication.',
    },
    {
      imgUrl: '/images/iconCom.png',
      heading: 'Flexible Work',
      description: 'Work on your own terms with flexible schedules and remote opportunities.',
    },
    {
      imgUrl: '/images/iconCom.png',
      heading: 'Valuable Experience',
      description: 'Gain valuable industry experience and develop essential skills for your career growth.',
    },
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'Early Stage Partnership',
      description: 'Join us at an early stage and be part of shaping the future of our partnership.',
    },
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'Simple and Transparent Process',
      description: 'Experience a straightforward and transparent process from start to finish.',
    },
    {
      imgUrl: '/images/iconCom.png',
      heading: 'Support and Resources',
      description: 'Access comprehensive support and resources to help you succeed in your role.',
    }
  ];
  

  const cardFeatureData = [
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'Uncapped Earnings',
      description: 'Unlock unlimited earning potential with our uncapped commission structure.',
    },
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'No Caps on Commissions',
      description: 'Enjoy the freedom of earning without any limits on your commissions.',
    },
    {
      imgUrl: '/images/iconCom.png',
      heading: 'Simple Referral Process',
      description: 'Refer clients easily with our streamlined and hassle-free referral process.',
    }
  ];

  const timelineData = [
    { title: "Register", description: "Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in." },
    { title: "Orientation", description: "Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in." },
    { title: "Content Delivery", description: "Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in." },
    { title: "Lead Genertion", description: "Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in." },
    { title: "Earn Uncapped Commission", description: "Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in." } 

  ];
  

  return (
    <>

      <main>
      <CompBigBanner
        title={"Unlock Your Earning Potential with Karnani’s Influencer Partnership Program!"}
        description={"Join us in revolutionizing student accommodation marketing. Earn unlimited income while empowering your audience."}
        buttonText={"Join Now and Start Earning!"}
        bgImage={"/images/banner1.png"}
        positionAlign={"left"}
        bannerHeight={'35rem'}
      />
      <CompCardCollection title="Key Features" cardDataArray={cardFeatureData} />

      <CompBigBanner
        title={"About the Program"}
        description={"Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in. Quisque tincidunt pulvinar quam vitae tincidunt. Nullam dignissim, ligula et accumsan faucibus, nibh dolor sodales velit, quis maximus augue est at lorem. Quisque efficitur molestie tellus et sollicitudin. Donec id ligula ultrices, pulvinar arcu in, maximus enim. Phasellus et egestas risus, non tempor est. Nam eu eros eu neque maximus mollis eget eget nunc. "}
        buttonText={"View More"}
        bgImage={"/images/banner2.png"}
        positionAlign={"right"}
        bannerHeight={'35rem'}
      />
      <CompTimeline title={'How it Works?'} steps={timelineData}></CompTimeline>

      
      <CompBigBanner
        title={"Ready to be Infuencer"}
        description={"Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in. Quisque tincidunt pulvinar quam vitae tincidunt. Nullam dignissim, ligula et accumsan faucibus, nibh dolor sodales velit, quis maximus augue est at lorem. Quisque efficitur molestie tellus et sollicitudin. Donec id ligula ultrices, pulvinar arcu in, maximus enim. Phasellus et egestas risus, non tempor est. Nam eu eros eu neque maximus mollis eget eget nunc."}
        buttonText={"Apply Now"}
        bgImage={"/images/banner3.png"}
        positionAlign={"left"}
        bannerHeight={'35rem'}
      />

      <CompCardCollection title="Program Benifits" cardDataArray={cardProgramBenifitData} />

      
      </main>
    </>
  );
}
