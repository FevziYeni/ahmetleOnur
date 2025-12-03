import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AnimatedSection from "./animatedSection";
import { Card } from "./ui/Card";

// Görselleri public altına koyabilirsin (örneğin: public/images/grup.jpg gibi)
import grupImg from "../assets/lessons/grup.png";
import ozelImg from "../assets/dersler/ozel.jpg";
import yetiskinImg from "../assets/dersler/yetiskin.jpg";

const lessons = [
  {
    title: "Grup Derslerimiz",
    description:
      "Başlangıç ve orta seviye için uygun grup derslerimizde, aynı seviyedeki öğrencilerle birlikte yüzme öğrenebilirsiniz.",
    price: "₺2.000 / ay",
    image: grupImg,
  },
  {
    title: "Özel Derslerimiz",
    description:
      "Birebir özel yüzme derslerimizde, kişiye özel program ve hızlı öğrenme imkanı sağlıyoruz.",
    price: "₺4.500 / ay",
    image: grupImg,
  },
  {
    title: "Yetişkin Derslerimiz",
    description:
      "Hiç yüzme bilmeyen yetişkinler için sıfırdan başlayan programlarımızla güvenli ve özgüvenli yüzmeyi öğrenin.",
    price: "₺3.000 / ay",
    image: grupImg,
  },
];

const LessonsSection = () => {
  const navigate = useNavigate();

  return (
    <AnimatedSection className="p-8 py-20">
      {/* Başlık */}
      <h1 className="text-6xl font-bold mb-6 text-white text-center pb-8">
        Derslerimiz
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {lessons.map((lesson, i) => (
          <Card className="rounded-lg shadow-lg bg-white/10" key={i}>
            <img
              src={lesson.image}
              alt={`${lesson.title} - Ahmetle Yüzüyorum`}
              className="w-full h-[250px] object-cover rounded-t-lg"
            />
            <div className="pt-4 text-left p-4">
              <h2 className="text-xl font-semibold text-blue-400">
                {lesson.title}
              </h2>
              <p className="text-base text-white/90 mb-3">
                {lesson.description}
              </p>
              <p className="text-lg font-bold text-cyan-400">{lesson.price}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Derslerimiz Butonu */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/lessons")}
          aria-label="Ahmetle Yüzüyorum Yüzme Kursu Dersleri"
          className="inline-block py-4 px-8 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-500 transition-colors duration-300 shadow-lg"
        >
          Tüm Derslerimizi Görüntüle
        </button>
      </div>
    </AnimatedSection>
  );
};

export default LessonsSection;
