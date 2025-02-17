"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Github, Mail } from 'lucide-react';
import { useEffect, useRef, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainImageRef = useRef(null);
  const scrollRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    gsap.fromTo(
      mainImageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
    );

    gsap.utils.toArray('.scroll-trigger').forEach((element) => {
      if (element instanceof Element) {
        gsap.fromTo(element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top bottom-=100",
              end: "bottom top+=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    gsap.to(".leaf-image", {
      y: -10,
      repeat: -1,  
      yoyo: true,  
      ease: "power1.inOut",  
      duration: 2, 
    });
  }, []);
  

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }), []);

  return (
    <motion.div
      ref={scrollRef}
      className="bg-[#11120d] min-h-screen p-2 md:p-3 text-gray-200"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.header variants={itemVariants} className="flex flex-col bg-[#d8cfbc] rounded-2xl p-4 sm:flex-row justify-between items-center mb-8">
        <h1 className="text-xl font-bold font-serif italic text-[#4A3728] ml-4 mb-4 sm:mb-0">Farid Ardiansyah</h1>
        <nav className="space-x-4 mr-4">
          <Link href="#projects" className="text-sm text-[#6B4D30] hover:text-[#4A3728]">PROJECTS</Link>
          <Link href="#about" className="text-sm text-[#6B4D30] hover:text-[#4A3728]">ABOUT</Link>
          <Link href="#contact" className="text-sm text-[#6B4D30] hover:text-[#4A3728]">CONTACT</Link>
        </nav>
      </motion.header>

      <div className="grid grid-cols-12 gap-4">
        <motion.div variants={itemVariants} className="bg-[#d8cfbc] p-6 rounded-md col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-evenly scroll-trigger">
          <motion.div variants={itemVariants} className="flex justify-end items-center">
            <Image 
              src="/png"
              alt="coffee"
              width={150}
              height={150}
              className="object-cover h-auto hover:scale-110 transition-all duration-300 ease-in-out mb-4 mr-4"
              priority
            />
          </motion.div>
          <h2 className="md:text-3xl text-2xl lg:text-4xl font-bold font-serif mb-2 leading-tight text-[#4A3728]">
            Website Portfolio ini berfungsi untuk menampilkan project <span className="italic underline">informasi pribadi</span> maupun motivasi hidup.
          </h2>
        </motion.div>

        <div ref={mainImageRef} className="bg-[#57544a] rounded-md flex items-end justify-center main_image col-span-12 md:col-span-5 lg:col-span-4">
          <Image
            src="/png"
            alt="Farid Ardiansyah"
            width={250}
            height={250}
            className="max-w-[240px] h-auto object-cover pt-12"
            priority
          />
        </div>

        <motion.div variants={itemVariants} className="bg-[#d8cfbc] p-4 rounded-md flex flex-col justify-evenly scroll-trigger col-span-12 md:col-span-7 lg:col-span-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-[#4A3728]">Work</h3>
            <motion.div whileHover={{ scale: 1.2, rotate: 20 }} whileTap={{ scale: 0.9 }}>
              <Link href="">
                <ArrowUpRight className="text-[#6B4D30] cursor-pointer" size={24} />
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src="/jpg"
                alt="skripsi"
                width={400}
                height={250}
                className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col items-start p-2 px-4">
              <h3 className="text-2xl font-semibold text-[#4A3728] mb-2 text-left">Project Skripsi</h3>
              <p className="text-sm font-thin text-left text-black">PROTOTIPE SISTEM ALARM PENDETEKSI ASAP DAN KEBAKARAN DINI MENGGUNAKAN KIPAS DAN POMPA AIR BERBASIS ARDUINO UNO.</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#d8cfbc] p-6 rounded-md scroll-trigger col-span-12 md:col-span-8 lg:col-span-6 flex justify-between gap-4 items-center">
          <Image 
            src="/leaf.png"
            alt="leaf-img"
            className="object-cover h-auto leaf-image"
            width={100}
            height={100}
            priority
          />
          <p className="text-md font-thin text-black">
          Saya bukan seorang ahli teknologi. Saya memandang teknologi dengan mata hobi saya, mata orang normal.berdedikasi dan bersemangat dengan semangat kuat untuk menciptakan pengalaman yang bermakna. belajar perbaiki dengan pola pikir pemecahan masalah, perhatian terhadap detail, dan rasa ingin tahu yang tulus untuk belajar dan berkembang. Selalu siap menghadapi tantangan dengan kegigihan dan komitmen untuk memberikan hasil yang berkualitas.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#57544a] p-6 rounded-md scroll-trigger col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-thin mb-2 text-[#ffddc3]">Have some questions?</h3>
            <motion.div whileHover={{ scale: 1.2, rotate: 20 }} whileTap={{ scale: 0.9 }}>
              <Link href="mailto:fullstack.faridardiansyah061@gmail.com">
                <ArrowUpRight className="mb-2 text-[#D4C6B8] cursor-pointer" size={20} />
              </Link>
            </motion.div>
          </div>
          <h3 className="text-4xl md:text-5xl mt-4 font-sans font-semibold text-[#ffecdd]">Contact me</h3>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#d8cfbc] p-4 rounded-md flex justify-evenly items-center scroll-trigger col-span-12 md:col-span-6 lg:col-span-3">
          {[
            { href: '', Icon: Linkedin },
            { href: '', Icon: Github },
            { href: 'faridardiansyah061@gmail.com', Icon: Mail },
          ].map(({ href, Icon }) => (
            <Link key={href} href={href}>
              <motion.div
                className="text-[#6B4D30] hover:text-[#4A3728]"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={30} />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}