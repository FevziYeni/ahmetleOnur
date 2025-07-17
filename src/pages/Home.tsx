import React from "react";
import { Helmet } from "react-helmet-async";

import AboutSection from "../components/aboutSec";
import ContactSection from "../components/contactSec";
import ProjectsSection from "../components/content";
import FeaturesSection from "../components/features";
import ProjectCardsSection from "../components/projectSec";
import RiskChartSection from "../components/riskChart";
import HeroSection from "../components/slayt";
import ScrollToTopButton from "../components/scrollToUp";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Yeni RM İnşaat | Kentsel Dönüşüm ve Konut Projeleri</title>
        <meta
          name="description"
          content="Yeni RM İnşaat, 17 yıllık tecrübesiyle İstanbul’da güvenli, modern ve sürdürülebilir inşaat projeleri sunar. Kentsel dönüşümde öncü bir firma."
        />
        <meta
          name="keywords"
          content="yeni rm, yeni rm inşaat, bayrampaşa inşaat, bayrampaşa müteahhit, bayrampaşa konut projeleri, istanbul müteahhit firmaları, toplu konut bayrampaşa, bayrampaşa yapı firmaları, istanbul inşaat firmaları, güvenilir müteahhit, kurumsal müteahhit, bayrampaşa kentsel dönüşüm, yeni konut projeleri, inşaat şirketi istanbul, yeni rm yapı, kaliteli konut projeleri, uygun fiyatlı konutlar, proje geliştirme firması, anahtar teslim inşaat, toplu konut müteahhit, modern konut projeleri, bayrampaşa yapı denetim, mimari proje firmaları, müteahhitlik hizmetleri, konut projeleri 2025, yeni yapılan konutlar, istanbul konut projeleri, bayrampaşa apartman yapımı, yeni rm mimarlık, inşaat projeleri istanbul, güvenilir yapı firması, lüks konut inşaat, yapı müteahhidi, bayrampaşa bina yenileme
"
        />
        <meta property="og:title" content="Yeni RM İnşaat" />
        <meta
          property="og:description"
          content="İstanbul'da 17 yıllık tecrübeye sahip güvenilir inşaat firması. Kentsel dönüşüm ve toplu konut projeleri."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="rounded-lg">
        <HeroSection />
        <RiskChartSection />
        <ProjectCardsSection />
        <ProjectsSection />
        <ContactSection />
        <FeaturesSection />
        <AboutSection />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Home;
