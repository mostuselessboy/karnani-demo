import Head from "next/head";
import {CompBigBanner, CompTimeline, CompCardCollection, Navbar, Footer, CompFAQ} from '@/pages/component/Components';
export default function Home() {
  const cardProgramBenifitData = [
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'Unlimited Income',
      description: 'Unlock unlimited earning potential with our uncapped commission structure.',
    },
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'Export Mentorship',
      description: 'Enjoy competitive commission rates that reward your hard work and dedication.',
    },
    {
      imgUrl: '/images/iconCom.png',
      heading: 'Flexible Work',
      description: 'Work on your own terms with flexible schedules and remote opportunities.',
    },
    {
      imgUrl: '/images/iconCom.png',
      heading: 'Training',
      description: 'Gain valuable industry experience and develop essential skills for your career growth.',
    },
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'Recommendation Letter',
      description: 'Join us at an early stage and be part of shaping the future of our partnership.',
    },
    {
      imgUrl: '/images/iconMonetize.png',
      heading: 'Flexible Work',
      description: 'Experience a straightforward and transparent process from start to finish.',
    },

  ];
  
  const faqs = [
    {
      question: "What is the Karnani’s Ambassadors Program?",
      answer: "The Karnani’s Ambassadors Program is...",
    },
    {
      question: "How do I apply for the Karnani’s Ambassadors Program?",
      answer: "To apply for the Karnani’s Ambassadors Program, you...",
    },
    {
      question: "How often commissions are paid?",
      answer: "Commissions are paid...",
    },
    {
      question: "What support will I receive?",
      answer: "You will receive support in...",
    },
    {
      question: "Can I work from home?",
      answer: "Yes, you can work from home...",
    },
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
        title={"Join Karnani's Property Ambassadors Program!"}
        description={"Join us in revolutionizing student accommodation marketing. Earn unlimited income while empowering your audience."}
        buttonText={"Join Now and Start Earning!"}
        bgImage={"/images/banner4.png"}
        positionAlign={"left"}
        bannerHeight={'35rem'}
      />
      <CompTimeline title={'How it Works?'} steps={timelineData}></CompTimeline>

      <CompBigBanner
        title={"About the Program"}
        description={"Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in. Quisque tincidunt pulvinar quam vitae tincidunt. Nullam dignissim, ligula et accumsan faucibus, nibh dolor sodales velit, quis maximus augue est at lorem. Quisque efficitur molestie tellus et sollicitudin. Donec id ligula ultrices, pulvinar arcu in, maximus enim. Phasellus et egestas risus, non tempor est. Nam eu eros eu neque maximus mollis eget eget nunc. "}
        buttonText={"View More"}
        bgImage={"/images/banner5.png"}
        positionAlign={"right"}
        bannerHeight={'35rem'}
      />

      <CompCardCollection title="Program Benifits" cardDataArray={cardProgramBenifitData} />
      
      <CompBigBanner
        title={"Ready to be a Property Ambassador?"}
        description={"Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in. Quisque tincidunt pulvinar quam vitae tincidunt. Nullam dignissim, ligula et accumsan faucibus, nibh dolor sodales velit, quis maximus augue est at lorem. Quisque efficitur molestie tellus et sollicitudin. Donec id ligula ultrices, pulvinar arcu in, maximus enim. Phasellus et egestas risus, non tempor est. Nam eu eros eu neque maximus mollis eget eget nunc."}
        buttonText={"Apply Now"}
        bgImage={"/images/banner6.png"}
        positionAlign={"left"}
        bannerHeight={'30rem'}
      />


      <CompFAQ faqs={faqs}></CompFAQ>
      </main>
    </>
  );
}
