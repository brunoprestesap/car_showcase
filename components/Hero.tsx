"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
              Realize o Seu Sonho: Compre o Carro Perfeito Direto com o Dono!
            </h1>
            <p className="hero__subtitle">
              Chega de intermediários e preços abusivos! Aqui você negocia com segurança, encontra as melhores ofertas e realiza o seu sonho sobre rodas.
            </p>

            <CustomButton 
              title="Descubra o Carro dos Seus Sonhos Agora!"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain"/>
          </div>
          
          <div className="hero__image-overlay"/>
          
        </div>
    </div>
  )
}

export default Hero