const scrollTo = (selector: string, blockPosition:string = "start") => {
  const element:HTMLElement | null = document.querySelector(selector)

  if (element) {
    //offset caused by navbar height
    const yOffset = -80

    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: "smooth" })

    return true
  }

  return false
}

export default scrollTo
