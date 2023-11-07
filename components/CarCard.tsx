'use client'
import { useState } from "react"
import Image from "next/image"
import { CarProps } from "@/types"
import { CustomButton } from "."
interface CarCardProps {
    car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
    // destructure car
    const { city_mpg, drive, make, model, transmission, year } = car;
  return (
    <div>CarCard</div>
  )
}

export default CarCard