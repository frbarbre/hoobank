import React from 'react'

const Button = ({ styles, content }) => {
  return (
    <button type='button' className={`${styles} py-[18px] px-[33px] font-poppins font-medium text-[18px] text-primary hover:text-white bg-blue-gradient rounded-[10px] outline-none`}>
      {content}
    </button>
  )
}

export default Button