"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import AdvantagesSlider from "./AdvantagesSlider";

const HomeAdvantagesAnimated = () => {
  return (
    <section className="home-advantages">
      <div className="_container">
        <div className="home-advantages__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <div className="label">
              <img src="/images/lightning.svg" />
              <span>Main advantages</span>
            </div>
            <h2>Why Choose Our Services?</h2>
          </motion.div>
          <AdvantagesSlider />
        </div>
      </div>
    </section>
  );
};

export default HomeAdvantagesAnimated;
