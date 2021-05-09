import React from "react"
import "twin.macro"
import tw, { styled } from "twin.macro"
const Footer = () => {
  return (
    <footer tw="w-full px-3 py-4 font-tmono bg-tertiary-fill mt-6 md:mt-12 lg:mt-16">
      <div tw="flex-col mx-auto max-w-4xl">
        <div tw="flex flex-col items-center mx-auto">
          <ul tw="flex gap-2 ">
            <li>twitter</li>
            <li>email</li>
            <li>github</li>
          </ul>
          <ul tw="flex gap-2">
            <li>about</li>
            <li>posts</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
          <p tw="font-tsans font-light text-xs">Tyler Knapp ©2021</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
